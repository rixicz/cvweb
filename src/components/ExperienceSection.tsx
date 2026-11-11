import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.sections.experienceTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {data.sections.experienceSubtitle}
          </p>
        </div>

        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {data.experiences.map((exp, index) => (
            <div key={index} className="relative pl-9 sm:pl-11 group">
              {/* Timeline marker */}
              <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 rounded-full border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-950 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors" />

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-slate-400 dark:text-slate-600">·</span>
                    <span className="text-base font-semibold text-slate-700 dark:text-slate-300">
                      {exp.company}
                    </span>
                    {exp.type && (
                      <span className="text-xs px-2 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 mr-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
