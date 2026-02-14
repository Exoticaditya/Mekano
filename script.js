/* ============================================================
   MEKANO ENGINEERING — Global JavaScript
   Nortech-Style Industrial Theme
   ============================================================ */
(function () {
  'use strict';

  // ---- HEADER SCROLL ----
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 60);
    if (backToTop) backToTop.classList.toggle('visible', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- MOBILE NAV ----
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    // Mobile sub-menu toggles
    mainNav.querySelectorAll(':scope > li').forEach(li => {
      const sub = li.querySelector('.mega-menu, .dropdown');
      if (!sub) return;
      li.querySelector(':scope > a').addEventListener('click', e => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    });
  }

  // ---- MEGA MENU HOVER (Desktop) ----
  const megaCats = document.getElementById('megaCats');
  if (megaCats) {
    const items = megaCats.querySelectorAll('.mega-cat-item');
    const panels = document.querySelectorAll('.mega-products-grid');

    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        items.forEach(i => i.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        item.classList.add('active');
        const cat = item.dataset.cat;
        const target = document.querySelector(`.mega-products-grid[data-panel="${cat}"]`);
        if (target) target.classList.add('active');
      });
    });
  }

  // ---- MODAL ----
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const id = trigger.dataset.modal || trigger.getAttribute('href')?.replace('#', '');
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('active');
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay')?.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Esc to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });

  // ---- COUNTER ANIMATION ----
  function animateCounters() {
    document.querySelectorAll('.counter').forEach(el => {
      if (el.dataset.animated) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      el.dataset.animated = '1';
      const target = parseInt(el.dataset.target, 10);
      const duration = 2000;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * ease);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  // ---- SCROLL REVEAL ----
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---- BACK TO TOP ----
  if (backToTop) {
    backToTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- ACTIVE NAV HIGHLIGHT ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav > li > a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();
    if (currentPage === linkPage) {
      link.classList.add('active');
    } else if (currentPage !== 'index.html' && href.includes('products') && window.location.pathname.includes('products')) {
      link.classList.add('active');
    }
  });

  // ---- QUOTE MODAL — PRE-FILL PRODUCT ----
  window.openQuoteFor = function (productName) {
    const modal = document.getElementById('quoteModal');
    const input = document.getElementById('quoteProduct');
    if (modal) modal.classList.add('active');
    if (input && productName) input.value = productName;
  };

})();
