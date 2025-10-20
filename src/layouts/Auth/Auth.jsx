import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import AuthLogo from "../../components/Auth/AuthLogo/AuthLogo";
import AuthLanguages from "../../components/Auth/AuthLanguages/AuthLanguages";
import "./Auth.css";
import { getAuthStatus } from "../../util/auth";

function AuthLayout({ children }) {
  // Одноразова зміна кольору фона для компоненту логіна
  useEffect(() => {
    document.body.style.background = "#1B3769";

    // Повернення стандартного фону після закриття логіну
    return () => (document.body.style.background = "#fff");
  }, []);

  return (
    <div className="auth">
      <AuthLogo />

      <div className="auth-content">{children || <Outlet />}</div>

      <AuthLanguages />
    </div>
  );
}

export default AuthLayout;

export function permForLoginLoader() {
  const { isLogged } = getAuthStatus();

  if (isLogged) {
    return redirect("/profile");
  } else {
    return null;
  }
}
