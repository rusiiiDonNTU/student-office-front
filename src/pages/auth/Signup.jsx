import { useTranslation } from "react-i18next";
import AuthInfo from "../../components/Auth/AuthInfo/AuthInfo.jsx";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel.jsx";
import SignupForm from "../../components/Signup/SignupForm.jsx";
import { checkIfEqual, checkIfNonEmpty, validateEmail, validatePassword, validateRNOKPP, validateStudIdNumber, validateStudIdSeries } from "../../util/validation.js";

function SignupPage() {
  const { t } = useTranslation("auth");

  return (
    <>
      <AuthPanel header={t("headers.register")} back>
        <SignupForm />
      </AuthPanel>
      <AuthInfo infoType={2}/>
    </>
  );
}

export default SignupPage;

export async function signupAction({ request, params }) {
  // return { 
  //   signupSuccess: true 
  // };

  const formData = await request.formData();
  const requestBody = {
    email: formData.get("email"),
    password: formData.get("password"),
    itn: formData.get("rnokpp") || "",
    studentIdSeries: formData.get("student-id-series") || "",
    studentIdNumber: formData.get("student-id-num") || "",
  };

  // Значення полів, що не є частиною запиту, але потребуються для валідації
  const confirmPassword = formData.get("confirm-password");
  const noRnokpp = formData.get("no-rnokpp") === "on";
  const noStudentId = formData.get("no-student-id") === "on";
  
  // Валідація (клієнт-сайд)
  const valids = {
    isEmailValid: validateEmail(requestBody.email),
    isEmailNonEmpty: checkIfNonEmpty(requestBody.email),
    isPasswordValid: validatePassword(requestBody.password),
    isPasswordNonEmpty: checkIfNonEmpty(requestBody.password),
    arePasswordsEqual: checkIfEqual(requestBody.password, confirmPassword),
    isRNOKPPValid: validateRNOKPP(requestBody.itn, noRnokpp),
    isStudIdSeriesValid: validateStudIdSeries(requestBody.studentIdSeries, noStudentId),
    isStudIdNumberValid: validateStudIdNumber(requestBody.studentIdNumber, noStudentId),
    isRNOKPPNonEmpty: !noRnokpp ? checkIfNonEmpty(requestBody.itn) : true,
    isStudIdSeriesNonEmpty: !noStudentId ? checkIfNonEmpty(requestBody.studentIdSeries) : true,
    isStudIdNumberNonEmpty: !noStudentId ? checkIfNonEmpty(requestBody.studentIdNumber) : true,
  };

  if (Object.values(valids).includes(false) || valids.isPasswordValid.length > 0) {
    return valids;
  }

  // Відправка на сервер
  try {
    const response = await fetch("https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api/auth/signUp", {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // // "Заглушка", щоб запит не відправлявся в будь-якому випадку
    // const response = {
    //   status: 400,
    // };

    // Перевірка відповіді з сервера
    if (response.status === 400 || !response.ok) {
      return {
        signupFailed: true,
      };
    }
    else {
      return { 
        signupSuccess: true 
      };
    }
  }
  catch (err) {
    throw new Response(
      { message: "Неочікування помилка під час реєстрації." },
      { status: 500 }
    );
  }
}