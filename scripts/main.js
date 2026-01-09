// Main site interactions for Erin Free Menopause Coaching landing page

// Update footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Fade-in sections on scroll
const fadeSections = document.querySelectorAll('.fade-section');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  fadeSections.forEach((section) => observer.observe(section));
} else {
  // Fallback: if IntersectionObserver isn't supported, show all sections
  fadeSections.forEach((section) => section.classList.add('visible'));
}

// FAQ accordion
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const panel = toggle.nextElementSibling;
    const icon = toggle.querySelector('.faq-icon');

    const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

    // Close all panels
    document.querySelectorAll('.faq-panel').forEach((p) => {
      p.style.maxHeight = null;
    });
    document.querySelectorAll('.faq-icon').forEach((i) => {
      i.textContent = '+';
    });

    // Open selected if it was closed
    if (!isOpen) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      if (icon) icon.textContent = '–';
    }
  });
});

// Highlight active nav link on scroll
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sectionIds = ['home', 'services', 'blog', 'about'];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function setActiveLink() {
  let currentId = 'home';
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (section && section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === '#' + currentId) {
      link.classList.add('text-sky-700', 'font-medium');
    } else {
      link.classList.remove('text-sky-700', 'font-medium');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', () => {
  // Ensure active nav link is set on initial load
  setActiveLink();
});

