const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const lightbox = document.getElementById('lightbox');
const lightboxText = document.getElementById('lightbox-text');
const closeBtn = document.querySelector('.lightbox-close');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

let closeMenu = () => {};
let lastTrigger = null;

const getFocusableElements = (container) => {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute('hidden') && el.getAttribute('aria-hidden') !== 'true');
};

if (menuToggle && siteNav) {
  const navLinks = Array.from(siteNav.querySelectorAll('a'));
  menuToggle.setAttribute('aria-label', 'Open navigation');

  const syncDesktopNavState = () => {
    if (window.innerWidth > 900) {
      siteNav.setAttribute('aria-hidden', 'false');
    } else if (menuToggle.getAttribute('aria-expanded') !== 'true') {
      siteNav.setAttribute('aria-hidden', 'true');
    }
  };

  closeMenu = ({ focusToggle = false } = {}) => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.classList.remove('is-open');
    siteNav.classList.remove('is-open');
    siteNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
    if (focusToggle) menuToggle.focus();
  };

  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation');
    menuToggle.classList.add('is-open');
    siteNav.classList.add('is-open');
    siteNav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
    if (navLinks[0]) navLinks[0].focus();
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu({ focusToggle: true });
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('click', (event) => {
    const clickedOutside = !siteNav.contains(event.target) && !menuToggle.contains(event.target);
    if (clickedOutside) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
    syncDesktopNavState();
  });

  syncDesktopNavState();
}

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastTrigger) lastTrigger.focus();
};

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!lightbox || !lightboxText || !closeBtn) return;
    lastTrigger = trigger;
    lightboxText.textContent = trigger.dataset.full || 'Preview';
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeBtn.focus();
  });
});

if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (event) => {
  const menuOpen = menuToggle && menuToggle.getAttribute('aria-expanded') === 'true';
  const lightboxOpen = lightbox && !lightbox.hidden;

  if (event.key === 'Escape') {
    if (lightboxOpen) {
      closeLightbox();
      return;
    }
    if (menuOpen) {
      closeMenu({ focusToggle: true });
    }
  }

  if (event.key === 'Tab' && lightboxOpen) {
    const focusable = getFocusableElements(lightboxContent);
    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelectorAll('[data-accordion] button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.hidden = expanded;
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
