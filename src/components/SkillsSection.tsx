import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Database, Users, Sparkles, Languages } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { data } = useLanguage();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-brand-600 dark:text-brand-400" />;
      case 1:
        return <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 2:
        return <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 3:
      default:
        return <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.sections.skillsTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {data.sections.skillsSubtitle}
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {data.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Languages className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Languages
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.languages.map((lang, lIdx) => (
              <div
                key={lIdx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40"
              >
                <span className="font-semibold text-slate-900 dark:text-white text-sm">
                  {lang.language}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
