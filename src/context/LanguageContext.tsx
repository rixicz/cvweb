import React, { createContext, useContext, useState, useEffect } from 'react';
import { CVContent, cvDataEn, cvDataCz } from '../data/cvData';

type Language = 'en' | 'cz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: CVContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'cz') return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('cs') || browserLang.startsWith('sk') ? 'cz' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'cz' ? 'cs' : 'en';
  }, [language]);

  const data = language === 'cz' ? cvDataCz : cvDataEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
