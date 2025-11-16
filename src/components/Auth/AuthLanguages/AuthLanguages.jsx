import { useTranslation } from 'react-i18next';
import "./AuthLanguages.css";
import { LOCALS } from '../../../../public/locales/constants';

function AuthLanguages() {
  const { i18n } = useTranslation();

  function handleSelectLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <section className="auth-languages">
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
