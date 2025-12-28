import { Link, useActionData, useLocation, useNavigation, useSearchParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";
import { useEffect, useRef, useState } from "react";
import { handleRedirect } from "../../util/redirect";
import { useTranslation } from "react-i18next";
import ConfirmEmailModal from "./ConfirmEmailModal/ConfirmEmailModal";
import ErrorModal from "../UI/Modal/ErrorModal/ErrorModal";

const initDirtyFields = {};

function LoginForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const loginErrors = useActionData();

  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);
  const [errorFromBack, setErrorFromBack] = useState("");

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const email = useRef(null);
  const navigation = useNavigation();
  const { t } = useTranslation(["auth", "signin"]);

  const isSubmitting = navigation.state === "submitting";
  let emailError = null;
  let passwordError = null;

  if (!isSubmitting) {
    // Текст помилок
    const emailInvalidError = t("auth:errors.email.invalid");                         // пошти
    const emailEmptyError = t("auth:errors.email.empty");                             //
    const passEmptyError = t("auth:errors.pass.empty");                               // пароля
    const credsInavlidError = t("signin:errors.wrongCreds");                          // спроби входу

    // Перевірки
    if (errorFromBack !== "" && !dirtyFields.email) {
      emailError = errorFromBack
    }
    if (loginErrors?.isEmailValid === false && !dirtyFields.email) {
      emailError = emailInvalidError;
    }
    if (loginErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
      emailError = emailEmptyError;
    }
    if (loginErrors?.isWrong === true && Object.keys(dirtyFields).length === 0) {
      emailError = credsInavlidError
    }
    // if (loginErrors?.isPasswordValid === false && !dirtyFields.password) {
    //   passwordError = passInvalidError;
    // }
    if (loginErrors?.isPasswordNonEmpty === false && !dirtyFields.password) {
      passwordError = passEmptyError;
    }
  }
  if (errorFromBack) emailError = errorFromBack;

  // Зчитування повідомлень з URL
  useEffect(() => {
    const msgCode = searchParams.get("message");
    if (msgCode === "login_failed") {
      setErrorFromBack(t("signin:errors.notFound"));
      searchParams.delete("message");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  // Відкат даних та виведення модалок (якщо потрібно)
  useEffect(() => {
    setDirtyFields({});
    if (errorFromBack !== "") setErrorFromBack("");
    if (loginErrors?.notActivated === true) {
      setShowEmailModal(true);
    }
    if (loginErrors?.authError === true) {
      setShowErrorModal(true);
    }
  }, [loginErrors]);

  function handleInputChange(e) {
    const { name } = e.target;

    // Якщо друк йде до поля пошти - помилка зі сторони сервера очищується (якщо вона є)
    if (name === "email" && errorFromBack !== "") setErrorFromBack("")

    setDirtyFields((prev) => {
      return { ...prev, [name]: true };
    });
  }

  // Текст
  const emailLabel = t("auth:fields.emailField");
  const passLabel = t("auth:fields.passField");
  const rememberMeLabel = t("signin:fields.rememberMe");
  const forgotPassLinkText = t("signin:links.forgot");
  const signInButtonText = t("signin:buttons.signIn");
  const withGoogleButtonText = t("signin:buttons.withGoogle");
  const signupLinkText = t("signin:links.signup");

  return (
    <>
      <Form>
        <Input
          label={emailLabel}
          id="email"
          type="email"
          placeholder="name.surname.institute@donntu.edu.ua"
          errorMsg={emailError}
          onChange={handleInputChange}
          disabled={isSubmitting}
          ref={email}
        />

        <Input
          label={passLabel}
          id="password"
          type="password"
          placeholder="••••••••••••••••"
          errorMsg={passwordError}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />

        <div className="form-options">
          <Checkbox
            label={rememberMeLabel}
            id="remember-me"
            disabled={isSubmitting}
            defaultChecked
          />

          <Link className="form-forgot" to="/forgot-password">
            {forgotPassLinkText}
          </Link>
        </div>

        <FormActions>
          <Button isBlue disabled={isSubmitting} name="button" value="login">
            {signInButtonText}
          </Button>
          <Button disabled={isSubmitting} name="button" value="google">
            <img src="/google.svg" />
            {withGoogleButtonText}
          </Button>

          <p className="form-register">
            {t("signin:text.noAccount")}{" "}
            <Link
              to="/register"
              className="form-register"
              onClick={() => handleRedirect(isSubmitting)}
            >
              {signupLinkText}
            </Link>
          </p>
        </FormActions>
      </Form>
      {showEmailModal && <ConfirmEmailModal email={email.current.value} onClose={() => setShowEmailModal(false)} modalType="signin"/>}
      {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)}/>}
    </>
  );
}

export default LoginForm;
