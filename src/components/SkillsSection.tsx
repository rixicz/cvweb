import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="shell">
        <h2 className="section-title text-primary">
          {data.sections.skillsTitle}
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {data.skillCategories.map((cat, idx) => (
            <div key={idx} className="border-t border-[var(--line)] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-primary sm:text-2xl">{cat.title}</h3>
                <span className="font-mono text-sm tabular-nums text-muted">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="rounded-full border border-[var(--line-strong)] bg-white/5 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-sky-400/50 hover:text-primary sm:text-base"
                  >
                    {skill.name}
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
