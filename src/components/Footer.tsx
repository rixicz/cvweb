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
    <footer id="contact" className="pt-16 pb-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Contact Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white dark:bg-slate-900/90 dark:border dark:border-slate-800 shadow-xl mb-16 text-center sm:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {data.sections.contactTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {data.sections.contactSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href={`mailto:${data.meta.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-slate-900" />
                <span>{data.meta.email}</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : data.hero.copyEmail}</span>
              </button>

              <a
                href={data.meta.pdfPath}
                download="Patrik_Smidoch_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>{data.hero.downloadCV}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {data.footer.rights}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={data.meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={data.meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer ml-2"
            >
              <span>{data.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
