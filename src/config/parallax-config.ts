// src/config/parallax-config.ts
export type LayerCfg = {
  pos: Partial<Record<'top'|'right'|'bottom'|'left', string>>; // e.g. 'top': '1rem'
  size: Partial<Record<'width'|'height', string>>;             // e.g. 'width': '100%'
  z: number;
  // parallax
  speedX?: number;
  speedY?: number;
  dirX?: 1 | -1;
  dirY?: 1 | -1;
  fade?: boolean;
  fadeStart?: number;
  fadeEnd?: number;
};

type HeroCfg = Record<'sun'|'mountain'|'waterfallBg'|'waterfall'|'tree', LayerCfg>;
type RewardsCfg = Record<'grass'|'knight'|'tree2', LayerCfg>;

export const heroParallax: Record<'mobile'|'tablet'|'desktop', HeroCfg> = {
  mobile: {
    sun: {
      pos: { top: '25rem', left: '45%' },
      size: { width: '40px', height: '40px' },
      z: 1,
      speedX: 0, speedY: 0.05, dirX: -1, dirY: 1, fade: false
    },
    mountain: {
      pos: { bottom: '-20px', right: '0' },
      size: { width: '70%', height: 'auto' },
      z: 6,
      speedX: 0.20, speedY: 0, dirX: 1, dirY: undefined, fade: false
    },
    waterfallBg: {
      pos: { bottom: '-6px', left: '1.5rem' },
      size: { width: '90%', height: 'auto' },
      z: 3,
      speedX: -0.20, speedY: 0, dirX: -1, dirY: undefined, fade: false
    },
    waterfall: {
      pos: { bottom: '-8px', left: '0' },
      size: { width: '100%', height: 'auto' },
      z: 4,
      speedX: 0.1, speedY: 0, dirX: -1, dirY: undefined, fade: false
    },
    tree: {
      pos: { bottom: '-60px', left: '0' },
      size: { height: '70%', width: 'auto' },
      z: 5,
      speedX: 0.35, speedY: 0, dirX: -1, dirY: undefined, fade: false
    }
  },
  tablet: {
    sun: {
      pos: { bottom: '27rem', left: '46%' },
      size: { width: '60px', height: '60px' },
      z: 1, speedX: 0, speedY: 0.05, dirX: -1, dirY: 1, fade: false
    },
    mountain: {
      pos: { bottom: '-40px', right: '0' },
      size: { width: '90%', height: 'auto' },
      z: 6, speedX: 0.25, speedY: 0, dirX: 1, dirY: undefined, fade: false
    },
    waterfallBg: {
      pos: { bottom: '-1rem', left: '-5rem'},
      size: { width: '100%', height: 'auto' },
      z: 3, speedX: 0.05, speedY: 0, dirX: 1, dirY: undefined, fade: false
    },
    waterfall: {
      pos: { bottom: '1rem', left: '-5rem' },
      size: { width: '100%', height: 'auto' },
      z: 4, speedX: 0.1, speedY: 0, dirX: -1, dirY: undefined, fade: false
    },
    tree: {
      pos: { bottom: '0', left: '-0.5rem' },
      size: { height: '80%', width: 'auto' },
      z: 5, speedX: 0.45, speedY: 0, dirX: -1, dirY: undefined, fade: true, fadeStart: 0.3, fadeEnd: 0.8
    }
  },
  desktop: {
    sun: {
      pos: { top: '20rem', right: '50%', left: '50%' },
      size: { width: '80px', height: '80px' },
      z: 1, speedX: 0, speedY: 0.08, dirX: undefined, dirY: 1, fade: false
    },
    mountain: {
      pos: { bottom: '-55px', right: '0' },
      size: { width: '60%', height: 'auto' },
      z: 6, speedX: 0.20, speedY: 0.08, dirX: 1, dirY: undefined, fade: false
    },
    waterfallBg: {
      pos: { bottom: '-70px', left: '10rem' },
      size: { width: '80%', height: 'auto' },
      z: 3, speedX: 0.15, speedY: 0.10, dirX: -1, dirY: undefined, fade: false
    },
    waterfall: {
      pos: { bottom: '-60px', left: '0' },
      size: { width: '90%', height: 'auto' },
      z: 4, speedX: 0.25, speedY: 0.12, dirX: -1, dirY: undefined, fade: false
    },
    tree: {
      pos: { left: '0', top: '2rem' },
      size: { height: '120%', width: 'auto' },
      z: 5, speedX: 0.40, speedY: 0.10, dirX: -1, dirY: undefined, fade: false
    }
  }
};

