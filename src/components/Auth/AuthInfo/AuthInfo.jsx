import { useTranslation } from "react-i18next";
import "./AuthInfo.css";

function AuthInfo({infoType}) {
  const { t } = useTranslation("auth");

  if (infoType === 1) {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          Маючи доступ до кабінету, ви отримуєте:
        </h1>
        <ul className="auth-info-list">
          <li>Повний доступ до особистої інформації в системі ДонНТУ</li>
          <li>Можливість обирати нові дисципліни</li>
          <li>Дані щодо академічної успішності</li>
          <li>Календар з актуальним розкладом занять</li>
        </ul>
      </section>
    );
  } else {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          {t("requirements.start")}
        </h1>
        <ul className="auth-info-list">
          <li>{t("requirements.email")}</li>
          <li>{t("requirements.pass.length")}</li>
          <li>{t("requirements.pass.start")}
            <ul className="auth-info-nested-list">
              <li>{t("requirements.pass.lower")}</li>
              <li>{t("requirements.pass.upper")}</li>
              <li>{t("requirements.pass.digit")}</li>
              <li>{t("requirements.pass.symbol")}</li>
            </ul>
          </li>
          <li>{t("requirements.docs")}</li>
        </ul>
      </section>
    );
  }
}

export default AuthInfo;
