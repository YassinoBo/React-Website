import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Sprache aus localStorage laden oder auf 'de' setzen
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'de';
  });

  // Sprache in localStorage speichern, wenn sie sich ändert
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}