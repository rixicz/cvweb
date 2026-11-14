import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileDown, Copy, Check, MapPin, Briefcase, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, copied }) => {
  const { data } = useLanguage();

  return (
    <section id="about" className="relative flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28">
      <div className="shell w-full">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="hero-name text-primary">{data.meta.name}</h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-secondary sm:text-xl">
            {data.hero.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-base text-muted">
            <span className="inline-flex items-center gap-2.5">
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              {data.meta.location}
            </span>
            <span className="inline-flex items-center gap-2.5">
              <Briefcase className="h-5 w-5 shrink-0 text-accent" />
              Conectio Group · NPÚ
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={data.meta.pdfPath}
              download="Patrik_Smidoch_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <FileDown className="h-5 w-5 text-accent" />
              <span>{data.hero.downloadCV}</span>
            </a>

            <button
              type="button"
              onClick={onCopyEmail}
              className="action-btn"
            >
              {copied ? (
                <Check className="h-5 w-5 text-emerald-400" />
              ) : (
                <Copy className="h-5 w-5 text-accent" />
              )}
              <span>{copied ? data.hero.copiedLabel : data.hero.copyEmail}</span>
            </button>

            <a
              href={data.meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <Github className="h-5 w-5 text-accent" />
              <span>GitHub</span>
            </a>

            <a
              href={data.meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <Linkedin className="h-5 w-5 text-accent" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
