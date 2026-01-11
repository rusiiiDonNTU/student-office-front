import { Link, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button, Checkbox, Input, FormActions, FormBlock } from "../../../../shared/ui";

import { handleRedirect } from "../../../../shared/lib";
import { useTranslation } from "react-i18next";

const initDirtyFields = {};

export function LoginForm(loginErrors = null) {
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);
  const navigation = useNavigation();
  const { t } = useTranslation(["auth", "signin"]);

  const isSubmitting = navigation.state === "submitting";
  let emailError = null;
  let passwordError = null;

  if (loginErrors !== null && !isSubmitting) {
    // Перевірки
    if (loginErrors?.isEmailValid === false && !dirtyFields.email) {
      emailError = t("auth:errors.email.invalid");;
    }
    if (loginErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
      emailError = t("auth:errors.email.empty");
    }
    if (loginErrors?.isWrong === true && Object.keys(dirtyFields).length === 0) {
      emailError = t("signin:errors.wrongCreds")
    }
    // if (loginErrors?.isPasswordValid === false && !dirtyFields.password) {
    //   passwordError = passInvalidError;
    // }
    if (loginErrors?.isPasswordNonEmpty === false && !dirtyFields.password) {
      passwordError = t("auth:errors.pass.empty");
    }
  }

  // Відкат даних та виведення модалок (якщо потрібно)
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
    <FormBlock>
      <Input
        label={t("auth:fields.emailField")}
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        errorMsg={emailError}
        onChange={handleInputChange}
        disabled={isSubmitting}
      />

      <Input
        label={t("auth:fields.passField")}
        id="password"
        type="password"
        placeholder="••••••••••••••••"
        errorMsg={passwordError}
        onChange={handleInputChange}
        disabled={isSubmitting}
      />

      <div className="form-options">
        <Checkbox
          label={t("signin:fields.rememberMe")}
          id="remember-me"
          disabled={isSubmitting}
          defaultChecked
        />

        <Link className="form-forgot" to="/forgot-password">
          { t("signin:links.forgot") }
        </Link>
      </div>

      <FormActions>
        <Button isBlue disabled={isSubmitting} name="button" value="login">
          { t("signin:buttons.signIn") }
        </Button>
        <Button disabled={isSubmitting} name="button" value="google">
          <img src="/google.svg" />
          { t("signin:buttons.withGoogle") }
        </Button>

        <p className="form-register">
          {t("signin:text.noAccount")}{" "}
          <Link
            to="/register"
            className="form-register"
            onClick={() => handleRedirect(isSubmitting)}
          >
            {t("signin:links.signup")}
          </Link>
        </p>
      </FormActions>
    </FormBlock>
  );
}