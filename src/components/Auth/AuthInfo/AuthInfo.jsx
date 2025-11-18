import { useTranslation } from "react-i18next";
import "./AuthInfo.css";

function AuthInfo({infoType}) {
  const { t } = useTranslation("auth");

  if (infoType === 1) {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          {t("text.signupSuccess.header")}
        </h1>
        <div className="auth-info-body">
          <p>{t("text.signupSuccess.benefits")}</p>
          <ul className="auth-info-list-withstart">
            <li>{t("text.signupSuccess.profile")}</li>
            <li>{t("text.signupSuccess.subscribe")}</li>
            <li>{t("text.signupSuccess.performance")}</li>
            <li>{t("text.signupSuccess.calendar")}</li>
          </ul>
        </div>

      </section>
    );
  } else {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          {t("requirements.start")}
        </h1>
        <div className="auth-info-body">
          <ul className="auth-info-list-nostart">
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
        </div>
      </section>
    );
  }
}

export default AuthInfo;
