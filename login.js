// ═══════════════════════════════════════════
// CHEESE CURSOR + FOG + TRAIL
// ═══════════════════════════════════════════
(function initCursor() {
  const fog    = document.getElementById('cursor-fog');
  const cheese = document.getElementById('cursor-cheese');
  if (!cheese) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (fog)    fog.style.display = 'none';
    cheese.style.display = 'none';
    document.body.style.cursor = '';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let fogX   = mouseX, fogY = mouseY;
  let cheeseX = mouseX, cheeseY = mouseY;

  const FOG_LERP    = 0.09;   // fog lags behind smoothly
  const CHEESE_LERP = 0.18;   // cheese follows a bit faster

  let trailCounter = 0;
  const TRAIL_INTERVAL = 4;   // spawn trail dot every N frames

  // ── Mouse tracking ──
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  document.addEventListener('mouseleave', () => {
    if (fog)    fog.style.opacity = '0';
    cheese.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    if (fog)    fog.style.opacity = '1';
    cheese.style.opacity = '1';
  });

  // Click animation
  document.addEventListener('mousedown', () => cheese.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cheese.classList.remove('clicking'));

  // ── Trail spawner ──
  function spawnTrail(x, y) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 520);
  }

  // ── RAF loop ──
  function animate() {
    // Fog — slow lerp
    if (fog) {
      fogX += (mouseX - fogX) * FOG_LERP;
      fogY += (mouseY - fogY) * FOG_LERP;
      fog.style.left = fogX + 'px';
      fog.style.top  = fogY + 'px';
    }

    // Cheese icon — slightly faster lerp
    cheeseX += (mouseX - cheeseX) * CHEESE_LERP;
    cheeseY += (mouseY - cheeseY) * CHEESE_LERP;
    cheese.style.left = cheeseX + 'px';
    cheese.style.top  = cheeseY + 'px';

    // Trail dots — only when moving
    const dist = Math.hypot(mouseX - cheeseX, mouseY - cheeseY);
    trailCounter++;
    if (dist > 3 && trailCounter % TRAIL_INTERVAL === 0) {
      spawnTrail(cheeseX, cheeseY);
    }

    requestAnimationFrame(animate);
  }

  animate();
})();

// ═══════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════
(function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);

  const btn   = document.getElementById('theme-btn');
  const label = document.getElementById('theme-label');
  const icon  = btn.querySelector('i');

  if (newTheme === 'dark') {
    label.textContent = 'Modo Claro';
    icon.className = 'fa-solid fa-sun';
  } else {
    label.textContent = 'Modo Oscuro';
    icon.className = 'fa-solid fa-moon';
  }
  btn.setAttribute('aria-pressed', String(newTheme === 'dark'));
  localStorage.setItem('theme', newTheme);
}

// Sync theme button state on load
window.addEventListener('DOMContentLoaded', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const btn   = document.getElementById('theme-btn');
  const label = document.getElementById('theme-label');
  const icon  = btn?.querySelector('i');
  if (isDark && btn) {
    if (label) label.textContent = 'Modo Claro';
    if (icon)  icon.className = 'fa-solid fa-sun';
    btn.setAttribute('aria-pressed', 'true');
  }
});

// ═══════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════
function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tab-login').classList.toggle('active', isLogin);
  document.getElementById('tab-register').classList.toggle('active', !isLogin);
  document.getElementById('tab-login').setAttribute('aria-selected', String(isLogin));
  document.getElementById('tab-register').setAttribute('aria-selected', String(!isLogin));
  document.getElementById('panel-login').classList.toggle('active', isLogin);
  document.getElementById('panel-register').classList.toggle('active', !isLogin);

  document.getElementById('form-heading').innerHTML = isLogin
    ? 'Bienvenido <em>de vuelta</em>'
    : 'Crea tu <em>cuenta</em>';
  document.getElementById('form-subtext').textContent = isLogin
    ? 'Inicia sesión o crea una cuenta nueva para acceder a todos los beneficios.'
    : 'Únete a The Cheese Shop y disfruta de todos los beneficios de ser miembro.';

  const firstInput = document.getElementById(isLogin ? 'login-email' : 'reg-fname');
  setTimeout(() => firstInput?.focus(), 50);
}

