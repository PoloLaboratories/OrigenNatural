/**
 * Origen Natural IPS - Main JavaScript
 * Handles navigation, animations, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  initHeaderScroll();

  // Mobile menu
  initMobileMenu();

  // Smooth scroll for anchor links
  initSmoothScroll();

  // Scroll animations
  initScrollAnimations();

  // Testimonial slider
  initTestimonialSlider();

  // Clinic carousel
  initClinicCarousel();

  // Hero carousel
  initHeroCarousel();
});

/**
 * Header scroll effect
 * Adds background and shadow when scrolled
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const scrollThreshold = 50;

  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // Initial check
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');
  const overlay = document.getElementById('overlay');
  const menuLinks = menu?.querySelectorAll('.mobile-menu__link');

  if (!menuBtn || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('mobile-menu--open');
    overlay.classList.add('overlay--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('mobile-menu--open');
    overlay.classList.remove('overlay--visible');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu when clicking a link
  menuLinks?.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('mobile-menu--open')) {
      closeMenu();
    }
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/**
 * Scroll-triggered animations
 * Uses Intersection Observer for performance
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger-children');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Simple testimonial slider
 */
function initTestimonialSlider() {
  const testimonials = [
    {
      quote: 'Gracias a Dios por mis tratamientos, han sido totalmente efectivos. Yo los recomiendo a todos.',
      name: 'María González',
      detail: 'Paciente de Sueroterapia'
    },
    {
      quote: 'Excelente servicio y atención. Todos son amables y muy especiales con los pacientes.',
      name: 'Carlos Rodríguez',
      detail: 'Paciente de Terapia Neural'
    },
    {
      quote: 'Muy buena atención, asesoría y seguimiento. Es un muy buen servicio que recomiendo totalmente.',
      name: 'Ana Martínez',
      detail: 'Paciente de Acupuntura'
    }
  ];

  const dots = document.querySelectorAll('.testimonials__dot');
  const quoteEl = document.querySelector('.testimonial__quote');
  const nameEl = document.querySelector('.testimonial__author-name');
  const detailEl = document.querySelector('.testimonial__author-detail');

  if (!dots.length || !quoteEl) return;

  let currentIndex = 0;
  let autoplayInterval;

  function showTestimonial(index) {
    currentIndex = index;

    // Update content with fade effect
    quoteEl.style.opacity = 0;
    setTimeout(() => {
      quoteEl.textContent = testimonials[index].quote;
      if (nameEl) nameEl.textContent = testimonials[index].name;
      if (detailEl) detailEl.textContent = testimonials[index].detail;
      quoteEl.style.opacity = 1;
    }, 300);

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('testimonials__dot--active', i === index);
    });
  }

  function nextTestimonial() {
    showTestimonial((currentIndex + 1) % testimonials.length);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Click handlers for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showTestimonial(index);
      startAutoplay();
    });
  });

  // Start autoplay
  startAutoplay();

  // Pause on hover
  const slider = document.querySelector('.testimonials__slider');
  slider?.addEventListener('mouseenter', stopAutoplay);
  slider?.addEventListener('mouseleave', startAutoplay);
}

/**
 * Clinic images carousel
 */
function initClinicCarousel() {
  const carousel = document.getElementById('clinicCarousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.cta-immersive__carousel-slide');
  const dots = carousel.querySelectorAll('.cta-immersive__carousel-dot');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayInterval;

  function showSlide(index) {
    currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showSlide(index);
      startAutoplay();
    });
  });

  // Start autoplay
  startAutoplay();

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
}

/**
 * Hero images carousel
 */
function initHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.hero__carousel-slide'));
  const dots = Array.from(carousel.querySelectorAll('.hero__carousel-dot'));

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayInterval = null;

  function showSlide(index) {
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3500);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showSlide(index);
      startAutoplay();
    });
  });

  // Initialize first slide
  showSlide(0);

  // Start autoplay
  startAutoplay();

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
}

/**
 * Utility: Throttle function for performance
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
