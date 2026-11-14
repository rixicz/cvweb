import React, { useEffect, useRef, useState } from 'react';

interface VantaEffect {
  destroy: () => void;
}

export const Background: React.FC = () => {
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
          color: 0x38bdf8,
          backgroundColor: 0x0b0f15,
          points: 6,
          maxDistance: 19,
          spacing: 24,
          showDots: true,
        });
      } catch (error) {
        console.warn('Vanta background disabled:', error);
      }
    };

    init();

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, [vantaEnabled]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0b0f15]" />
      <div ref={containerRef} className="absolute inset-0 opacity-40" />
      <div className="scene-veil absolute inset-0" />
    </div>
  );
};
