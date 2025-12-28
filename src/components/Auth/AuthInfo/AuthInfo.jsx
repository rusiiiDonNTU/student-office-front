import { useTranslation } from "react-i18next";
import "./AuthInfo.css";

function AuthInfo({infoType}) {
  const { t } = useTranslation(["signin", "signup"]);

  if (infoType === "success") {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          {t("signin:text.signupSuccess.header")}
        </h1>
        <div className="auth-info-body">
          <p>{t("signin:text.signupSuccess.benefits")}</p>
          <ul className="auth-info-list-withstart">
            <li>{t("signin:text.signupSuccess.profile")}</li>
            <li>{t("signin:text.signupSuccess.subscribe")}</li>
            <li>{t("signin:text.signupSuccess.performance")}</li>
            <li>{t("signin:text.signupSuccess.calendar")}</li>
          </ul>
        </div>

      </section>
    );   
  } else if (infoType === "requirements") {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          {t("signup:requirements.start")}
        </h1>
        <div className="auth-info-body">
          <ul className="auth-info-list-nostart">
            <li>{t("signup:requirements.email.start")}
              <ul className="auth-info-nested-list">
                <li>{t("signup:requirements.email.corporate")}</li>
                <li>{t("signup:requirements.email.personal")}</li>
              </ul>
            </li>
            <li>{t("signup:requirements.pass.length")}</li>
            <li>{t("signup:requirements.pass.start")}
              <ul className="auth-info-nested-list">
                <li>{t("signup:requirements.pass.lower")}</li>
                <li>{t("signup:requirements.pass.upper")}</li>
                <li>{t("signup:requirements.pass.digit")}</li>
                <li>{t("signup:requirements.pass.symbol")}</li>
              </ul>
            </li>
            <li>{t("signup:requirements.docs.start")}
              <ul className="auth-info-nested-list">
                <li>{t("signup:requirements.docs.studentId")}</li>
                <li>{t("signup:requirements.docs.passport")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default AuthInfo;
