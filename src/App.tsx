import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

const CVApp: React.FC = () => {
  const { data } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.meta.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="relative min-h-screen text-slate-800 selection:bg-slate-900 selection:text-white dark:text-slate-100 dark:selection:bg-slate-100 dark:selection:text-slate-900">
      <Background />

      <div className="relative z-10 flex min-h-screen flex-col px-2 py-2 sm:px-4 sm:py-4 lg:px-6">
        <Navbar />

        <div className="mx-auto mt-3 w-full max-w-6xl flex-1">
          <main>
            <Hero onCopyEmail={handleCopyEmail} copied={copied} />
            <ProjectsSection />
            <SkillsSection />
            <CertificationsSection />
            <CompetitionsSection />
          </main>
          <Footer onCopyEmail={handleCopyEmail} copied={copied} />
        </div>
      </div>

      <Toast message={data.hero.copiedNotice} visible={copied} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CVApp />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
