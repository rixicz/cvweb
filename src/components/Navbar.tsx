import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, FileDown, Menu, X, Globe } from 'lucide-react';

const SECTION_IDS = ['about', 'projects', 'skills', 'certifications', 'competitions', 'contact'];

export const Navbar: React.FC = () => {
  const { language, setLanguage, data } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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
      setScrolled(window.scrollY > 24);
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

  const linkClass = (isActive: boolean, mobile = false) =>
    `${mobile ? 'flex px-3 py-2' : 'px-3 py-1.5'} rounded-full text-sm font-medium transition-colors ${
      isActive
        ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
        : 'readable-shadow text-slate-800 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-3 z-40 mx-auto w-full max-w-6xl">
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'border-white/60 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/90'
            : 'border-transparent bg-transparent shadow-none'
        }`}
      >
        <div className="flex h-14 items-center gap-3 px-2.5 sm:px-3">
          {/* Desktop section links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={linkClass(isActive)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* Language Switch */}
            <div className="hidden items-center rounded-lg border border-slate-200 bg-slate-100/70 p-0.5 text-xs font-semibold dark:border-slate-800 dark:bg-slate-900/70 sm:flex">
              <button
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
                className={`px-2 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('cz')}
                aria-label="Přepnout do češtiny"
                className={`px-2 py-1 rounded-md transition-all ${
                  language === 'cz'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white'
                }`}
              >
                CZ
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg text-slate-800 hover:text-slate-950 dark:text-slate-100 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* PDF Resume CTA */}
            <a
              href={data.meta.pdfPath}
              download="Patrik_Smidoch_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-all shadow-xs"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{data.hero.downloadCV}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drop-down menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200/80 px-3 pb-4 pt-3 dark:border-slate-800/80 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Sections">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={linkClass(isActive, true)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-3 flex items-center justify-between border-t border-slate-200/80 pt-3 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 p-0.5 bg-slate-100 dark:bg-slate-900 text-xs font-semibold">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded ${language === 'en' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('cz')}
                    className={`px-2 py-1 rounded ${language === 'cz' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}
                  >
                    CZ
                  </button>
                </div>
              </div>

              <a
                href={data.meta.pdfPath}
                download="Patrik_Smidoch_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{data.hero.downloadCV}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
