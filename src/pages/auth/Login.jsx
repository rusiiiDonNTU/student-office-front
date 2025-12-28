import { redirect, useLocation } from "react-router-dom";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel";
import LoginForm from "../../components/Login/LoginForm";
import {
  checkIfNonEmpty,
  validateEmail,
  validatePassword,
} from "../../util/validation";
import { useTranslation } from "react-i18next";
import AuthInfo from "../../components/Auth/AuthInfo/AuthInfo";
import { useState } from "react";
import LoginMessage from "../../components/Login/LoginMessage/LoginMessage";
import ErrorModal from "../../components/UI/Modal/ErrorModal/ErrorModal";
import ConfirmEmailModal from "../../components/Login/ConfirmEmailModal/ConfirmEmailModal.jsx";
import api from "../../util/axios";
import ActivationErrorModal from "../../components/Login/ActivationErrorModal/ActivationErrorModal.jsx";

function LoginPage() {
  const { t } = useTranslation("signin");
  const loc = useLocation();
  const [isJustRegistered, setIsJustRegistered] = useState(loc.state?.justRegistered === true);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(loc.state?.emailConfirmed === true);
  const [isActivationFailed, setIsActivationFailed] = useState(loc.state?.activationFailed === true);
  const [isAuthError, setIsAuthError] = useState(loc.state?.error === true)

  return (
    <> 
      {isJustRegistered && <ConfirmEmailModal email={loc.state?.email} onClose={() => setIsJustRegistered(false)}/>}
      {isAuthError && <ErrorModal onClose={() => setIsAuthError(false)}/>}
      {isActivationFailed && <ActivationErrorModal onClose={() => setIsActivationFailed(false)}/>}

      {isEmailConfirmed && <LoginMessage h={t("signing:text.signupSuccess.header")} b={t("signin:text.signupSuccess.login")}/>}
      <AuthPanel header={t("signin:header")} style={{ maxWidth: "37.5rem"}}>
        <LoginForm />
      </AuthPanel>
      {isEmailConfirmed && <AuthInfo infoType={"success"}/>}
    </>
  );
}

export default LoginPage;

export async function loginAction({ request, params }) {
  const formData = await request.formData();
  const buttonType = formData.get("button");

  if (buttonType === "google") {
    window.location.href = "https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api/auth/signin-google";
    return;
  }

  const isRemembered = formData.get("remember-me") === "on";
  const requestBody = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Валідація (клієнт-сайд)
  const valids = {
    isEmailValid: validateEmail(requestBody.email),
    isEmailNonEmpty: checkIfNonEmpty(requestBody.email),
    // isPasswordValid:
    //   Object.values(validatePassword(requestBody.password)).includes(true) ? false : true,
    isPasswordNonEmpty: checkIfNonEmpty(requestBody.password),
  };

  if (Object.values(valids).includes(false)) {
    return valids;
  }

  // Відправка на сервер
  try {
    const response = await api.post("/auth/signIn", requestBody);

    return redirect("/profile");
  }
  catch (err) {
    // Якщо в помилці є відповідь сервера
    if (err.response) {
      if (err.response.status === 401) {
        return {
          isWrong: true,
        };
      }
      if (err.response.status === 403) {
        return {
          notActivated: true,
        };
      }
    }
    return {
        authError: true
    }
  }
}
