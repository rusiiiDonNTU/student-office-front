import { redirect } from "react-router-dom";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel";
import LoginForm from "../../components/Login/LoginForm";
import { login } from "../../util/auth";
import {
  checkIfNonEmpty,
  validateEmail,
  validatePassword,
} from "../../util/validation";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const { t } = useTranslation("auth");

  return (
    <>
      <AuthPanel header={t("headers.login")} style={{ maxWidth: "37.5rem" }}>
        <LoginForm />
      </AuthPanel>
    </>
  );
}

export default LoginPage;

export async function loginAction({ request, params }) {
  const formData = await request.formData();
  const isRemembered = formData.get("remember-me");
  const requestBody = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Валідація (клієнт-сайд)
  const valids = {
    isEmailValid: validateEmail(requestBody.email),
    isEmailNonEmpty: checkIfNonEmpty(requestBody.email),
    isPasswordValid:
      validatePassword(requestBody.password).length > 0 ? false : true,
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
  
  else {
    const resData = await response.json();
    login(resData.token, isRemembered);
    return redirect("/profile");
  }
}
