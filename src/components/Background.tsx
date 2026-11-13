import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface VantaEffect {
  destroy: () => void;
}

/**
 * Page backdrop: a soft brand-tinted gradient with an optional animated
 * Vanta NET canvas layered over it. The canvas is skipped for
 * prefers-reduced-motion users and below the md breakpoint.
 */
export const Background: React.FC = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [vantaEnabled, setVantaEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wideViewport = window.matchMedia('(min-width: 768px)');

    const update = () => setVantaEnabled(wideViewport.matches && !reducedMotion.matches);

    update();
    reducedMotion.addEventListener('change', update);
    wideViewport.addEventListener('change', update);

    return () => {
      reducedMotion.removeEventListener('change', update);
      wideViewport.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!vantaEnabled) return;

    let cancelled = false;
    let effect: VantaEffect | null = null;

    const init = async () => {
      try {
        const [netModule, threeModule] = await Promise.all([
          import('vanta/dist/vanta.net.min'),
          import('three'),
        ]);

        if (cancelled || !containerRef.current) return;

        const NET = netModule.default;

        effect = NET({
          el: containerRef.current,
          THREE: threeModule,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: theme === 'dark' ? 0x0e8ce9 : 0x38a9f7,
          backgroundColor: theme === 'dark' ? 0x020617 : 0xf1f5f9,
          points: theme === 'dark' ? 7 : 6,
          maxDistance: 18,
          spacing: 20,
          showDots: true,
        });
      } catch (error) {
        // WebGL unavailable — the gradient backdrop remains as the fallback.
        console.warn('Vanta background disabled:', error);
      }
    };

    init();

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, [vantaEnabled, theme]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-slate-100 to-brand-100 dark:from-slate-950 dark:via-slate-950 dark:to-brand-900/40" />
      <div ref={containerRef} className={`absolute inset-0 ${theme === 'dark' ? 'opacity-60' : 'opacity-[0.55]'}`} />
      <div className="scene-veil absolute inset-0" />
    </div>
  );
};
