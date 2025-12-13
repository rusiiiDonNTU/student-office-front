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

function LoginPage() {
  const { t } = useTranslation("auth");
  const loc = useLocation();
  const [isJustRegistered, setIsJustRegistered] = useState(loc.state?.justRegistered === true);

  return (
    <>
      {isJustRegistered && <LoginMessage />} 
      <AuthPanel header={t("headers.login")} style={{ maxWidth: "37.5rem"}}>
        <LoginForm />
      </AuthPanel>
      {isJustRegistered && <AuthInfo infoType={1}/>} 
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
  const response = await fetch("https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api/auth/signIn", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    credentials: "include"
  });

  // // "Заглушка", щоб запит не відправлявся в будь-якому випадку (доки немає бекенда)
  // const response = {
  //   status: 401,
  // };

  // Перевірка відповіді з сервера
  if (response.status === 401) {
    return {
      isWrong: true,
    };
  }
  else if (!response.ok) {
    throw new Response(
      { message: "Неочікування помилка під час авторизації" },
      { status: 500 }
    );
  }
  
  return redirect("/profile");
}
