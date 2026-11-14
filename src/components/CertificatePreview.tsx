import React, { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';

interface CertificatePreviewProps {
  name: string;
  previewUrl: string;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({ name, previewUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group/preview relative mb-4 block w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 dark:border-slate-700 dark:hover:border-slate-500"
        aria-label={`Open ${name} certificate preview`}
      >
        <img
          src={previewUrl}
          alt={`${name} certificate`}
          loading="lazy"
          className="aspect-[4/3] w-full object-contain p-1.5"
        />
        <span className="absolute right-2 top-2 rounded-md bg-slate-950/70 p-1.5 text-white opacity-80 shadow-sm transition-opacity group-hover/preview:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" />
        </span>
      </button>

      {isOpen && (
        <div
          className="no-halo fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} certificate preview`}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 z-10 m-2 rounded-full bg-slate-950/70 p-2 text-white shadow-sm transition-colors hover:bg-slate-950/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={previewUrl}
              alt={`${name} certificate`}
              className="mx-auto max-h-[78vh] max-w-full rounded-xl bg-white object-contain shadow-2xl"
            />

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
