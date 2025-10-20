import { useEffect } from "react";

import AuthLogo from "../../components/Auth/AuthLogo/AuthLogo";
import AuthLanguages from "../../components/Auth/AuthLanguages/AuthLanguages";
import "./AuthError.css";

function AuthErrorPage() {
  // Одноразова зміна кольору фона для компоненту помилки
  useEffect(() => {
    document.body.style.background = "#1B3769";

    // Повернення стандартного фону після закриття помилки
    return () => (document.body.style.background = "#fff");
  }, []);

  return (
    <div className="auth">
      <AuthLogo />

      <div className="auth-error-section">
        <h1 className="auth-error-title">Виникла помилка!</h1>
        <p>Спробуйте пізніше або оновіть сторінку</p>
      </div>

      <AuthLanguages />
    </div>
  );
}

export default AuthErrorPage;