export const rewardsParallax: Record<'mobile'|'tablet'|'desktop', RewardsCfg> = {
  mobile: {
    grass: {
      pos: { bottom: '-1.5rem', left: '0' },
      size: { width: '100%', height: '7%' },
      z: 1,
      speedX: 0, speedY: 0, dirX: -1, dirY: undefined, fade: false
    },
    knight: {
      pos: { bottom: '-1rem', right: '6rem' },
      size: { width: '120px', height: 'auto' },
      z: 3,
      speedX: 0.04, speedY: 0, dirX: 1, dirY: undefined, fade: false
    },
    tree2: {
      pos: { bottom: '2.5rem', right: '-1rem' },
      size: { height: 'auto', width: '70%' },
      z: 2,
      speedX: 0.05, speedY: 0, dirX: 1, dirY: undefined, fade: false
    }
  },
  tablet: {
    grass: {
      pos: { bottom: '-5rem', left: '0', right: '0'},
      size: { width: 'auto', height: '18%' },
      z: 1,
      speedX: 0, speedY: 0, dirX: -1, dirY: 1, fade: false
    },
    knight: {
      pos: { bottom: '-1rem', right: '12rem' },
      size: { width: '220px', height: 'auto' },
      z: 3,
      speedX: 0.1, speedY: 0, dirX: 1, dirY: 1, fade: false
    },
    tree2: {
      pos: { bottom: '5rem', right: '-1rem' },
      size: { height: '50%', width: 'auto' },
      z: 2,
      speedX: 0.2, speedY: 0, dirX: 1, dirY: 1, fade: false
    }
  },
  desktop: {
    grass: {
      pos: { bottom: '-4rem', right: '0', left: '0'},
      size: { width: '100%', height: 'auto' },
      z: 1,
      speedX: 0, speedY: 0, dirX: -1, dirY: 1, fade: false
    },
    knight: {
      pos: { bottom: '3rem', right: '12rem' },
      size: { width: '20rem', height: 'auto' },
      z: 3,
      speedX: 0.1, speedY: 0, dirX: 1, dirY: 1, fade: false
    },
    tree2: {
      pos: { bottom: '12rem', right: '-7rem' },
      size: { height: '70%', width: 'auto' },
      z: 2,
      speedX: 0.2, speedY: 0, dirX: 1, dirY: 1, fade: false
    }
  }
};

export function currentBreakpoint(): 'mobile'|'tablet'|'desktop' {
  const w = window.innerWidth;
  if (w < 640) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

export function applyHeroConfig(root: HTMLElement) {
  const cfg = heroParallax[currentBreakpoint()];
  const map: Record<string, keyof typeof cfg> = {
    'parallax-sun': 'sun',
    'parallax-mountain': 'mountain',
    'parallax-waterfall-bg': 'waterfallBg',
    'parallax-waterfall': 'waterfall',
    'parallax-tree': 'tree',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = root.querySelector<HTMLElement>('#' + id);
    if (!el) return;
    const c = cfg[key];

    // Reset conflicting inline positioning first
    ['top','right','bottom','left','width','height'].forEach((p) => {
      (el.style as any)[p] = '';
    });

    // Position & size (independent per breakpoint)
    Object.entries(c.pos).forEach(([k, v]) => ((el.style as any)[k] = v));
    Object.entries(c.size).forEach(([k, v]) => ((el.style as any)[k] = v));
    el.style.zIndex = String(c.z);

    // Parallax data
    el.classList.add('parallax-layer');
    el.dataset.speedX = String(c.speedX ?? 0);
    el.dataset.speedY = String(c.speedY ?? 0);
    el.dataset.dirX = String(c.dirX ?? 1);
    el.dataset.dirY = String(c.dirY ?? 1);
    if (c.fade) {
      el.dataset.fade = 'true';
      el.dataset.fadeStart = String(c.fadeStart ?? 0.2);
      el.dataset.fadeEnd = String(c.fadeEnd ?? 0.7);
    } else {
      el.dataset.fade = 'false';
    }

    // Quality & perf
    el.style.willChange = 'transform, opacity';
    el.style.imageRendering = 'pixelated';
  });
}

export function applyRewardsConfig(root: HTMLElement) {
  const cfg = rewardsParallax[currentBreakpoint()];
  const map: Record<string, keyof typeof cfg> = {
    'parallax-grass': 'grass',
    'parallax-knight': 'knight',
    'parallax-tree2': 'tree2',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = root.querySelector<HTMLElement>('#' + id);
    if (!el) return;
    const c = cfg[key];

    // Reset conflicting inline positioning first
    ['top','right','bottom','left','width','height'].forEach((p) => {
      (el.style as any)[p] = '';
    });

    // Position & size (independent per breakpoint)
    Object.entries(c.pos).forEach(([k, v]) => ((el.style as any)[k] = v));
    Object.entries(c.size).forEach(([k, v]) => ((el.style as any)[k] = v));
    el.style.zIndex = String(c.z);

    // Parallax data
    el.classList.add('parallax-layer');
    el.dataset.speedX = String(c.speedX ?? 0);
    el.dataset.speedY = String(c.speedY ?? 0);
    el.dataset.dirX = String(c.dirX ?? 1);
    el.dataset.dirY = String(c.dirY ?? 1);
    if (c.fade) {
      el.dataset.fade = 'true';
      el.dataset.fadeStart = String(c.fadeStart ?? 0.2);
      el.dataset.fadeEnd = String(c.fadeEnd ?? 0.7);
    } else {
      el.dataset.fade = 'false';
    }

    // Quality & perf
    el.style.willChange = 'transform, opacity';
    el.style.imageRendering = 'pixelated';
  });
}
