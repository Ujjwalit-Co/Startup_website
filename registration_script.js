(() => {
  const form = document.getElementById('registrationForm');
  const steps = [...document.querySelectorAll('.form-step')];
  const indicators = [...document.querySelectorAll('[data-step-indicator]')];
  const progressBar = document.getElementById('progressBar');
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');
  const submitButton = document.getElementById('submitButton');
  const stepCounter = document.getElementById('stepCounter');
  const formError = document.getElementById('formError');
  const reviewContent = document.getElementById('reviewContent');
  const submitMessage = document.getElementById('submitMessage');
  let currentStep = 0;
  let memberIndex = 0;

  const $ = id => document.getElementById(id);
  const show = (el, visible) => el.classList.toggle('hidden', !visible);
  const value = id => {
    const el = $(id);
    if (!el) return '';
    if (el.type === 'file') return el.files && el.files[0] ? el.files[0].name : '';
    return (el.value || '').trim();
  };
  const setRequired = (id, required) => {
    const el = $(id);
    if (el) el.required = required;
  };
  const applicantType = () => form.querySelector('input[name="applicantType"]:checked')?.value || '';

  function updateApplicantFields() {
    const type = applicantType();
    const student = type === 'MIT Student';
    const external = type === 'External Applicant';
    show($('studentFields'), student);
    show($('externalFields'), external);
    ['enrollment','branchYear','collegeEmail','collegeId'].forEach(id => setRequired(id, student));
    ['organization','currentStatus','address','idProof'].forEach(id => setRequired(id, external));
    if (!student) $('studentFields').querySelectorAll('input').forEach(el => { if (el.type === 'file') el.value = ''; });
    if (!external) $('externalFields').querySelectorAll('input,select,textarea').forEach(el => { if (el.type === 'file') el.value = ''; else el.value = ''; });
  }

  function addMember() {
    memberIndex += 1;
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
      <div class="member-card-head"><span>Team member ${memberIndex}</span><button type="button" class="remove-member">Remove</button></div>
      <div class="field-grid">
        <div class="field"><label>Name</label><input name="memberName[]" placeholder="Full name"></div>
        <div class="field"><label>Role</label><input name="memberRole[]" placeholder="e.g. Co-founder, Developer"></div>
        <div class="field"><label>Email</label><input name="memberEmail[]" type="email" placeholder="name@example.com"></div>
        <div class="field"><label>Phone</label><input name="memberPhone[]" type="tel" placeholder="+91..."></div>
      </div>`;
    card.querySelector('.remove-member').addEventListener('click', () => card.remove());
    $('teamMembers').appendChild(card);
  }

  function updateConditionalFields() {
    const registered = value('registrationStatus') !== '' && value('registrationStatus') !== 'Not registered';
    show($('incorporationDate').closest('.field'), registered);
    setRequired('incorporationDate', false);

    const dpiitYes = value('dpiitStatus') === 'Yes';
    show($('dpiitNumberWrap'), dpiitYes);
    setRequired('dpiitNumber', dpiitYes);

    const needsSpace = value('needsSpace') === 'Yes';
    ['spaceTypeWrap','seatsWrap','durationWrap'].forEach(id => show($(id), needsSpace));
    setRequired('spaceType', needsSpace);
    setRequired('seats', needsSpace);

    const legal = value('needsLegal') === 'Yes';
    show($('legalDetailsWrap'), legal);

    const funding = value('needsFunding') === 'Yes';
    ['fundingAmountWrap','fundUseWrap','shareholdingWrap','schemeWrap'].forEach(id => show($(id), funding));
    setRequired('fundingAmount', funding);
    setRequired('fundUse', funding);

    const prevGrant = value('previousGrant') === 'Yes';
    show($('previousGrantAmountWrap'), prevGrant);
    setRequired('previousGrantAmount', prevGrant);
  }

  function updateStepUI() {
    steps.forEach((step, i) => step.classList.toggle('active', i === currentStep));
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === currentStep);
      indicator.classList.toggle('complete', i < currentStep);
    });
    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    backButton.disabled = currentStep === 0;
    nextButton.classList.toggle('hidden', currentStep === steps.length - 1);
    submitButton.classList.toggle('hidden', currentStep !== steps.length - 1);
    stepCounter.textContent = currentStep === 3 ? 'Final review' : `Step ${currentStep + 1} of 3`;
    formError.classList.add('hidden');
    if (currentStep === 3) buildReview();
    document.querySelector('.form-shell').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validateCurrentStep() {
    formError.classList.add('hidden');
    const current = steps[currentStep];
    const controls = [...current.querySelectorAll('input,select,textarea')].filter(el => {
      if (el.disabled || el.type === 'button' || el.type === 'submit' || el.type === 'radio' || el.type === 'checkbox') return false;
      if (el.closest('.hidden')) return false;
      return true;
    });
    for (const el of controls) {
      if (!el.checkValidity()) {
        el.reportValidity();
        el.focus({ preventScroll: false });
        return false;
      }
    }
    if (currentStep === 0 && !applicantType()) {
      showError('Please choose MIT Student or External Applicant.');
      form.querySelector('input[name="applicantType"]').focus();
      return false;
    }
    // If a team member row is partly filled, validate email format when provided.
    const memberCards = [...$('teamMembers').querySelectorAll('.member-card')];
    for (const card of memberCards) {
      const inputs = [...card.querySelectorAll('input')];
      const anyFilled = inputs.some(input => input.value.trim());
      if (anyFilled) {
        for (const input of inputs) {
          if (input.type === 'email' && input.value && !input.checkValidity()) {
            input.reportValidity(); input.focus(); return false;
          }
        }
      }
    }
    return true;
  }

  function showError(message) {
    formError.textContent = message;
    formError.classList.remove('hidden');
  }

  function safeText(text) {
    return String(text || '').replace(/[&<>"']/g, char => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[char]));
  }

  function fileName(id) {
    const el = $(id);
    return el?.files?.[0]?.name || 'Not uploaded';
  }

  function buildReview() {
    const members = [...$('teamMembers').querySelectorAll('.member-card')].map(card => {
      const inputs = [...card.querySelectorAll('input')];
      const data = inputs.map(el => el.value.trim());
      return data.some(Boolean) ? data.filter(Boolean).join(' · ') : null;
    }).filter(Boolean);
    const sections = [
      {title:'Personal & team information', step:0, rows:[
        ['Applicant type', applicantType()],['Full name',value('fullName')],['Email',value('email')],['Phone',value('phone')],['City / State',[value('city'),value('state')].filter(Boolean).join(', ')],
        ...(applicantType()==='MIT Student' ? [['Enrollment number',value('enrollment')],['Branch & year',value('branchYear')],['College email',value('collegeEmail')],['Faculty mentor',value('facultyMentor')],['College ID',fileName('collegeId')]] : []),
        ...(applicantType()==='External Applicant' ? [['College / organization',value('organization')],['Current status',value('currentStatus')],['Address',value('address')],['ID proof',fileName('idProof')]] : []),
        ['Team name',value('teamName')],['Total team members',value('memberCount')],['Additional team members',members.join(' | ') || 'None added']
      ]},
      {title:'Startup information',step:1,rows:[
        ['Startup name',value('startupName')],['One-line pitch',value('pitch')],['Problem statement',value('problem')],['Proposed solution',value('solution')],['Sector',value('sector')],['Stage',value('stage')],['Target customers',value('customers')],['USP',value('usp')],
        ['Pitch deck URL',value('pitchDeckUrl')],['Website / demo',value('websiteUrl')],['GitHub',value('githubUrl')],['Registration status',value('registrationStatus')],['Incorporation date',value('incorporationDate')],['DPIIT status',value('dpiitStatus')],['DPIIT number',value('dpiitNumber')],['Incorporation certificate',fileName('incorporationCert')],['DPIIT certificate',fileName('dpiitCert')],['Pitch deck file',fileName('pitchDeckFile')]
      ]},
      {title:'Requirements & funding',step:2,rows:[
        ['Incubation space',value('needsSpace')],['Space type',value('spaceType')],['Seats',value('seats')],['Duration (months)',value('duration')],['Mentorship',value('needsMentorship')],['Legal / IP support',value('needsLegal')],['Support details',value('legalDetails')],['Tools / equipment',value('equipment')],['Seeking funding',value('needsFunding')],['Funding amount (₹)',value('fundingAmount')],['Use of funds',value('fundUse')],['Previous government grant',value('previousGrant')],['Previous grant amount (₹)',value('previousGrantAmount')],["Indian promoters' shareholding (%)",value('shareholding')],['Scheme preference',value('scheme')],['Referral source',value('referral')]
      ]}
    ];
    reviewContent.innerHTML = sections.map(section => `
      <section class="review-section">
        <div class="review-section-head"><span>${safeText(section.title)}</span><button type="button" data-edit-step="${section.step}">Edit section ↗</button></div>
        <div class="review-rows">${section.rows.filter(row => row[1] !== '').map(([label,val]) => `<div class="review-row"><small>${safeText(label)}</small><strong>${safeText(val)}</strong></div>`).join('') || '<div class="review-row">No information entered.</div>'}</div>
      </section>`).join('');
    reviewContent.querySelectorAll('[data-edit-step]').forEach(button => button.addEventListener('click', () => {
      currentStep = Number(button.dataset.editStep);
      updateStepUI();
    }));
  }

  form.querySelectorAll('input[name="applicantType"]').forEach(input => input.addEventListener('change', updateApplicantFields));
  ['registrationStatus','dpiitStatus','needsSpace','needsLegal','needsFunding','previousGrant'].forEach(id => $(id).addEventListener('change', updateConditionalFields));
  $('addMember').addEventListener('click', addMember);
  nextButton.addEventListener('click', () => {
    if (!validateCurrentStep()) return;
    currentStep = Math.min(currentStep + 1, steps.length - 1);
    updateStepUI();
  });
  backButton.addEventListener('click', () => {
    currentStep = Math.max(0, currentStep - 1);
    updateStepUI();
  });

  // Front-end-only demonstration: this does not transmit data or persist files.
  form.addEventListener('submit', event => {
    event.preventDefault();
    formError.classList.add('hidden');
    if (!validateCurrentStep()) return;
    if (!$('declarationAccuracy').checked || !$('declarationTerms').checked) {
      showError('Please accept both declarations before submitting.');
      return;
    }
    submitMessage.textContent = 'Demo only: your entries passed front-end validation, but no application has been sent to Nirman Incubation Centre. Connect a secure backend and file-storage service before using this form for real registrations.';
    submitMessage.classList.remove('hidden');
    submitButton.disabled = true;
    submitButton.textContent = 'Demo validated';
    submitMessage.scrollIntoView({behavior:'smooth',block:'center'});
  });

  updateApplicantFields();
  updateConditionalFields();
  updateStepUI();
})();