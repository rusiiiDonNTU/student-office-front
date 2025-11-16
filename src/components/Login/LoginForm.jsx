import { Link, useActionData, useNavigation } from "react-router-dom";
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
  const loginErrors = useActionData();
  const navigation = useNavigation();
  const { t } = useTranslation("auth");
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);

  const isSubmitting = navigation.state === "submitting";

  let emailError = null;
  let passwordError = null;

  if (loginErrors?.isEmailValid === false && !dirtyFields.email) {
    emailError = t("errors.invalidEmail");
  }
  if (loginErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
    emailError = t("errors.emptyPass");
  }
  if (loginErrors?.message && Object.keys(dirtyFields).length === 0) {
    emailError = loginErrors.message;
  }
  if (loginErrors?.isPasswordValid === false && !dirtyFields.password) {
    passwordError = t("errors.invalidPass");
  }
  if (loginErrors?.isPasswordNonEmpty === false && !dirtyFields.password) {
    passwordError = t("errors.emptyPass");
  }

  useEffect(() => {
    setDirtyFields({});
  }, [loginErrors]);

  function handleInputChange(e) {
    const { name } = e.target;

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
        <Button isBlue disabled={isSubmitting}>
          Увійти
        </Button>
        <Button disabled={isSubmitting}>
          <img src="/google.svg" />
          Логін через Google
        </Button>

        <p className="form-register">
          Немає аккаунту?{" "}
          <Link
            to="/register"
            className="form-register"
            onClick={() => handleRedirect(isSubmitting)}
          >
            Зареєструватись
          </Link>
        </p>
      </FormActions>
    </Form>
  );
}

export default LoginForm;
