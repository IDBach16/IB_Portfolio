// =============================================
// Ian Bach Portfolio — Script
// =============================================
document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile nav toggle ----
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // ---- Active nav highlight on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  function setActiveNav() {
    const y = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const h   = sec.offsetHeight;
      const id  = sec.getAttribute('id');
      if (y >= top && y < top + h) {
        navItems.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  // ---- Navbar solid on scroll ----
  const navbar = document.getElementById('navbar');
  function checkNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', checkNavbar, { passive: true });
  checkNavbar();

  // ---- Scroll-triggered fade-in ----
  const animEls = document.querySelectorAll(
    '.card, .credential, .contact-btn, .about-layout, .hero-grid'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  animEls.forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = (i % 6) * 60 + 'ms';
    observer.observe(el);
  });
});
