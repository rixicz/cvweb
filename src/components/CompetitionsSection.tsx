import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CompetitionsSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="competitions" className="section">
      <div className="shell">
        <h2 className="section-title text-primary">
          {data.sections.competitionsTitle}
        </h2>

        <ol className="mt-12 divide-y divide-[var(--line)]">
          {data.competitions.map((competition, idx) => (
            <li
              key={idx}
              className="grid gap-4 py-7 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:items-center md:gap-8"
            >
              <span className="font-mono text-sm tabular-nums text-muted">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                    {competition.name}
                  </h3>
                  {competition.badgeLabel && (
                    <span className="rounded-full border border-[var(--line-strong)] bg-white/5 px-3 py-0.5 text-xs font-medium text-accent sm:text-sm">
                      {competition.badgeLabel}
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-base text-secondary">{competition.organizer}</p>
              </div>

              {competition.certificateUrl && (
                <a
                  href={competition.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex shrink-0 items-center gap-2 self-start text-base font-medium text-secondary hover:text-accent md:self-center"
                >
                  <span>{data.sections.viewCertificate}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
