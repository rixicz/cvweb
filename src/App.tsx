import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const target = window.location.hash;
    if (!target) return;
    const id = target.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.meta.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="relative min-h-screen">
      <Background />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero onCopyEmail={handleCopyEmail} copied={copied} />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <CompetitionsSection />
        </main>

        <Footer />
      </div>

      <Toast message={data.hero.copiedNotice} visible={copied} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CVApp />
    </LanguageProvider>
  );
};

export default App;
