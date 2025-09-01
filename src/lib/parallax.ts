// src/lib/parallax.ts
type ParallaxLayer = HTMLElement;

function clamp(n: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, n));
}

export function initParallax() {
  
  const containers = Array.from(
    document.querySelectorAll<HTMLElement>('[data-parallax-root]')
  );
  
  
  if (!containers.length) {
    console.warn('Parallax: No containers found with [data-parallax-root]');
    return;
  }

  const activeLayers = new Set<ParallaxLayer>();

  // Observe visibility (perf) - more lenient threshold
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const layers = e.target.querySelectorAll<HTMLElement>('.parallax-layer');
        layers.forEach((l) => {
          if (e.isIntersecting) activeLayers.add(l);
          else activeLayers.delete(l);
        });
      });
    },
    { root: null, threshold: 0, rootMargin: '100px' }
  );

  containers.forEach((c) => io.observe(c));

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  const getScrollY = () => {
    // Cross-browser scroll position (iOS/Safari quirks)
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  };

  const update = () => {
    const scrollY = getScrollY();

    containers.forEach((container) => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerH = container.offsetHeight || 1;

      // progress: 0 when container top hits top of viewport; 1 near container bottom
      const progress = clamp((scrollY - containerTop) / containerH);

      const layers = container.querySelectorAll<HTMLElement>('.parallax-layer');

      layers.forEach((layer) => {
        // Always apply parallax when container is in view, regardless of activeLayers
        const speedX = parseFloat(layer.dataset.speedX || '0');
        const speedY = parseFloat(layer.dataset.speedY || '0');
        const dirX = parseFloat(layer.dataset.dirX || '1');
        const dirY = parseFloat(layer.dataset.dirY || '1');

        const baseX = parseFloat(layer.dataset.baseX || '0'); // px offset if you want
        const baseY = parseFloat(layer.dataset.baseY || '0');

        // Translate based on window scroll (simple, smooth)
        const translateX = baseX + scrollY * speedX * dirX;
        const translateY = baseY + scrollY * speedY * dirY;

        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;

        // Fade by progress
        if (layer.dataset.fade === 'true') {
          const start = parseFloat(layer.dataset.fadeStart || '0.2');
          const end = parseFloat(layer.dataset.fadeEnd || '0.7');
          let opacity = 1;
          if (progress <= start) opacity = 1;
          else if (progress >= end) opacity = 0;
          else opacity = 1 - (progress - start) / (end - start);
          layer.style.opacity = String(clamp(opacity, 0, 1));
        } else {
          layer.style.opacity = '1';
        }
      });
    });
  };

  // Kick off
  
  // Ensure DOM is ready before first update
  setTimeout(() => {
    update();
  }, 100);
  
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    // A resize changes geometry -> re-run once
    requestAnimationFrame(update);
  });
  
  
}
