import { Link, useNavigate, useRouteError } from "react-router-dom";
import AuthLayout from "../layouts/Auth/Auth";
import DashboardLayout from "../layouts/Dashboard/Dashboard";
import { getAuthStatus } from "../util/auth";
import "./Error.css";
import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button/Button";

function ErrorPage() {
  const isLogged = getAuthStatus();
  const navigate = useNavigate();
  const { t } = useTranslation("errors");
  const { status, data } = useRouteError();

  let errorTitle = "\\_(-_-)_/";
  let errorBody = t("default");

  if (status === 404) {
    errorTitle = status
    errorBody = <p>{t("404")}</p>;
  }
  if (status >= 500) {
    errorTitle = status
    errorBody = <p>{t("500")}</p>;
  }

  if (!isLogged) {
    return (
      <AuthLayout>
        <section className="auth-error-section">
          <div className="error-info">
            <h1 className="error-title">{errorTitle}</h1>
            <div className="error-body">
              {errorBody}
            </div>
          </div>
          <div className="error-button">
            <Button onClick={() => navigate("/login")}>{t("back")}</Button>
          </div>
        </section>
      </AuthLayout>
    );
  } else {
    return (
      <DashboardLayout>
        <section className="dashboard-error-section">
          <h1 className="error-title">{errorTitle}</h1>
          {errorBody}
        </section>
      </DashboardLayout>
    );
  }
}

export default ErrorPage;