// ═══════════════════════════════════════════
// PASSWORD TOGGLE VISIBILITY
// ═══════════════════════════════════════════
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  const icon = btn.querySelector('i');
  if (icon) {
    icon.className = isPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  }
  btn.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
}

// ═══════════════════════════════════════════
// PASSWORD STRENGTH — Enhanced with checklist
// ═══════════════════════════════════════════
function updateStrength(val) {
  const checks = {
    length:  val.length >= 8,
    upper:   /[A-Z]/.test(val),
    number:  /[0-9]/.test(val),
    special: /[^A-Za-z0-9]/.test(val)
  };

  // Update requirement items
  const reqMap = {
    'req-length':  checks.length,
    'req-upper':   checks.upper,
    'req-number':  checks.number,
    'req-special': checks.special
  };
  for (const [id, met] of Object.entries(reqMap)) {
    const el = document.getElementById(id);
    if (!el) continue;
    const icon = el.querySelector('i');
    if (met) {
      el.classList.add('met');
      if (icon) icon.className = 'fa-solid fa-circle-check';
    } else {
      el.classList.remove('met');
      if (icon) icon.className = 'fa-solid fa-circle-xmark';
    }
  }

  const score = Object.values(checks).filter(Boolean).length;

  const fill   = document.getElementById('strength-fill');
  const label  = document.getElementById('strength-label');
  const bar    = fill?.parentElement;

  if (!fill || !label || !bar) return;

  const pct    = val.length === 0 ? 0 : [0, 25, 50, 75, 100][Math.min(score, 4)];
  const colors = ['', '#c0392b', '#e67e22', '#d4870a', '#2a7a3b'];
  const labels = ['', '⚠ Muy débil', '⚠ Débil', '✓ Aceptable', '✓ Fuerte'];

  fill.style.width      = pct + '%';
  fill.style.background = score > 0 ? colors[Math.min(score, 4)] : 'var(--border-color)';
  bar.setAttribute('aria-valuenow', pct);
  label.textContent = score > 0 && val.length > 0 ? labels[Math.min(score, 4)] : '';
  label.style.color = score > 0 ? colors[Math.min(score, 4)] : 'var(--text-secondary)';
}

// ═══════════════════════════════════════════
// VALIDATION HELPERS
// ═══════════════════════════════════════════
function setFieldState(input, hintEl, error) {
  if (error) {
    input.classList.add('error');
    input.classList.remove('success');
    hintEl.innerHTML = `<span class="hint-error"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> ${error}</span>`;
    input.setAttribute('aria-invalid', 'true');
  } else if (input.value.trim()) {
    input.classList.remove('error');
    input.classList.add('success');
    hintEl.innerHTML = `<span class="hint-success"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Correcto</span>`;
    input.setAttribute('aria-invalid', 'false');
  } else {
    input.classList.remove('error', 'success');
    hintEl.innerHTML = '';
    input.removeAttribute('aria-invalid');
  }
  return !error;
}

// ── LOGIN field validator ──
function validateLoginField(input) {
  const hint = document.getElementById(`${input.id}-hint`);
  if (!hint) return true;

  let error = '';
  const val = input.value.trim();

  if (!val) {
    error = 'Este campo es obligatorio.';
  } else if (input.type === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value)) {
      error = 'Introduce un email válido (ej: nombre@dominio.com).';
    }
  } else if (input.type === 'password') {
    if (input.value.length < 6) {
      error = 'La contraseña debe tener al menos 6 caracteres.';
    }
  }
  return setFieldState(input, hint, error);
}

