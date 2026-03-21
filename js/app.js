// Mobile nav toggle
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', function (e) {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    e.stopPropagation();
  });

  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('open')) return;
    if (e.target.closest('.nav-links') || e.target.closest('.nav-toggle')) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });
})();

// Smooth scroll accounting for fixed nav height
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 0;
      const offset = 12;
      const targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight - offset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card, .timeline-item, .product-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

