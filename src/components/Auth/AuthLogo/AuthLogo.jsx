import { Link } from "react-router-dom";
import donntuLogo from "/donntu-white-logo.png";
import { useTranslation } from 'react-i18next';

function AuthLogo() {
  const { t } = useTranslation("main");

  return (
    <Link to="/login">
      <section className="auth-logo">
        <div className="auth-logo-img">
          <img src={donntuLogo} />
        </div>
        <span className="auth-logo-text">
          {t("main:logo.top")}
          <br />
          {t("main:logo.bottom")}
        </span>
      </section>
    </Link>
  );
}

export default AuthLogo;
