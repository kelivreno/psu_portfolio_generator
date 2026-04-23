/* ============================================
   ROISE UDDIN PORTFOLIO — MAIN.JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll behavior ──────────────────
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    updateActiveNav();
  });

  // ── Mobile menu ─────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  // ── Active nav link on scroll ────────────────
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  }

  // ── Scroll reveal ────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  // ── Skill bars animation ─────────────────────
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pct = entry.target.dataset.pct;
        setTimeout(() => {
          entry.target.style.width = pct + '%';
        }, 200);
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));

  // ── Contact form ─────────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = '#00c896';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  // ── Radar chart (SVG) ────────────────────────
  drawRadar();

  // ── Counter animation ─────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + (el.dataset.suffix || '');
      if (current >= target) clearInterval(interval);
    }, 16);
  }

});

// ── Radar chart drawing ──────────────────────
function drawRadar() {
  const canvas = document.getElementById('radarCanvas');
  if (!canvas) return;

  const skills = [
    { label: 'Cybersecurity', value: 95 },
    { label: 'Network Security', value: 90 },
    { label: 'Python', value: 85 },
    { label: 'Machine Learning', value: 80 },
    { label: 'Cloud Computing', value: 75 },
    { label: 'Research', value: 95 },
  ];

  const size = 300;
  const cx = size / 2, cy = size / 2;
  const r = 110;
  const n = skills.length;
  const svg = canvas;

  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);

  // Grid circles
  [0.25, 0.5, 0.75, 1].forEach(scale => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r * scale);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'rgba(0,212,255,0.1)');
    circle.setAttribute('stroke-width', '1');
    svg.appendChild(circle);
  });

  // Axes & labels
  skills.forEach((skill, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);

    // Axis line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', cx); line.setAttribute('y1', cy);
    line.setAttribute('x2', x); line.setAttribute('y2', y);
    line.setAttribute('stroke', 'rgba(0,212,255,0.1)');
    line.setAttribute('stroke-width', '1');
    svg.appendChild(line);

    // Label
    const lx = cx + (r + 22) * Math.cos(angle);
    const ly = cy + (r + 22) * Math.sin(angle);
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', lx);
    text.setAttribute('y', ly + 4);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#8899aa');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-family', 'JetBrains Mono, monospace');
    text.textContent = skill.label.split(' ')[0];
    svg.appendChild(text);
  });

  // Filled polygon
  const points = skills.map((skill, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const rv = (skill.value / 100) * r;
    return [cx + rv * Math.cos(angle), cy + rv * Math.sin(angle)];
  });

  const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  poly.setAttribute('points', points.map(p => p.join(',')).join(' '));
  poly.setAttribute('fill', 'rgba(0,212,255,0.12)');
  poly.setAttribute('stroke', '#00d4ff');
  poly.setAttribute('stroke-width', '2');
  svg.appendChild(poly);

  // Dots
  points.forEach(([x, y]) => {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', x); dot.setAttribute('cy', y);
    dot.setAttribute('r', '4');
    dot.setAttribute('fill', '#00d4ff');
    dot.setAttribute('filter', 'drop-shadow(0 0 4px #00d4ff)');
    svg.appendChild(dot);
  });
}