// ── REGISTER field validator ──
function validateRegField(input) {
  const hint = document.getElementById(`${input.id}-hint`);
  if (!hint) return true;

  let error = '';
  const val = input.value.trim();

  if (!val) {
    error = 'Este campo es obligatorio.';
  } else if (input.type === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value)) {
      error = 'Introduce un email válido (ej: nombre@dominio.com).';
    }
  } else if (input.type === 'text' && input.minLength) {
    if (input.value.length < input.minLength) {
      error = `Mínimo ${input.minLength} caracteres.`;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/.test(input.value)) {
      error = 'Solo se permiten letras y espacios.';
    }
  } else if (input.id === 'reg-pass') {
    if (input.value.length < 8) {
      error = 'La contraseña debe tener mínimo 8 caracteres.';
    }
  } else if (input.id === 'reg-pass-confirm') {
    const pass = document.getElementById('reg-pass').value;
    if (input.value !== pass) {
      error = 'Las contraseñas no coinciden.';
    }
  }
  return setFieldState(input, hint, error);
}

// ═══════════════════════════════════════════
// FORM SUBMIT — LOGIN
// ═══════════════════════════════════════════
function handleLogin(e) {
  e.preventDefault();

  const emailInput = document.getElementById('login-email');
  const passInput  = document.getElementById('login-pass');
  const emailOk    = validateLoginField(emailInput);
  const passOk     = validateLoginField(passInput);

  if (!emailOk || !passOk) {
    toast('Por favor corrige los errores del formulario.', 'error');
    document.querySelector('#panel-login .form-input.error')?.focus();
    return;
  }

  const btn     = document.getElementById('login-submit-btn');
  const btnText = document.getElementById('login-btn-text');
  btn.disabled  = true;
  btn.classList.add('loading');
  btnText.textContent = '';

  // Simulated auth check
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.classList.add('sent');
    btnText.textContent = '✅ Sesión iniciada';
    toast('¡Bienvenido de vuelta! Redirigiendo…', 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 1800);
  }, 1600);
}

// ═══════════════════════════════════════════
// FORM SUBMIT — REGISTER
// ═══════════════════════════════════════════
function handleRegister(e) {
  e.preventDefault();

  const fields = ['reg-fname', 'reg-lname', 'reg-email', 'reg-pass', 'reg-pass-confirm'];
  let valid = fields.every(id => validateRegField(document.getElementById(id)));

  // Check password strength (must be at least "Acceptable")
  const passVal = document.getElementById('reg-pass').value;
  const score   = [
    passVal.length >= 8,
    /[A-Z]/.test(passVal),
    /[0-9]/.test(passVal),
    /[^A-Za-z0-9]/.test(passVal)
  ].filter(Boolean).length;

  if (score < 2) {
    const passHint = document.getElementById('reg-pass-hint');
    passHint.innerHTML = '<span class="hint-error"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> La contraseña es demasiado débil. Añade mayúsculas, números o símbolos.</span>';
    document.getElementById('reg-pass').classList.add('error');
    valid = false;
  }

  // Terms
  const terms     = document.getElementById('terms');
  const termsHint = document.getElementById('terms-hint');
  if (!terms.checked) {
    termsHint.innerHTML = '<span class="hint-error"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Debes aceptar los términos para continuar.</span>';
    valid = false;
  } else {
    termsHint.innerHTML = '';
  }

  if (!valid) {
    toast('Por favor corrige los errores del formulario.', 'error');
    document.querySelector('#panel-register .form-input.error')?.focus();
    return;
  }

  const btn     = document.getElementById('register-submit-btn');
  const btnText = document.getElementById('reg-btn-text');
  btn.disabled  = true;
  btn.classList.add('loading');
  btnText.textContent = '';

  setTimeout(() => {
    btn.classList.remove('loading');
    btn.classList.add('sent');
    btnText.textContent = '✅ Cuenta creada';
    toast('¡Cuenta creada con éxito! Bienvenido a The Cheese Shop 🧀', 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 2000);
  }, 1800);
}

