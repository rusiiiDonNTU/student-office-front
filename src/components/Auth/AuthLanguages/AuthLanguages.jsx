import { useTranslation } from 'react-i18next';
import "./AuthLanguages.css";
import { LOCALS } from '../../../../public/locales/constants';
import { useState } from 'react';

function AuthLanguages() {
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
    <section className={`auth-languages ${isLoading ? " loading" : undefined}`}>
      <div
        className={`auth-language${i18n.language === LOCALS.UK ? " lang-active" : ""}`}
        onClick={() => handleSelectLang(LOCALS.UK)}
      >
        Українська
      </div>
      <div
        className={`auth-language${i18n.language === LOCALS.EN ? " lang-active" : ""}`}
        onClick={() => handleSelectLang(LOCALS.EN)}
      >
        English
      </div>
    </section>
  );
}

export default AuthLanguages;
