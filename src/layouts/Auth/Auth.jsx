import { useEffect } from "react";
import { Outlet, redirect, useNavigation } from "react-router-dom";

import AuthLogo from "../../components/Auth/AuthLogo/AuthLogo";
import AuthLanguages from "../../components/Auth/AuthLanguages/AuthLanguages";
import "./Auth.css";
import { getAuthStatus } from "../../util/auth";

function AuthLayout({ children }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  // Глобальне вимикання посилань, якщо сабмітиться якась форма
  useEffect(() => {
    if (isSubmitting) {
      document.body.classList.add('is-submitting');
    } else {
      document.body.classList.remove('is-submitting');
    }

    return () => {document.body.classList.remove('is-submitting');}
  }, [isSubmitting])

  // Одноразова зміна кольору фона для лейаута авторизації
  useEffect(() => {
    document.body.style.background = "#1B3769";

    // Повернення стандартного фону після авторизації
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
  const isLogged = getAuthStatus();

  if (!!isLogged) {
    return redirect("/profile");
  } else {
    return null;
  }
}
