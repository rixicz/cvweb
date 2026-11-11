import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileDown, Copy, Check, MapPin, Briefcase, Mail, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, copied }) => {
  const { data } = useLanguage();

  return (
    <section id="about" className="pt-16 pb-14 md:pt-24 md:pb-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {data.hero.badge}
        </div>

        {/* Main Title & Role */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          {data.meta.name}
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
          {data.meta.headline}
        </p>

        {/* Meta details: Location, Email */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{data.meta.location}</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Conectio Group · NPÚ</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
            <a
              href={`mailto:${data.meta.email}`}
              className="hover:text-slate-900 dark:hover:text-white underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4"
            >
              {data.meta.email}
            </a>
          </div>
        </div>

        {/* Summary */}
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl mb-10">
          {data.hero.summary}
        </p>

        {/* Actions: Download, Copy Email, Socials */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={data.meta.pdfPath}
            download="Patrik_Smidoch_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            <FileDown className="w-4 h-4" />
            <span>{data.hero.downloadCV}</span>
          </a>

          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500" />}
            <span>{copied ? (data.hero.copiedNotice.split('!')[0] + '!') : data.hero.copyEmail}</span>
          </button>

          <div className="flex items-center gap-2 sm:ml-2">
            <a
              href={data.meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={data.meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-500 transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
