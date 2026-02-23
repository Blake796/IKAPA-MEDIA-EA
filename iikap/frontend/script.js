document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => navLinks?.classList.remove('active'));
  });

  const galleryGrid = document.getElementById('gallery-grid');
  const galleryToggle = document.getElementById('toggle-gallery');

  const showGallery = () => {
    if (!galleryGrid) return;
    galleryGrid.classList.remove('is-hidden');
    if (galleryToggle) galleryToggle.textContent = 'Hide Gallery';
  };

  const hideGallery = () => {
    if (!galleryGrid) return;
    galleryGrid.classList.add('is-hidden');
    if (galleryToggle) galleryToggle.textContent = 'Show Gallery';
  };

  galleryToggle?.addEventListener('click', () => {
    if (galleryGrid?.classList.contains('is-hidden')) showGallery();
    else hideGallery();
  });

  const galleryNavLink = document.querySelector('a[href="#gallery"]');
  galleryNavLink?.addEventListener('click', () => {
    showGallery();
  });

  if (window.location.hash === '#gallery') {
    showGallery();
  }

  // Set hero/intro images from gallery as promised in HTML comments
  const heroImg = document.querySelector('.hero-media img');
  const introImg = document.querySelector('.intro-image img');
  const galleryImages = document.querySelectorAll('#gallery-grid img');

  if (galleryImages.length >= 2) {
    if (heroImg) heroImg.src = galleryImages[0].src;
    if (introImg) introImg.src = galleryImages[1].src;
  }

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el) => observer.observe(el));

  document.querySelectorAll('#gallery-grid img').forEach((img) => {
    img.loading = 'lazy';
    img.addEventListener('error', () => {
      img.src = 'images/logo ikapa.jpeg'; // Using logo as fallback
      img.alt = 'Image not found';
    }, { once: true });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
