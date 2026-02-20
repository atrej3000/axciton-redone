const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}

document.querySelectorAll('[data-accordion] .accordion-trigger').forEach((btn) => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.hidden = expanded;
  });
});

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const form = document.querySelector('[data-demo-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('[data-form-note]');
    if (note) note.hidden = false;
  });
}

const lightbox = document.querySelector('[data-lightbox]');
if (lightbox) {
  const image = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-item').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.lightboxSrc || '';
      lightbox.showModal();
    });
  });
  closeBtn?.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
