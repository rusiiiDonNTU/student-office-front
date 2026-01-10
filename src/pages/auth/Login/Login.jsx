import { useActionData, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { AuthInfo } from "../../../widgets";
import { ErrorModal, AuthPanel } from "../../../shared/ui";
import { LoginForm, ActivationErrorModal, ConfirmEmailModal, GoogleErrorModal, LoginMessage } from "../../../features/auth/";

const googleAuthStatusTemplate = {
    failed: false,
    email: ''
}

export function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("signin");
  const loc = useLocation();
  const loginResults = useActionData();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isJustRegistered, setIsJustRegistered] = useState(loc.state?.justRegistered === true);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(loc.state?.emailConfirmed === true);
  const [isActivationFailed, setIsActivationFailed] = useState(loc.state?.activationFailed === true);
  const [isAuthError, setIsAuthError] = useState(loc.state?.error === true || loginResults?.authError === true);
  const [isNotActivated, setIsNotActivated] = useState(loginResults?.notActivated === true);
  const [googleAuthStatus, setGoogleAuthStatus] = useState(googleAuthStatusTemplate);

  // Якщо логін пройдено успішно
  if (loginResults?.success === true) {
    navigate("/profile");
  }

  // Зчитування повідомлень з URL
  useEffect(() => {
    const msgCode = searchParams.get("message");
    if (msgCode === "login_failed") {
      const msgEmail = searchParams.get("email");
      if (msgEmail !== null) {
        setGoogleAuthStatus(() => {return {
          failed: true,
          email: msgEmail
        }});

        searchParams.delete("email");
        searchParams.delete("message");

        setSearchParams(searchParams);
      }
    }
  }, [searchParams, setSearchParams])
  
  function handleGoogleErrorClose() {
    setGoogleAuthStatus(googleAuthStatusTemplate)
  }

  return (
    <> 
      {/* Модалки */}
      {isJustRegistered && <ConfirmEmailModal email={loc.state?.email} onClose={() => setIsJustRegistered(false)}/>}
      {isAuthError && <ErrorModal onClose={() => setIsAuthError(false)}/>}
      {isActivationFailed && <ActivationErrorModal onClose={() => setIsActivationFailed(false)}/>}
      {isNotActivated && <NotActivatedErrorModal onClose={() => setIsNotActivated(false)} email={loginResults.email}/>}
      {googleAuthStatus.failed && <GoogleErrorModal onClose={handleGoogleErrorClose} />}

      {/* Повідомлення про активовану пошту (для мобільних пристроів) */}
      {isEmailConfirmed && <LoginMessage h={t("signing:text.signupSuccess.header")} b={t("signin:text.signupSuccess.login")}/>}

      {/* Панель логіну */}
      <AuthPanel header={t("signin:header")} style={{ maxWidth: "37.5rem"}}>
        <LoginForm loginErrors={loginResults?.errors || null} />
      </AuthPanel>

      {/* Повідомлення про активовану пошту */}
      {isEmailConfirmed && <AuthInfo infoType={"success"}/>}
    </>
  );
}
