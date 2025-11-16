import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { LOCALS } from "../../public/locales/constants";

i18n.use(languageDetector)
    .use(backend)
    .use(initReactI18next)
    .init({
      fallbackLng: LOCALS.UK,
      ns: ["main", "auth", "dashboard"],
      defaultNs: "main",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json"
      },
      interpolation: {
        escapeValue: false
      },
      debug: true
    });