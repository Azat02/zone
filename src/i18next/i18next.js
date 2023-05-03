import i18n from "i18next";
import Backend from 'i18next-http-backend'
import  LanguageDetector  from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)  
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: JSON.parse(localStorage.getItem('lang')) || 'en',
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },

    interpolation: {
      escapeValue: false 
    }
  });


  export default i18n