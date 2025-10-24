import { Link, useActionData, useNavigation } from "react-router-dom";
import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";
import { useEffect, useState } from "react";
import { handleRedirect } from "../../util/redirect";

const initDirtyFields = {};

function LoginForm() {
  const loginErrors = useActionData();
  const navigation = useNavigation();
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);

  const isSubmitting = navigation.state === "submitting";

  let emailError = null;
  let passwordError = null;

  if (loginErrors?.isEmailValid === false && !dirtyFields.email) {
    emailError = "Пошта невалідна";
  }
  if (loginErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
    emailError = "Пошта відсутня";
  }
  if (loginErrors?.message && Object.keys(dirtyFields).length === 0) {
    emailError = loginErrors.message;
  }
  if (loginErrors?.isPasswordValid === false && !dirtyFields.password) {
    passwordError = "Пароль невалідний";
  }
  if (loginErrors?.isPasswordNonEmpty === false && !dirtyFields.password) {
    passwordError = "Пароль відсутній";
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
        label="Пошта"
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        errorMsg={emailError}
        onChange={handleInputChange}
        disabled={isSubmitting}
      />

      <Input
        label="Пароль"
        id="password"
        type="password"
        placeholder="••••••••••••••••"
        errorMsg={passwordError}
        onChange={handleInputChange}
        disabled={isSubmitting}
      />

      <div className="form-options">
        <Checkbox
          label="Запам'ятати мене"
          id="remember-me"
          disabled={isSubmitting}
          defaultChecked
        />

        <Link className="form-forgot" to="/forgot-password">
          Забули пароль?
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
