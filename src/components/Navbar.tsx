import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileDown, Menu, X } from 'lucide-react';

const SECTION_IDS = ['about', 'projects', 'skills', 'certifications', 'competitions', 'contact'];

export const Navbar: React.FC = () => {
  const { language, setLanguage, data } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: data.nav.about, href: '#about', id: 'about' },
    { label: data.nav.projects, href: '#projects', id: 'projects' },
    { label: data.nav.skills, href: '#skills', id: 'skills' },
    { label: data.nav.certifications, href: '#certifications', id: 'certifications' },
    { label: data.nav.competitions, href: '#competitions', id: 'competitions' },
    { label: data.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
      const marker = window.innerHeight * 0.35;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const languageSwitch = (
    <div className="flex items-center gap-1.5 text-xs font-semibold">
      <button
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        className={`transition-colors ${language === 'en' ? 'text-accent' : 'text-muted hover:text-primary'}`}
      >
        EN
      </button>
      <span className="text-white/20">/</span>
      <button
        onClick={() => setLanguage('cz')}
        aria-label="Přepnout do češtiny"
        aria-pressed={language === 'cz'}
        className={`transition-colors ${language === 'cz' ? 'text-accent' : 'text-muted hover:text-primary'}`}
      >
        CZ
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`shell transition-colors duration-200 ${
          scrolled || mobileMenuOpen
            ? 'border-b border-[var(--line)] bg-[#0b0f15]/85 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="flex h-20 items-center gap-6">
          <a
            href="#about"
            className="text-base font-semibold tracking-tight text-primary transition-colors hover:text-accent"
          >
            {data.meta.name}
          </a>

          <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Sections">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[0.95rem] font-medium transition-colors ${
                    isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-5 lg:ml-8">
            <div className="hidden sm:block">{languageSwitch}</div>

            <a
              href={data.meta.pdfPath}
              download="Patrik_Smidoch_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn hidden py-2 px-4 text-sm sm:inline-flex"
            >
              <FileDown className="h-4 w-4 text-accent" />
              <span>{data.hero.downloadCV}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 -mr-2 text-primary transition-colors hover:text-accent lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--line)] pb-6 pt-3 lg:hidden">
            <nav className="flex flex-col" aria-label="Sections">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`py-2.5 text-sm font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4">
              {languageSwitch}
              <a
                href={data.meta.pdfPath}
                download="Patrik_Smidoch_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn py-1.5 text-xs"
              >
                <FileDown className="h-3.5 w-3.5 text-accent" />
                <span>{data.hero.downloadCV}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
