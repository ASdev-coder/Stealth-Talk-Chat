import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uk');

  const translations = {
    en: {
      homeTitle: "Home Page",
      modeSelection: "Mode selection",
      startChat: "Start Chat",
      ageCategory: "Age category",
      filters: "Filters",
      textChat: "💬 Text Chat",
      voiceCall: "📞 Voice Call",
      videoCall: "📹 Video Call"
    },
    uk: {
      homeTitle: "Головна сторінка",
      modeSelection: "Вибір режиму",
      startChat: "Почати чат",
      ageCategory: "Вікова категорія",
      filters: "Фільтри",
      textChat: "💬 Текстовий чат",
      voiceCall: "📞 Голосовий дзвінок",
      videoCall: "📹 Відеодзвінок"
    }
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};