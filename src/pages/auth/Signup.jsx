import { useTranslation } from "react-i18next";
import AuthInfo from "../../components/Auth/AuthInfo/AuthInfo.jsx";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel.jsx";
import SignupForm from "../../components/Signup/SignupForm.jsx";
import { checkIfEqual, checkIfNonEmpty, validateEmail, validatePassword, validateStudIdNumber, validateStudIdSeries, validatePassportNumber, validateOldPassportNumber, validateOldPassportSeries} from "../../util/validation.js";
import api from "../../util/axios.js";

function SignupPage() {
  const { t } = useTranslation("auth");

  return (
    <>
      <AuthPanel header={t("headers.register")} back>
        <SignupForm />
      </AuthPanel>
      <AuthInfo infoType="requirements"/>
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
    passportNumber: formData.get("passport-number") || "",
    passportSeries: formData.get("passport-series") || "",
    studentIdSeries: formData.get("student-id-series") || "",
    studentIdNumber: formData.get("student-id-num") || "",
  };

  // Значення полів, що не є частиною запиту, але потребуються для валідації
  const confirmPassword = formData.get("confirm-password");
  const noStudentId = formData.get("no-student-id") === "on";
  const oldPassport = formData.get("old-passport") === "on";
  
  // Валідація (клієнт-сайд)
  const valids = {
    isEmailValid: validateEmail(requestBody.email),
    isEmailNonEmpty: checkIfNonEmpty(requestBody.email),
    isPasswordValid: validatePassword(requestBody.password),
    isPasswordNonEmpty: checkIfNonEmpty(requestBody.password),
    arePasswordsEqual: checkIfEqual(requestBody.password, confirmPassword),
    isPassportNumberValid: validatePassportNumber(requestBody.passportNumber, noStudentId, oldPassport),
    isOldPassportNumberValid: validateOldPassportNumber(requestBody.passportNumber, noStudentId, oldPassport),
    isOldPassportSeriesValid: validateOldPassportSeries(requestBody.passportSeries, noStudentId, oldPassport),
    isStudIdSeriesValid: validateStudIdSeries(requestBody.studentIdSeries, noStudentId),
    isStudIdNumberValid: validateStudIdNumber(requestBody.studentIdNumber, noStudentId),
    isPassportNumberNonEmpty: (noStudentId && !oldPassport) ? checkIfNonEmpty(requestBody.passportNumber) : true,
    isOldPassportNumberNonEmpty: (noStudentId && oldPassport) ? checkIfNonEmpty(requestBody.passportNumber) : true,
    isOldPassportSeriesNonEmpty: (noStudentId && oldPassport) ? checkIfNonEmpty(requestBody.passportSeries) : true,
    isStudIdSeriesNonEmpty: !noStudentId ? checkIfNonEmpty(requestBody.studentIdSeries) : true,
    isStudIdNumberNonEmpty: !noStudentId ? checkIfNonEmpty(requestBody.studentIdNumber) : true,
  };

  if (Object.values(valids).includes(false) || Object.values(valids.isPasswordValid).includes(true)) {
    return valids;
  }

  // Відправка на сервер
  try {
    const response = await api.post("/auth/signUp", requestBody);
    return { 
        signupSuccess: true 
    };
  }
  catch (err) {
    console.log("test")
    return {
      signupFailed: true
    }
  }
}