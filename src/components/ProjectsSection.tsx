import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="shell">
        <h2 className="section-title text-primary">
          {data.sections.projectsTitle}
        </h2>

        <div className="mt-12 divide-y divide-[var(--line)]">
          {data.projects.map((proj, idx) => (
            <article
              key={idx}
              className="grid gap-6 py-10 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:items-start md:gap-8"
            >
              <span className="font-mono text-sm tabular-nums text-muted md:pt-1">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0">
                <h3 className="text-2xl font-semibold">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-accent"
                  >
                    {proj.name}
                  </a>
                </h3>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
                  {proj.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg border border-[var(--line)] bg-white/5 px-3.5 py-1.5 text-sm font-medium text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${proj.name} repository on GitHub`}
                className="action-btn self-start"
              >
                <Github className="h-5 w-5 text-accent" />
                <span>GitHub</span>
                <ArrowUpRight className="h-4 w-4 text-muted" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
