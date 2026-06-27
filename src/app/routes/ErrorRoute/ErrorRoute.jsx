import { useNavigate, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAuthStatus } from "../../../entities/session";

import { Button } from "../../../shared/ui";
import { DashboardLayout, AuthLayout } from "../../layouts";
import "./ErrorRoute.css";

export function ErrorRoute() {
  const navigate = useNavigate();
  const { t } = useTranslation("errors");
  const error = useRouteError();
  const { data: authStatus, isPending, isError } = useAuthStatus();

  if (isPending) {
    return <></>
  }

  let errorTitle = "\\_(-_-)_/";
  let errorBody = t("default");

  if (error.status === 404) {
    errorTitle = error.status
    errorBody = <p>{t("404")}</p>;
  }
  if (error.status >= 500) {
    errorTitle = error.status
    errorBody = <p>{t("500")}</p>;
  }

  if (authStatus === false || isError) {
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
  } else if (authStatus === true) {
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
