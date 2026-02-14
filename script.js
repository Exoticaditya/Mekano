/* ==========================================
   MEKANO ENGINEERING — MAIN JAVASCRIPT
   ========================================== */

(function () {
  'use strict';

  // ========== DOM REFERENCES ==========
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const quoteModal = document.getElementById('quote-modal');
  const modalClose = document.getElementById('modal-close');
  const quoteProductInput = document.getElementById('quote-product');
  const quoteButtons = document.querySelectorAll('.open-quote-modal');
  const headerQuoteBtn = document.getElementById('header-quote-btn');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-menu a');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // ========== 1. STICKY HEADER — Shadow on scroll ==========
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ========== 2. MOBILE MENU TOGGLE ==========
  function openMobileMenu() {
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (mainNav.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (
      mainNav.classList.contains('open') &&
      !mainNav.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // ========== 3. MOBILE DROPDOWN TOGGLE ==========
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      // Only prevent default on mobile
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.closest('.nav-dropdown');
        parent.classList.toggle('active');
      }
    });
  });

  // ========== 4. QUOTE MODAL ==========
  function openModal(productName) {
    quoteProductInput.value = productName || '';
    quoteModal.classList.add('active');
    document.body.classList.add('modal-open');

    // Focus the first empty input
    setTimeout(function () {
      if (productName) {
        document.getElementById('quote-name').focus();
      } else {
        quoteProductInput.focus();
      }
    }, 300);
  }

  function closeModal() {
    quoteModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // "Get Quote" buttons on product cards
  quoteButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var productName = this.getAttribute('data-product');
      openModal(productName);
    });
  });

  // Header "Get a Quote" button
  if (headerQuoteBtn) {
    headerQuoteBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var productName = this.getAttribute('data-product');
      openModal(productName);
    });
  }

  // Close modal — X button
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal — clicking overlay
  quoteModal.addEventListener('click', function (e) {
    if (e.target === quoteModal) {
      closeModal();
    }
  });

  // Close modal — Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && quoteModal.classList.contains('active')) {
      closeModal();
    }
  });

  // ========== 5. SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#quote-modal') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== 6. INTERSECTION OBSERVER — SCROLL ANIMATIONS ==========
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll(
      '.product-card, .why-card, .trust-item, .contact-card, .about-text, .about-image, .section-header'
    );

    // Add initial hidden state
    animatedElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ========== 7. STAGGER ANIMATION FOR GRID ITEMS ==========
  function staggerAnimation() {
    var grids = document.querySelectorAll('.products-grid, .why-grid, .trust-grid');

    grids.forEach(function (grid) {
      var children = grid.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.transitionDelay = i * 0.1 + 's';
      }
    });
  }

  // ========== 8. ACTIVE NAV LINK HIGHLIGHTING ==========
  function updateActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ========== INIT ==========
  function init() {
    handleScroll();
    initScrollAnimations();
    staggerAnimation();
    updateActiveNav();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