// ═══════════════════════════════════════════
// SOCIAL LOGIN (demo)
// ═══════════════════════════════════════════
// ═══════════════════════════════════════════
// SOCIAL LOGIN — Simulated OAuth flow
// ═══════════════════════════════════════════
function socialLogin(provider) {
  const PROVIDERS = {
    google: {
      name: 'Google',
      icon: '🌐',
      color: '#4285F4',
      // In production: window.location.href = '/auth/google';
      // Here we simulate the OAuth popup → callback → redirect
      simulate: true
    },
    github: {
      name: 'GitHub',
      icon: '🐙',
      color: '#333',
      simulate: true
    }
  };

  const p = PROVIDERS[provider];
  if (!p) return;

  // Find the button that was clicked
  const btn = document.querySelector(`[onclick="socialLogin('${provider}')"]`);
  if (btn) {
    btn.disabled = true;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<span class="social-spinner"></span> Conectando con ${p.name}…`;

    // Simulate OAuth popup window
    const popup = openOAuthPopup(provider, p.name);

    // Simulate callback after 2s (popup closed, tokens received)
    setTimeout(() => {
      if (popup && !popup.closed) popup.close();
      btn.innerHTML = `✅ Sesión iniciada con ${p.name}`;
      btn.style.background = '#2a7a3b';
      btn.style.color = '#fff';
      btn.style.borderColor = '#2a7a3b';
      toast(`✅ Conectado con ${p.name}. Bienvenido a The Cheese Shop 🧀`, 'success');

      // Redirect to main site after success
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1400);
    }, 2000);

    // If user closes popup manually → reset button
    const checkClosed = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(checkClosed);
        btn.disabled = false;
        btn.innerHTML = originalHTML;
        toast(`Inicio con ${p.name} cancelado.`, 'error');
      }
    }, 500);
  }
}

function openOAuthPopup(provider, name) {
  // In a real app this would point to your OAuth endpoint.
  // Here we open a centered blank popup that simulates the flow.
  const w = 480, h = 600;
  const left = window.screenX + (window.outerWidth - w) / 2;
  const top  = window.screenY + (window.outerHeight - h) / 2;

  const popup = window.open(
    'about:blank',
    `oauth_${provider}`,
    `width=${w},height=${h},left=${left},top=${top},resizable=no,scrollbars=no`
  );

  if (popup) {
    const providerColors = { google: '#4285F4', github: '#24292f' };
    const color = providerColors[provider] || '#333';
    const labels = { google: 'Google', github: 'GitHub' };
    const pLabel = labels[provider] || name;
    popup.document.write(`
      <!DOCTYPE html><html><head><meta charset="UTF-8">
      <title>Iniciar sesión con ${pLabel}</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: Arial, sans-serif; background: #f0f0f0;
               display:flex; align-items:center; justify-content:center; min-height:100vh; }
        .box { background:#fff; border-radius:12px; padding:40px 32px; text-align:center;
               box-shadow:0 8px 40px rgba(0,0,0,0.15); width:340px; }
        .logo { font-size:48px; margin-bottom:16px; }
        h1 { font-size:20px; margin-bottom:8px; color:#333; }
        p  { font-size:14px; color:#777; margin-bottom:24px; }
        .spinner { width:40px; height:40px; border:4px solid #eee;
                   border-top-color:${color}; border-radius:50%;
                   animation:spin 0.8s linear infinite; margin:0 auto 20px; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .msg { font-size:13px; color:${color}; font-weight:600; letter-spacing:1px; }
      </style></head><body>
      <div class="box">
        <div class="logo">${provider === 'google' ? '🌐' : '🐙'}</div>
        <h1>Iniciando sesión con ${pLabel}</h1>
        <p>Por favor espera mientras verificamos tu identidad…</p>
        <div class="spinner"></div>
        <p class="msg">Autenticando…</p>
      </div>
      <script>setTimeout(() => window.close(), 2000);<\/script>
      </body></html>`);
    popup.document.close();
  }

  return popup;
}

// ═══════════════════════════════════════════
// FORGOT PASSWORD
// ═══════════════════════════════════════════
function handleForgotPassword(e) {
  e.preventDefault();
  const emailInput = document.getElementById('login-email');
  const email      = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    toast('Introduce tu email primero y luego haz clic en "¿Olvidaste tu contraseña?".', 'error');
    emailInput.focus();
    validateLoginField(emailInput);
    return;
  }
  toast(`📧 Correo de recuperación enviado a ${email}`, 'success');
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
function toast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  el.setAttribute('role', 'alert');
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 350);
  }, 3500);
}