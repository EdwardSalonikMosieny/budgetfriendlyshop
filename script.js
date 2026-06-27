const galleryItems = [
  { image: 'WhatsApp Image 2026-06-27 at 11.12.44 AM.jpeg', title: 'Elegant Thermal Flask', badge: 'Quality Pick', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.19 AM.jpeg', title: 'Everyday Cutlery Set', badge: 'Kitchen Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.36 AM.jpeg', title: 'Glass Food Containers', badge: 'Available', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.12.47 AM.jpeg', title: 'Stainless Cookware Set', badge: 'Budget Friendly', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.17 AM.jpeg', title: 'Modern Dinnerware Set', badge: 'Quality Pick', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.43 AM.jpeg', title: 'Family Air Fryer', badge: 'Home Favourite', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.20 AM.jpeg', title: 'Knife Block Set', badge: 'Kitchen Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.29 AM.jpeg', title: 'Decorative Tissue Boxes', badge: 'Home Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.12.46 AM.jpeg', title: 'Colourful Vacuum Flasks', badge: 'Budget Friendly', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.40 AM.jpeg', title: 'Non-Stick Cookware', badge: 'Quality Pick', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.30 AM.jpeg', title: 'Serving Chafing Dishes', badge: 'Business Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.42 AM.jpeg', title: 'Reusable Water Bottles', badge: 'Available', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.12.41 AM.jpeg', title: 'Decorative Serving Dishes', badge: 'EX UK Item', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.31 AM.jpeg', title: 'Electric Food Choppers', badge: 'Kitchen Helper', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.18 AM.jpeg', title: 'Stainless Cutlery Stand', badge: 'Kitchen Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.37 AM.jpeg', title: 'Insulated Food Carriers', badge: 'Family Favourite', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.21 AM.jpeg', title: 'Countertop Microwave', badge: 'EX UK Item', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.12.49 AM.jpeg', title: 'Non-Stick Frying Pans', badge: 'Quality Pick', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.34 AM.jpeg', title: 'Two-Tier Dish Rack', badge: 'Home Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.28 AM.jpeg', title: 'Insulated Food Warmers', badge: 'Budget Friendly', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.39 AM.jpeg', title: 'Egg Storage & Boiler Set', badge: 'Kitchen Helper', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.12.48 AM.jpeg', title: 'Classic Kitchen Kettles', badge: 'Available', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.23 AM.jpeg', title: 'Compact Microwave Oven', badge: 'EX UK Item', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.32 AM.jpeg', title: 'Double-Door Refrigerator', badge: 'Home Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.33 AM.jpeg', title: 'Cordless Electric Kettle', badge: 'Kitchen Essential', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.12.42 AM.jpeg', title: 'Floral Cooking Pot Set', badge: 'Quality Pick', position: 'center' },
  { image: 'WhatsApp Image 2026-06-27 at 11.18.46 AM.jpeg', title: 'Visit Our Kitchenware Shop', badge: 'Come Say Hello', position: 'center' }
];

const galleryGrid = document.querySelector('#gallery-grid');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxTitle = document.querySelector('#lightbox-title');
const lightboxBadge = document.querySelector('#lightbox-badge');
let activeImageIndex = 0;

function renderGallery() {
  const fragment = document.createDocumentFragment();

  galleryItems.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'gallery-card reveal';
    article.innerHTML = `
      <button type="button" aria-label="View ${item.title}">
        <span class="gallery-image">
          <img src="images/${item.image}" alt="${item.title} available at Budget Friendly Kitchenware" loading="lazy" decoding="async" style="object-position:${item.position}">
        </span>
        <span class="gallery-info">
          <h3>${item.title}</h3>
          <span class="badge">${item.badge}</span>
          <span class="gallery-action">View item <b aria-hidden="true">→</b></span>
        </span>
        <span class="gallery-zoom" aria-hidden="true">⌕</span>
      </button>`;
    article.querySelector('button').addEventListener('click', () => openLightbox(index));
    fragment.appendChild(article);
  });

  galleryGrid.appendChild(fragment);
}

function updateLightbox(index) {
  activeImageIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeImageIndex];
  lightboxImage.src = `images/${item.image}`;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxBadge.textContent = item.badge;
}

function openLightbox(index) {
  updateLightbox(index);
  lightbox.showModal();
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  lightbox.close();
  document.body.classList.remove('lightbox-open');
}

renderGallery();

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => updateLightbox(activeImageIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => updateLightbox(activeImageIndex + 1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') updateLightbox(activeImageIndex - 1);
  if (event.key === 'ArrowRight') updateLightbox(activeImageIndex + 1);
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  navLinks.classList.remove('open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navLinks.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 980) closeMenu();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px' });
  revealElements.forEach((element) => revealObserver.observe(element));
}

const sections = [...document.querySelectorAll('main section[id], header[id]')];
const navigationLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55%', threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelector('#current-year').textContent = new Date().getFullYear();
