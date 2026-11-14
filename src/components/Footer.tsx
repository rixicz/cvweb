import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Linkedin, Github, FileDown, ArrowUp, Copy, Check } from 'lucide-react';

interface FooterProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onCopyEmail, copied }) => {
  const { data } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="section border-t border-[var(--line)]">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="section-title text-primary">
              {data.sections.contactTitle}
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <a
              href={`mailto:${data.meta.email}`}
              className="link-underline inline-flex items-center gap-3 text-2xl font-semibold text-primary sm:text-3xl"
            >
              <Mail className="h-6 w-6 shrink-0 text-accent" />
              <span className="break-all">{data.meta.email}</span>
            </a>

            <div className="flex flex-wrap gap-3.5">
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
                aria-label="GitHub Profile"
                className="action-btn"
              >
                <Github className="h-5 w-5 text-accent" />
                <span>GitHub</span>
              </a>

              <a
                href={data.meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="action-btn"
              >
                <Linkedin className="h-5 w-5 text-accent" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start gap-4 border-t border-[var(--line)] pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {data.footer.rights}
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <span>{data.footer.backToTop}</span>
            <ArrowUp className="h-4 w-4 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
};
