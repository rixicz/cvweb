import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, ExternalLink, Star } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="readable-shadow mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.sections.projectsTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {data.sections.projectsSubtitle}
          </p>
        </div>

        <div className="readable-shadow grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          {data.projects.map((proj, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between rounded-2xl p-5 transition-colors hover:bg-slate-100/70 dark:hover:bg-slate-800/40 sm:p-6 ${
                proj.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {proj.name}
                    </h3>
                    {proj.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        Featured
                      </span>
                    )}
                  </div>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${proj.name} repository on GitHub`}
                    className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-3 dark:border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
