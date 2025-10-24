import { Link, useRouteError } from "react-router-dom";
import AuthLayout from "../layouts/Auth/Auth";
import DashboardLayout from "../layouts/Dashboard/Dashboard";
import { getAuthStatus } from "../util/auth";
import "./Error.css";

function ErrorPage() {
  const isLogged = getAuthStatus();
  const { status } = useRouteError();

  let errorTitle = "\\_(-_-)_/";
  let errorBody = "Спробуйте пізніше або оновіть сторінку";

  if (status === 404) {
    errorBody = <p>Сторінку не знайдено</p>;
  }
  if (status > 500) {
    errorBody = <p>Сервер не відповідає</p>;
  }

  if (!isLogged) {
    return (
      <AuthLayout>
        <section className="error-section">
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
        <section className="error-section">
          <h1 className="error-title">Виникла помилка!</h1>
          <p>Спробуйте пізніше або оновіть сторінку</p>
        </section>
      </DashboardLayout>
    );
  }
}

export default ErrorPage;
