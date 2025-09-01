// Parallax scrolling engine
class ParallaxEngine {
  private containers: HTMLElement[] = [];
  private isScrolling = false;
  private scrollTimeout: number | null = null;

  constructor() {
    this.init();
  }

  private init() {
    // Find all parallax containers
    this.containers = Array.from(document.querySelectorAll('[data-parallax-root]')) as HTMLElement[];
    
    console.log('ParallaxEngine: Found containers:', this.containers.length);
    
    if (this.containers.length === 0) {
      console.warn('No parallax containers found');
      return;
    }

    // Set up scroll listener
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    
    // Initial update
    this.updateParallax();
  }

  private handleScroll() {
    if (!this.isScrolling) {
      this.isScrolling = true;
      requestAnimationFrame(() => {
        this.updateParallax();
        this.isScrolling = false;
      });
    }

    // Clear existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Set timeout to stop scrolling state
    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolling = false;
    }, 100);
  }

  private updateParallax() {
    this.containers.forEach((container, containerIndex) => {
      const layers = container.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;
      
      if (containerIndex === 0) {
        console.log('ParallaxEngine: Found layers in container:', layers.length);
      }
      
      layers.forEach(layer => {
        this.updateLayer(layer);
      });
    });
  }

  private updateLayer(layer: HTMLElement) {
    const speedX = parseFloat(layer.dataset.speedX || '0');
    const speedY = parseFloat(layer.dataset.speedY || '0');
    const fade = layer.dataset.fade === 'true';
    const fadeStart = parseFloat(layer.dataset.fadeStart || '0');
    const fadeEnd = parseFloat(layer.dataset.fadeEnd || '1');

    // Get scroll position
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;

    // Calculate parallax transform
    const translateX = scrollX * speedX;
    const translateY = scrollY * speedY;

    // Apply transform
    layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;

    // Handle fade effect
    if (fade) {
      const container = layer.closest('[data-parallax-root]') as HTMLElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const scrollProgress = Math.abs(containerRect.top) / containerHeight;
        
        // Calculate opacity based on scroll progress
        let opacity = 1;
        if (scrollProgress < fadeStart) {
          opacity = 1;
        } else if (scrollProgress > fadeEnd) {
          opacity = 0;
        } else {
          opacity = 1 - ((scrollProgress - fadeStart) / (fadeEnd - fadeStart));
        }
        
        layer.style.opacity = opacity.toString();
      }
    }
  }
}

// Initialize parallax engine when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('Initializing ParallaxEngine on DOMContentLoaded');
      new ParallaxEngine();
    });
  } else {
    console.log('Initializing ParallaxEngine immediately');
    new ParallaxEngine();
  }
}

export default ParallaxEngine;
