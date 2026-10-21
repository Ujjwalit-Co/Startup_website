(function () {
  const STORAGE_KEY = "samadhanai_users";
  const SESSION_KEY = "samadhanai_current_user";

  function users() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
  }
  function saveUsers(value) { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); }
  function currentUser() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; }
  }
  function setCurrentUser(user) { localStorage.setItem(SESSION_KEY, JSON.stringify(user)); }
  function logout() { localStorage.removeItem(SESSION_KEY); }
  window.SamadhanAuth = { users, saveUsers, currentUser, setCurrentUser, logout };

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const message = document.getElementById("authMessage");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  function showMessage(text, type) {
    if (!message) return;
    message.textContent = text;
    message.className = "auth-message show " + type;
  }
  function showTab(which) {
    if (!loginForm || !registerForm) return;
    const login = which === "login";
    loginForm.classList.toggle("active", login);
    registerForm.classList.toggle("active", !login);
    loginTab?.classList.toggle("active", login);
    registerTab?.classList.toggle("active", !login);
    if (message) message.className = "auth-message";
  }
  loginTab?.addEventListener("click", () => showTab("login"));
  registerTab?.addEventListener("click", () => showTab("register"));

  registerForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("registerName")?.value.trim();
    const email = document.getElementById("registerEmail")?.value.trim().toLowerCase();
    const password = document.getElementById("registerPassword")?.value || "";
    if (!name || !email || password.length < 6) return showMessage("Enter a name, valid email and password of at least 6 characters.", "error");
    const list = users();
    if (list.some(u => u.email === email)) return showMessage("An account with this email already exists. Please login.", "error");
    const user = { id: "USR-" + Date.now(), name, email, password };
    list.push(user); saveUsers(list); setCurrentUser({ id: user.id, name, email });
    showMessage("Account created successfully. Redirecting…", "success");
    setTimeout(() => location.href = "index.html", 500);
  });

  loginForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail")?.value.trim().toLowerCase();
    const password = document.getElementById("loginPassword")?.value || "";
    const user = users().find(u => u.email === email && u.password === password);
    if (!user) return showMessage("Email or password is incorrect. If you are new, create an account first.", "error");
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
    showMessage("Login successful. Redirecting…", "success");
    setTimeout(() => location.href = "index.html", 500);
  });
})();
