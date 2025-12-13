import { Link, useActionData, useLocation, useNavigation, useSearchParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";
import { useEffect, useState } from "react";
import { handleRedirect } from "../../util/redirect";
import { useTranslation } from "react-i18next";

const initDirtyFields = {};

function LoginForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorFromBack, setErrorFromBack] = useState("");
  const loginErrors = useActionData();
  const navigation = useNavigation();
  const { t } = useTranslation("auth");
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);

  const isSubmitting = navigation.state === "submitting";
  let emailError = null;
  let passwordError = null;

  if (!isSubmitting) {
    if (errorFromBack !== "" && !dirtyFields.email) {
      emailError = errorFromBack
    }
    if (loginErrors?.isEmailValid === false && !dirtyFields.email) {
      emailError = t("errors.email.invalid");
    }
    if (loginErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
      emailError = t("errors.email.empty");
    }
    if (loginErrors?.isWrong === true && Object.keys(dirtyFields).length === 0) {
      emailError = t("errors.wrongCreds");
    }
    // if (loginErrors?.isPasswordValid === false && !dirtyFields.password) {
    //   passwordError = t("errors.pass.invalid");
    // }
    if (loginErrors?.isPasswordNonEmpty === false && !dirtyFields.password) {
      passwordError = t("errors.pass.empty");
    }
  }
  if (errorFromBack) emailError = errorFromBack;

  // Зчитування повідомлень з URL
  useEffect(() => {
    const msgCode = searchParams.get("message");
    if (msgCode === "login_failed") {
      setErrorFromBack(t("errors.notFound"));
      searchParams.delete("message");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  useEffect(() => {
    setDirtyFields({});
    if (errorFromBack !== "") setErrorFromBack("");
  }, [loginErrors]);

  function handleInputChange(e) {
    const { name } = e.target;

    // Якщо друк йде до поля пошти - помилка зі сторони сервера очищується (якщо вона є)
    if (name === "email" && errorFromBack !== "") setErrorFromBack("")

    setDirtyFields((prev) => {
      return { ...prev, [name]: true };
    });
  }

  return (
    <Form>
      <Input
        label={t("fields.emailField")}
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        errorMsg={emailError}
        onChange={handleInputChange}
        disabled={isSubmitting}
      />

      <Input
        label={t("fields.passField")}
        id="password"
        type="password"
        placeholder="••••••••••••••••"
        errorMsg={passwordError}
        onChange={handleInputChange}
        disabled={isSubmitting}
      />

      <div className="form-options">
        <Checkbox
          label={t("fields.rememberMe")}
          id="remember-me"
          disabled={isSubmitting}
          defaultChecked
        />

        <Link className="form-forgot" to="/forgot-password">
          {t("links.forgot")}
        </Link>
      </div>

      <FormActions>
        <Button isBlue disabled={isSubmitting} name="button" value="login">
          {t("buttons.signIn")}
        </Button>
        <Button disabled={isSubmitting} name="button" value="google">
          <img src="/google.svg" />
          {t("buttons.withGoogle")}
        </Button>

        <p className="form-register">
          {t("text.noAccount")}{" "}
          <Link
            to="/register"
            className="form-register"
            onClick={() => handleRedirect(isSubmitting)}
          >
            {t("links.register")}
          </Link>
        </p>
      </FormActions>
    </Form>
  );
}

export default LoginForm;
