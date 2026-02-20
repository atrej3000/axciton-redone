
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.classList.toggle('is-open', !open);
    siteNav.classList.toggle('is-open', !open);
  });
}

document.querySelectorAll('[data-accordion] button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.hidden = expanded;
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxText = document.getElementById('lightbox-text');
const closeBtn = document.querySelector('.lightbox-close');
document.querySelectorAll('.lightbox-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!lightbox || !lightboxText) return;
    lightboxText.textContent = trigger.dataset.full || 'Preview';
    lightbox.hidden = false;
  });
});
if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => { lightbox.hidden = true; });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.hidden = true; });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) lightbox.hidden = true;
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
