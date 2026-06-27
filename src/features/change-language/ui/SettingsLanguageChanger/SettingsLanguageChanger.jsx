import { useTranslation } from 'react-i18next';
import "./SettingsLanguageChanger.css";
import { useState } from 'react';
import { LOCALS } from '/public/locales/constants';

export function SettingsLanguageChanger(props) {
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
    <section className={`dashboard-languages ${isLoading ? " loading" : ""}`} {...props}>
      <div
        className={`dashboard-language${i18n.language === LOCALS.UK ? " lang-active" : ""}`}
        onClick={() => handleSelectLang(LOCALS.UK)}
      >
        Українська
      </div>
      <div
        className={`dashboard-language${i18n.language === LOCALS.EN ? " lang-active" : ""}`}
        onClick={() => handleSelectLang(LOCALS.EN)}
      >
        English
      </div>
    </section>
  );
}