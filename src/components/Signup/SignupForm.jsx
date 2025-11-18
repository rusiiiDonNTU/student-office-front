import { useEffect, useState } from "react";

import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import Form from "../UI/Form/Form";
import InputRow from "../UI/InputRow/InputRow";
import FormActions from "../UI/Form/FormActions/FormActions";
import { useTranslation } from "react-i18next";
import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import ErrorList from "../UI/ErrorList/ErrorList";

const initDirtyFields = {};

function SignupForm() {
  const signupErrors = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { t } = useTranslation("auth");
  const [isRnokpp, setIsRnokpp] = useState(true);
  const [isStudentId, setIsStudentId] = useState(true);
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (signupErrors?.signupSuccess === true) {
      navigate('/login', {
        state: {
          justRegistered: true
        }
      });
    }
  }, [signupErrors, navigate])

  let emailError = null;
  const passwordErrors = [];
  const rnokppErrors = [];
  const studentIdErrors = []; 
  let signupFailed = false;

  // Перевірка результатів валідації
  if (!isSubmitting) {
    if (signupErrors?.isEmailValid === false && !dirtyFields.email) {
      emailError = t("errors.email.invalid");
    }
    if (signupErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
      emailError = t("errors.email.empty");
    }
    if (signupErrors?.isPasswordValid && Object.keys(signupErrors?.isPasswordValid).length > 0) {
      const errors = signupErrors.isPasswordValid

      if (!!errors.short) passwordErrors.push(t("errors.pass.short"))
      if (!!errors.long) passwordErrors.push(t("errors.pass.long"))
      if (!!errors.noLower) passwordErrors.push(t("errors.pass.noLower"))
      if (!!errors.noUpper) passwordErrors.push(t("errors.pass.noUpper"))
      if (!!errors.noDigit) passwordErrors.push(t("errors.pass.noDigit"))
      if (!!errors.noSymbol) passwordErrors.push(t("errors.pass.noSymbol"))
    }
    if (signupErrors?.arePasswordsEqual === false) {
      passwordErrors.push(t("errors.pass.notEqual"))
    }
    if (signupErrors?.isRNOKPPNonEmpty === false && !!isRnokpp) {
      rnokppErrors.push(t("errors.rnokpp.empty"))
    }    
    else if (signupErrors?.isRNOKPPValid === false && !!isRnokpp) {
      rnokppErrors.push(t("errors.rnokpp.short"))
    }
    if (signupErrors?.isStudIdSeriesNonEmpty === false && !!isStudentId) {
      studentIdErrors.push(t("errors.studentid.series.empty"))
    }
    else if (signupErrors?.isStudIdSeriesValid === false && !!isStudentId) {
      studentIdErrors.push(t("errors.studentid.series.short"))
    }
    if (signupErrors?.isStudIdNumberNonEmpty === false && !!isStudentId) {
      studentIdErrors.push(t("errors.studentid.number.empty"))
    }
    else if (signupErrors?.isStudIdNumberValid === false && !!isStudentId) {
      studentIdErrors.push(t("errors.studentid.number.short"))
    }
    if (signupErrors?.signupFailed) {
      signupFailed = true
    }
    if (!isRnokpp && !isStudentId) {
      studentIdErrors.push(t("errors.noDocs"))
    }
  }

  // Чистка "забрудених полів" після того, як прийшла відповідь на відправлену форму
  useEffect(() => {
      setDirtyFields({});
  }, [signupErrors]);

  // Занесення поля у список "забруднених", якщо буде введено хоча б один символ
  function handleInputChange(e) {
    const { name } = e.target;

    setDirtyFields((prev) => {
      return { ...prev, [name]: true };
    });
  }

  // Видалення будь-яких символів з поля, крім букв
  function handleLettersInput(e) {
    const { value } = e.target;
    e.target.value = value.replace(/[^а-яА-ЯїієІЇЄ]/g, '').toUpperCase();
  }

  // Видалення будь-яких символів з поля, крім цифр
  function handleDigitsInput(e) {
    const { value } = e.target;
    e.target.value = value.replace(/\D/g, '');
  }

  function handleRnokppCheckboxChange() {
    setIsRnokpp((prev) => !prev);
  }

  function handleStudentIdCheckboxChange() {
    setIsStudentId((prev) => !prev);
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
      
      {!!signupFailed && <ErrorList 
        h={t("errors.failedSignup.start")}
        l={[t("errors.failedSignup.nonExist"), t("errors.failedSignup.alreadyExist"), t("errors.failedSignup.etc")]}
      />}

      <InputRow>
        <Input
          label={t("fields.passField")}
          id="password"
          type="password"
          placeholder="••••••••••••••••"
          maxLength="16"
          disabled={isSubmitting}
        />
        <Input
          label={t("fields.confirmPassField")}
          id="confirm-password"
          type="password"
          placeholder="••••••••••••••••"
          maxLength="16"
          disabled={isSubmitting}
        />
      </InputRow>

      {passwordErrors.length > 0 && <ErrorList l={passwordErrors}/>}

      <Input
        label={t("fields.TRN")}
        id="rnokpp"
        placeholder="1234567890"
        maxLength="10"
        type="tel"
        onChange={handleDigitsInput}
        disabled={!isRnokpp || isSubmitting}
      />
      <Checkbox
        label={t("fields.noTRN")}
        id="no-rnokpp"
        checked={!isRnokpp}
        onChange={handleRnokppCheckboxChange}
        disabled={isSubmitting}
      />

      {rnokppErrors.length > 0 && <ErrorList l={rnokppErrors}/>}

      <InputRow>
        <Input
          label={t("fields.studIdSeries")}
          id="student-id-series"
          placeholder="АА"
          onChange={handleLettersInput}
          maxLength="2"
          disabled={!isStudentId || isSubmitting}
        />
        <Input
          label={t("fields.studIdNumber")}
          id="student-id-num"
          placeholder="01234567"
          onChange={handleDigitsInput}
          disabled={!isStudentId || isSubmitting}
          maxLength="8"
          type="tel"
        />
      </InputRow>
      <Checkbox
        label={t("fields.noStudentId")}
        id="no-student-id"
        checked={!isStudentId}
        onChange={handleStudentIdCheckboxChange}
        disabled={isSubmitting}
      />

      {studentIdErrors.length > 0 && <ErrorList l={studentIdErrors}/>}

      <FormActions>
        <Button isBlue disabled={isSubmitting}>{t("buttons.signUp")}</Button>
      </FormActions>
    </Form>
  );
}

export default SignupForm;
