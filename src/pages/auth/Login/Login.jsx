import { useActionData, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { AuthInfo } from "@/widgets";
import { ErrorModal, AuthPanel } from "@/shared/ui";
import { LoginForm, GoogleErrorModal, LoginMessage, NotActivatedErrorModal, FPChangedModal, FPInvalidTokenModal } from "@/features/auth/";
import { queryClient } from "@/shared/api";

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

  const [isSignupSuccess, setIsSignupSuccess] = useState(loc.state?.signupSuccess === true);
  const [isPasswordChanged, setIsPasswordChanged] = useState(loc.state?.passwordChanged === true);
  const [isResetTokenInvalid, setIsResetTokenInvalid] = useState(loc.state?.resetTokenInvalid === true);
  const [isAuthError, setIsAuthError] = useState(loc.state?.error === true || loginResults?.authError === true);
  const [googleAuthStatus, setGoogleAuthStatus] = useState(googleAuthStatusTemplate);
  const [isNotActivated, setIsNotActivated] = useState(false);

  // Якщо логін пройдено успішно
  useEffect(() => {
    if (loginResults?.success === true) {
      queryClient.setQueryData(["session"], true);
      navigate("/profile", { replace: true })
    }
  }, [loginResults, navigate, queryClient])

  // Якщо виконано логін в неактивований акаунт
  useEffect(() => {
    if (loginResults?.notActivated === true) 
      setIsNotActivated(true)
  }, [loginResults])

  // Зчитування повідомлень з URL
  useEffect(() => {
    if (loginResults?.success) {
      return;
    }

    const msgCode = searchParams.get("message");
    if (msgCode === "login_failed") {
        setGoogleAuthStatus(() => {return {
          failed: true,
          email: ''
        }});

        // searchParams.delete("email");
        searchParams.delete("message");

        setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])
  
  function handleGoogleErrorClose() {
    setGoogleAuthStatus(googleAuthStatusTemplate)
  }

  return (
    <> 
      {/* Модалки */}
      {isAuthError && <ErrorModal onClose={() => setIsAuthError(false)}/>}
      {googleAuthStatus.failed && <GoogleErrorModal onClose={handleGoogleErrorClose} />}
      {isPasswordChanged && <FPChangedModal onClose={() => setIsPasswordChanged(false)}/>}
      {isResetTokenInvalid && <FPInvalidTokenModal onClose={() => setIsResetTokenInvalid(false)} />}
      {isNotActivated && <NotActivatedErrorModal onClose={() => setIsNotActivated(false)} email={loginResults.email}/>}

      {/* Повідомлення про активовану пошту (для мобільних пристроів) */}
      {isSignupSuccess && <LoginMessage h={t("signing:text.signupSuccess.header")} b={t("signin:text.signupSuccess.login")}/>}

      {/* Панель логіну */}
      <AuthPanel header={t("signin:header")} style={{ maxWidth: "37.5rem"}}>
        <LoginForm loginErrors={loginResults?.errors || null} />
      </AuthPanel>

      {/* Повідомлення про активовану пошту */}
      {isSignupSuccess && <AuthInfo infoType={"success"}/>}
    </>
  );
}
