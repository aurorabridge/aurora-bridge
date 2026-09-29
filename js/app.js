/* ============================================================
   Aurora Bridge — Main App Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Current language helper (i18n.js exposes a global `currentLang`, but fall
  // back to localStorage / 'zh' if it is unavailable for any reason).
  function currentLanguage() {
    try {
      if (typeof currentLang !== 'undefined' && currentLang) return currentLang;
    } catch (e) { /* ignore */ }
    return localStorage.getItem('aurora-lang') || 'zh';
  }

  // =========================================
  // Scroll Reveal Fallback
  // -----------------------------------------
  // Elements hidden by .animate-on-scroll / .reveal-* rely on JS to add the
  // `visible` class. If IntersectionObserver misbehaves (or a card is taller
  // than the viewport so its threshold is never met) the content stays at
  // opacity:0 forever. This rect-based pass guarantees anything inside the
  // viewport is always revealed.
  // =========================================
  const revealSelector = '.animate-on-scroll, .reveal-up, .reveal-left, .reveal-right, .reveal-scale';

  window.revealInView = function revealInView() {
    document.querySelectorAll(revealSelector).forEach(el => {
      if (el.classList.contains('visible')) return;
      const rect = el.getBoundingClientRect();
      // Ignore elements that are not rendered yet
      if (rect.width === 0 && rect.height === 0) return;
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  };

  let revealTicking = false;
  function onRevealScroll() {
    if (revealTicking) return;
    revealTicking = true;
    requestAnimationFrame(() => {
      window.revealInView();
      revealTicking = false;
    });
  }

  window.addEventListener('scroll', onRevealScroll, { passive: true });
  window.addEventListener('resize', onRevealScroll);
  window.addEventListener('load', () => window.revealInView());

  // Some content is injected by page-specific scripts inside their own
  // DOMContentLoaded handlers, so re-scan a few times after load, then on every
  // user interaction with the page.
  [0, 300, 1000, 3000].forEach(delay => setTimeout(() => window.revealInView(), delay));
  ['pointerdown', 'keydown', 'touchstart'].forEach(evt =>
    window.addEventListener(evt, onRevealScroll, { passive: true })
  );

  // =========================================
  // Navigation
  // =========================================
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navLinks?.classList.remove('open');
    });
  });

  // Active nav link based on current page
  const currentPath = window.location.pathname;
  navLinks.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' || href === 'index.html') {
      if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath.endsWith('/aurora-bridge/')) {
        link.classList.add('active');
      }
    } else if (href && currentPath.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  // =========================================
  // Aurora Canvas Background (Hero Section)
  // =========================================
  const canvas = document.getElementById('aurora-canvas');
  if (canvas) {
    initAuroraCanvas(canvas);
  }

  // =========================================
  // V2 — Reading Progress Bar
  // =========================================
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    });
  }

  // =========================================
  // V2 — Hero Mouse Parallax
  // =========================================
  const heroSection = document.getElementById('hero-section');
  if (heroSection && canvas) {
    heroSection.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const content = heroSection.querySelector('.hero-content');
      if (content) {
        content.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    });
    heroSection.addEventListener('mouseleave', () => {
      const content = heroSection.querySelector('.hero-content');
      if (content) {
        content.style.transform = 'translate(0, 0)';
      }
    });
  }

  // =========================================
  // V2 — Scroll-Driven Reveal Observer
  // =========================================
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =========================================
  // Scroll Animations (IntersectionObserver)
  // =========================================
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // =========================================
  // Animated Counters
  // =========================================
  const counters = document.querySelectorAll('.about-stat-number');

  if (counters.length > 0) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            const target = counter.textContent;
            // Only animate numeric counters
            const numMatch = target.match(/[\d.]+/);
            if (numMatch) {
              const targetNum = parseFloat(numMatch[0]);
              const suffix = target.replace(numMatch[0], '');
              const prefix = target.startsWith('+') ? '+' : '';
              let current = 0;
              const duration = 2000;
              const step = targetNum / (duration / 16);

              function updateCounter() {
                current += step;
                if (current >= targetNum) {
                  counter.textContent = prefix + targetNum + suffix;
                  return;
                }
                counter.textContent = prefix + Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
              }
              updateCounter();
            }
          });
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      countObserver.observe(statsSection);
    }
  }

  // =========================================
  // Testimonial Carousel
  // =========================================
  const track = document.querySelector('.testimonial-track');
  const dots = document.querySelectorAll('.testimonial-dot');

  if (track && dots.length > 0) {
    let currentSlide = 0;
    const totalSlides = dots.length;

    function goToSlide(index) {
      currentSlide = index;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });

    // Auto-rotate
    setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 5000);
  }

  // =========================================
  // FAQ Accordion
  // =========================================
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(fi => fi.classList.remove('open'));

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // =========================================
  // Product Filters (products.html)
  // =========================================
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tier = btn.dataset.tier;
      document.querySelectorAll('.product-card').forEach(card => {
        if (tier === 'all' || card.dataset.tier === tier) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================
  // Language Toggle
  // =========================================
  window.toggleLang = toggleLang;

  // =========================================
  // Consult Form
  // =========================================
  const consultForm = document.getElementById('consult-form');
  if (consultForm) {
    // Pre-select product from URL
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedProduct = urlParams.get('product');
    if (preselectedProduct) {
      const productSelect = document.getElementById('form-product');
      if (productSelect) {
        productSelect.value = preselectedProduct;
      }
    }

    consultForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = consultForm.querySelector('.form-submit');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = currentLanguage() === 'zh' ? '提交中...' : 'Submitting...';
      }

      // Collect form data (by field name, fallback to the ids used in the markup)
      const val = (name, id) => {
        const el = consultForm.querySelector(`[name="${name}"]`) || document.getElementById(id);
        return el ? el.value : '';
      };
      const formData = {
        name: val('name', 'form-name'),
        email: val('email', 'form-email'),
        phone: val('phone', 'form-phone'),
        product: val('product', 'form-product'),
        status: val('status', 'form-status'),
        message: val('message', 'form-message'),
      };

      try {
        const response = await fetch('https://formspree.io/f/xnjewekr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Form submission failed');
      } catch (err) {
        // Offline / blocked / endpoint not configured — do not lose the lead.
        console.log('Form data (configure Formspree to receive):', formData);
        try {
          const mailtoLink = `mailto:migueleeaurora@gmail.com?subject=Aurora Bridge Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AProduct: ${encodeURIComponent(formData.product)}%0D%0AStatus: ${encodeURIComponent(formData.status)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
          const win = window.open(mailtoLink, '_blank');
          if (!win) window.location.href = mailtoLink;
        } catch (mailErr) {
          console.log('Mailto fallback failed:', mailErr);
        }
      } finally {
        // Always show the success state so the visitor knows we received it
        consultForm.style.display = 'none';
        const successEl = document.getElementById('form-success');
        if (successEl) successEl.classList.add('active');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }

  // =========================================
  // Product Detail Page (product-detail.html)
  // =========================================
  const productDetailContainer = document.querySelector('.product-detail-grid');
  if (productDetailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'starter-bundle';
    const product = getProductById(productId);

    if (product) {
      renderProductDetail(product, currentLanguage());
      // Update page title
      document.title = `${product.name[currentLanguage()]} — Aurora Bridge`;
    }
  }

  // =========================================
  // Synchronize language with i18n re-renders
  // =========================================
  // After i18n.setLang runs, re-render any dynamic product content
  const origSetLang = setLang;
  setLang = function(lang) {
    origSetLang(lang);
    // Re-render product detail if on that page
    if (productDetailContainer) {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id') || 'starter-bundle';
      const product = getProductById(productId);
      if (product) {
        renderProductDetail(product, lang);
        document.title = `${product.name[lang]} — Aurora Bridge`;
      }
    }
  };
});


/* ============================================================
   Aurora Canvas Background
   Kept in its own function so that a failure here can never
   abort the rest of the page initialisation.
   ============================================================ */
/* ============================================================
   Aurora Canvas Background (Hero Section)
   Kept in its own function so that a failure here can never
   abort the rest of the page initialisation.
   ============================================================ */
function initAuroraCanvas(canvas) {
  const ctx = typeof canvas.getContext === 'function' ? canvas.getContext('2d') : null;
  if (!ctx) {
    canvas.style.display = 'none';
    return;
  }

  let width, height;
  let time = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Aurora gradients — multiple flowing color bands
  const auroraLayers = [
    { hue: 200, speed: 0.0003, amplitude: 0.3, yBase: 0.25, opacity: 0.15 },
    { hue: 260, speed: 0.0004, amplitude: 0.25, yBase: 0.35, opacity: 0.12 },
    { hue: 180, speed: 0.0005, amplitude: 0.2, yBase: 0.45, opacity: 0.10 },
    { hue: 220, speed: 0.00035, amplitude: 0.28, yBase: 0.55, opacity: 0.08 },
  ];

  function draw() {
    time += 1;
    ctx.clearRect(0, 0, width, height);

    // Deep base
    const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
    baseGrad.addColorStop(0, '#0A1628');
    baseGrad.addColorStop(0.5, '#0F2440');
    baseGrad.addColorStop(1, '#0A1628');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, width, height);

    // Aurora layers
    auroraLayers.forEach(layer => {
      ctx.save();
      ctx.globalAlpha = layer.opacity;

      for (let x = 0; x < width; x += 2) {
        const y = height * layer.yBase +
          Math.sin(x * 0.003 + time * layer.speed) * height * layer.amplitude +
          Math.sin(x * 0.007 + time * layer.speed * 1.5) * height * layer.amplitude * 0.5 +
          Math.sin(x * 0.012 + time * layer.speed * 2) * height * layer.amplitude * 0.3;

        const grad = ctx.createLinearGradient(x, y - 80, x, y + 80);
        grad.addColorStop(0, `hsla(${layer.hue}, 80%, 60%, 0)`);
        grad.addColorStop(0.5, `hsla(${layer.hue}, 80%, 60%, 0.6)`);
        grad.addColorStop(1, `hsla(${layer.hue}, 80%, 60%, 0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(x, y - 80, 2, 160);
      }

      ctx.restore();
    });

    // Subtle particles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let i = 0; i < 30; i++) {
      const px = ((Math.sin(i * 37.5 + time * 0.002) + 1) / 2) * width;
      const py = ((Math.cos(i * 53.7 + time * 0.003) + 1) / 2) * height;
      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  draw();
}
