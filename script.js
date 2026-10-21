 const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', open);
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

    // Animated counters
    function runCounter(el) {
      const target = +el.dataset.target;
      const step = Math.max(1, Math.ceil(target / 60));
      let n = 0;
      const t = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = n + '+';
        if (n >= target) clearInterval(t);
      }, 25);
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(c => io.observe(c));

    // Newsletter (demo - connect to your backend later)
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('newsletterMsg').classList.remove('hidden');
      e.target.reset();
    });

    // Back-to-top button + footer year
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => toTop.classList.toggle('hidden', window.scrollY < 400));
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('year').textContent = new Date().getFullYear();
