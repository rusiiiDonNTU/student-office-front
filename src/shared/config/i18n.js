import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { LOCALS } from "../../../public/locales/constants";

const supportedLngs = Object.values(LOCALS);

i18n.use(languageDetector)
    .use(backend)
    .use(initReactI18next)
    .init({
      supportedLngs: supportedLngs,
      fallbackLng: LOCALS.UK,
      ns: ["main", "auth", "signup", "signin", "forgot", "dashboard"],
      preload: supportedLngs,
      defaultNs: "main",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json"
      },
      detection: {
        order: ['localStorage']
      },
      interpolation: {
        escapeValue: false
      }
    }).then(() => {
      // Перевірка мови в localStorage
      const storedLng = localStorage.getItem('i18nextLng');
      if (storedLng && !supportedLngs.includes(storedLng))
        localStorage.setItem('i18nextLng', i18n.resolvedLanguage);
    });

export default i18n;