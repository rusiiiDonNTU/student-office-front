import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import "./AuthLanguageChanger.css";
import { LOCALS } from '/public/locales/constants';

export function AuthLanguageChanger() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  function handleSelectLang(lang) {
    setIsLoading(true);

    i18n.changeLanguage(lang)
      .then(setIsLoading(false))
      .catch((err) => {
        setIsLoading(false)
      });
  }

  return (
    <section className={`auth-languages${isLoading ? " loading" : ""}`}>
      <div
        className={`auth-language${i18n.language === LOCALS.UK ? " auth-lang-active" : ""}`}
        onClick={() => handleSelectLang(LOCALS.UK)}
      >
        Українська
      </div>
      <div
        className={`auth-language${i18n.language === LOCALS.EN ? " auth-lang-active" : ""}`}
        onClick={() => handleSelectLang(LOCALS.EN)}
      >
        English
      </div>
    </section>
  );
}