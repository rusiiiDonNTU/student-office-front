import { Link, useRouteError } from "react-router-dom";
import AuthLayout from "../layouts/Auth/Auth";
import DashboardLayout from "../layouts/Dashboard/Dashboard";
import { getAuthStatus } from "../util/auth";
import "./Error.css";
import { useTranslation } from "react-i18next";

function ErrorPage() {
  const isLogged = getAuthStatus();
  const { t } = useTranslation("errors");
  const { status } = useRouteError();

  let errorTitle = "\\_(-_-)_/";
  let errorBody = t("default");

  if (status === 404) {
    errorTitle = status
    errorBody = <p>{t("404")}</p>;
  }
  if (status > 500) {
    errorTitle = status
    errorBody = <p>{t("500")}</p>;
  }

  if (!isLogged) {
    return (
      <AuthLayout>
        <section className="auth-error-section">
          <h1 className="error-title">{errorTitle}</h1>
          <div className="error-body">
            {errorBody}
            {/* {!isLogged && (
              <Link className="error-button" to="/login">
                Перейти до логіну
              </Link>
            )} */}
          </div>
        </section>
      </AuthLayout>
    );
  } else {
    return (
      <DashboardLayout>
        <section className="dashboard-error-section">
          <h1 className="error-title">{errorTitle}</h1>
          <p>{errorBody}</p>
        </section>
      </DashboardLayout>
    );
  }
}

export default ErrorPage;
