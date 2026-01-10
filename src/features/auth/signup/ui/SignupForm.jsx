import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "react-router-dom";

import { Button, Checkbox, InputForm, FormBlock, InputRow, FormActions, ErrorList} from "../../../../shared/ui";

const initDirtyFields = {};

export function SignupForm() {
  const navigation = useNavigation();

  const email = useRef(null);
  const { t } = useTranslation(["auth", "signup"]);

  const [isStudentId, setIsStudentId] = useState(true);
  const [isOldPassport, setIsOldPassport] = useState(false);
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    setDirtyFields({});
  }, [signupErrors])

  let emailError = null;
  const passwordErrors = [];
  const passportErrors = [];
  const oldPassportErrors = [];
  const studentIdErrors = []; 

  // Перевірка результатів валідації
  if (!isSubmitting) {
    // Пошта
    if (signupErrors?.isEmailValid === false && !dirtyFields.email) {
      emailError = t("auth:errors.email.invalid");
    }
    if (signupErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
      emailError = t("auth:errors.email.empty");
    }
    // Пароль
    if (signupErrors?.isPasswordValid && Object.keys(signupErrors?.isPasswordValid).length > 0) {
      const errors = signupErrors.isPasswordValid

      if (!!errors.short) passwordErrors.push(t("signup:errors.pass.short"))
      if (!!errors.long) passwordErrors.push(t("signup:errors.pass.long"))
      if (!!errors.noLower) passwordErrors.push(t("signup:errors.pass.noLower"))
      if (!!errors.noUpper) passwordErrors.push(t("signup:errors.pass.noUpper"))
      if (!!errors.noDigit) passwordErrors.push(t("signup:errors.pass.noDigit"))
      if (!!errors.noSymbol) passwordErrors.push(t("signup:errors.pass.noSymbol"))
    }
    if (signupErrors?.arePasswordsEqual === false) {
      passwordErrors.push(t("signup:errors.pass.notEqual"))
    }
    // Студ. квиток
    if (signupErrors?.isStudIdSeriesNonEmpty === false && !!isStudentId) {
      studentIdErrors.push(t("signup:errors.studentid.series.empty"))
    }
    else if (signupErrors?.isStudIdSeriesValid === false && !!isStudentId) {
      studentIdErrors.push(t("signup:errors.studentid.series.short"))
    }
    if (signupErrors?.isStudIdNumberNonEmpty === false && !!isStudentId) {
      studentIdErrors.push(t("signup:errors.studentid.number.empty"))
    }
    else if (signupErrors?.isStudIdNumberValid === false && !!isStudentId) {
      studentIdErrors.push(t("signup:errors.studentid.number.short"))
    }
    // Паспорт
    if (signupErrors?.isPassportNumberNonEmpty === false && !isStudentId) {
      passportErrors.push(t("signup:errors.passport.number.empty"))
    }    
    else if (signupErrors?.isPassportNumberValid === false && !isStudentId) {
      passportErrors.push(t("signup:errors.passport.number.short"))
    }
   if (signupErrors?.isOldPassportNumberNonEmpty === false && !isStudentId) {
      oldPassportErrors.push(t("signup:errors.oldPassport.number.empty"))
    }    
    else if (signupErrors?.isOldPassportNumberValid === false && !isStudentId) {
      oldPassportErrors.push(t("signup:errors.oldPassport.number.short"))
    }
    if (signupErrors?.isOldPassportSeriesNonEmpty === false && !isStudentId) {
      oldPassportErrors.push(t("signup:errors.oldPassport.series.empty"))
    }
    else if (signupErrors?.isOldPassportSeriesValid === false && !isStudentId) {
      oldPassportErrors.push(oldPassportSeriesShortError)
    }
  }

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

  function handleStudentIdCheckboxChange() {
    setIsStudentId((prev) => !prev);
  }

  function handlePassportCheckboxChange() {
    setIsOldPassport((prev) => !prev);
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
        ref={email}
      />

      <InputRow>
        <Input
          label={t("auth:fields.passField")}
          id="password"
          type="password"
          placeholder="••••••••••••••••"
          maxLength="16"
          disabled={isSubmitting}
        />
        <Input
          label={t("signup:fields.confirmPassField")}
          id="confirm-password"
          type="password"
          placeholder="••••••••••••••••"
          maxLength="16"
          disabled={isSubmitting}
        />
      </InputRow>

      {passwordErrors.length > 0 && <ErrorList l={passwordErrors}/>}

      <InputRow>
        <Input
          label={t("signup:fields.studIdSeries")}
          id="student-id-series"
          placeholder="АА"
          onChange={handleLettersInput}
          maxLength="2"
          disabled={!isStudentId || isSubmitting}
        />
        <Input
          label={t("signup:fields.studIdNumber")}
          id="student-id-num"
          placeholder="12345678"
          onChange={handleDigitsInput}
          disabled={!isStudentId || isSubmitting}
          maxLength="8"
          type="tel"
        />
      </InputRow>
      <Checkbox
        label={t("signup:fields.noStudentId")}
        id="no-student-id"
        checked={!isStudentId}
        onChange={handleStudentIdCheckboxChange}
        disabled={isSubmitting}
      />

      {studentIdErrors.length > 0 && <ErrorList l={studentIdErrors}/>}

      {!isStudentId && <>
          {isOldPassport &&
            <InputRow>
              <Input
                label={t("signup:fields.passportSeries")}
                id="passport-series"
                placeholder="АА"
                onChange={handleLettersInput}
                maxLength="2"
                disabled={isSubmitting}
              />
              <Input
                label={t("signup:fields.passportNumber")}
                id="passport-number"
                placeholder="123456"
                maxLength="6"
                type="tel"
                onChange={handleDigitsInput}
                disabled={isSubmitting}
              />
            </InputRow>}
          {!isOldPassport &&
            <Input
              label={t("signup:fields.passportNumber")}
              id="passport-number"
              placeholder="123456789"
              maxLength="9"
              type="tel"
              onChange={handleDigitsInput}
              disabled={isSubmitting}
            />}
          <Checkbox
            label={t("signup:fields.oldPassport")}
            id="old-passport"
            checked={isOldPassport}
            onChange={handlePassportCheckboxChange}
            disabled={isSubmitting}
          />

          {(passportErrors.length > 0 && !isOldPassport) && <ErrorList l={passportErrors}/>}
          {(oldPassportErrors.length > 0 && isOldPassport) && <ErrorList l={oldPassportErrors}/>}
      </>}

      

      <FormActions>
        <Button isBlue disabled={isSubmitting}>{t("signup:buttons.signUp")}</Button>
      </FormActions>
    </FormBlock>
  );
}