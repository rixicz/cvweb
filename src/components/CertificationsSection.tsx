import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, CheckCircle, Terminal, BookOpen, Trophy } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { data } = useLanguage();

  const getCertIcon = (category: string) => {
    switch (category) {
      case 'tech':
        return <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'psychology':
        return <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'language':
        return <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'competition':
      default:
        return <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.sections.certificationsTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {data.sections.certificationsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.certifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCertIcon(cert.category)}
                  </div>
                  {cert.badgeLabel && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {cert.badgeLabel}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                  {cert.name}
                </h3>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/60">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{cert.issuer}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
