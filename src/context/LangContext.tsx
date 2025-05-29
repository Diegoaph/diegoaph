import React, { createContext, useState, useContext } from 'react';

type LangContextType = {
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<boolean>(true);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LangContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
