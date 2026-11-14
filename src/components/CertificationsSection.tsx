import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CertificationsSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="certifications" className="section">
      <div className="shell">
        <h2 className="section-title text-primary">
          {data.sections.certificationsTitle}
        </h2>

        <ul className="mt-12 divide-y divide-[var(--line)]">
          {data.certifications.map((cert, idx) => (
            <li
              key={idx}
              className="flex flex-col justify-between gap-4 py-7 sm:flex-row sm:items-center"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                    {cert.name}
                  </h3>
                  {cert.badgeLabel && (
                    <span className="rounded-full border border-[var(--line-strong)] bg-white/5 px-3 py-0.5 text-xs font-medium text-accent sm:text-sm">
                      {cert.badgeLabel}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-base text-secondary">
                  {cert.issuer}
                </p>
              </div>

              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex shrink-0 items-center gap-2 self-start text-base font-medium text-secondary hover:text-accent sm:self-center"
                >
                  <span>{data.sections.viewCertificate}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
