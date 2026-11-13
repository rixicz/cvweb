type VantaEffect = {
  destroy: () => void;
  setOptions: (options: Record<string, unknown>) => void;
  resize: () => void;
};

declare module 'vanta/dist/vanta.net.min' {
  const NET: (options: Record<string, unknown>) => VantaEffect;
  export default NET;
}

declare module 'three';
