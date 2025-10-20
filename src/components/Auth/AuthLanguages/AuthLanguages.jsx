import { useContext } from "react";
import "./AuthLanguages.css";
import { LocalizationContext } from "../../../store/Localization/LocalizationContext";

function AuthLanguages() {
  const { lang, changeLang } = useContext(LocalizationContext);

  function handleSelectLang() {}

  return (
    <section className="auth-languages">
      <div
        className={`auth-language${lang === "ua" ? " lang-active" : ""}`}
        onClick={() => changeLang("ua")}
      >
        Українська
      </div>
      <div
        className={`auth-language${lang === "en" ? " lang-active" : ""}`}
        onClick={() => changeLang("en")}
      >
        English
      </div>
    </section>
  );
}

export default AuthLanguages;
