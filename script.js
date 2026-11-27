(() => {
  const whatsappNumber = '919630258055';
  const variants = document.querySelectorAll('.variant-option');
  const selectedSize = document.getElementById('selected-size');
  const selectedPrice = document.getElementById('selected-price');
  const productWhatsapp = document.getElementById('product-whatsapp');

  function updateProduct(size, price, activeButton) {
    selectedSize.textContent = size;
    selectedPrice.textContent = `₹${price}`;
    variants.forEach(button => {
      const active = button === activeButton;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const message = `Hello Shanti Spices, I am interested in the ${size} Achaar Masala pack (MRP ₹${price}). Please share availability and details.`;
    productWhatsapp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  variants.forEach(button => button.addEventListener('click', () => {
    updateProduct(button.dataset.size, button.dataset.price, button);
  }));

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !isOpen);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  }));

  document.getElementById('current-year').textContent = new Date().getFullYear();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    document.documentElement.classList.add('js-motion');
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    reveals.forEach(element => revealObserver.observe(element));

    // GSAP enhances motion when its CDN libraries are available; CSS/IO remain as fallback.
    window.addEventListener('load', () => {
      if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('[data-parallax]').forEach(element => {
          const speed = Number(element.dataset.parallax || 0.08);
          gsap.to(element, { yPercent: speed * -100, ease: 'none', scrollTrigger: {
            trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.6
          }});
        });
        gsap.from('.hero-copy > *', { y: 20, opacity: 0, duration: 0.75, stagger: 0.09, ease: 'power2.out', delay: 0.15 });
      }
    });
  }
})();
