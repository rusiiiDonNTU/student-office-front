import i18next from 'i18next';
import { Link } from "react-router-dom";
import donntuLogo from "./donntu-logo.png";
import { useTranslation } from 'react-i18next';

function AuthLogo() {
  const { t } = useTranslation();

  return (
    <Link to="/login">
      <section className="auth-logo">
        <div className="auth-logo-img">
          <img src={donntuLogo} />
        </div>
        <span className="auth-logo-text">
          {t("logo.top")}
          <br />
          {t("logo.bottom")}
        </span>
      </section>
    </Link>
  );
}

export default AuthLogo;
