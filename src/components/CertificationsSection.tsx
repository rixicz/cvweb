import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, CheckCircle, Terminal, BookOpen } from 'lucide-react';

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
      default:
        return <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="readable-shadow mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.sections.certificationsTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {data.sections.certificationsSubtitle}
          </p>
        </div>

        <div className="readable-shadow grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl p-4 transition-colors hover:bg-slate-100/70 dark:hover:bg-slate-800/40 sm:p-5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCertIcon(cert.category)}
                  </div>
                  {cert.badgeLabel && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                      {cert.badgeLabel}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                  {cert.name}
                </h3>
              </div>

              <div className="mt-2 border-t border-slate-200/70 pt-4 dark:border-slate-800/60">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
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
