import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.sections.educationTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {data.sections.educationSubtitle}
          </p>
        </div>

        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 ml-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>

              <ul className="space-y-2">
                {edu.description.map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
