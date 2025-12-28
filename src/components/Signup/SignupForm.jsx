import { useEffect, useRef, useState } from "react";

import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import Form from "../UI/Form/Form";
import InputRow from "../UI/InputRow/InputRow";
import FormActions from "../UI/Form/FormActions/FormActions";
import { useTranslation } from "react-i18next";
import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import ErrorList from "../UI/ErrorList/ErrorList";
import SignupFailedModal from "./SignupFailedModal/SignupFailedModal";

const initDirtyFields = {};

function SignupForm() {
  const signupErrors = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const email = useRef(null);
  const { t } = useTranslation(["auth", "signup"]);

  const [isStudentId, setIsStudentId] = useState(true);
  const [isOldPassport, setIsOldPassport] = useState(false);
  const [dirtyFields, setDirtyFields] = useState(initDirtyFields);
  const [showSignupFailedModal, setShowSignupFailedModal] = useState(false);
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    setDirtyFields({});
    if (signupErrors?.signupFailed === true) {
      setShowSignupFailedModal(true)
    }

    if (signupErrors?.signupSuccess === true) {
      navigate('/login', {
        state: {
          justRegistered: true,
          email: email.current.value
        }
      });
    }
  }, [signupErrors, navigate])

  let emailError = null;
  const passwordErrors = [];
  const passportErrors = [];
  const oldPassportErrors = [];
  const studentIdErrors = []; 

  // Перевірка результатів валідації
  if (!isSubmitting) {
    // Текст помилок
    const emailInvalidError = t("auth:errors.email.invalid");                         // пошти
    const emailEmptyError = t("auth:errors.email.empty");                             //
    const passShortError = t("signup:errors.pass.short");                             // пароля
    const passLongError = t("signup:errors.pass.long");                               //
    const passNoLowerError = t("signup:errors.pass.noLower");                         //
    const passNoUpperError = t("signup:errors.pass.noUpper");                         //
    const passNoDigitError = t("signup:errors.pass.noDigit");                         //
    const passNoSymboLError = t("signup:errors.pass.noSymbol");                       //
    const passNotEqualError = t("signup:errors.pass.notEqual");                       //
    const studIdSeriesEmptyError = t("signup:errors.studentid.series.empty");         // студ. квитка
    const studIdSeriesShortError = t("signup:errors.studentid.series.short");         //
    const studIdNumberEmptyError = t("signup:errors.studentid.number.empty");         //
    const studIdNumberShortError = t("signup:errors.studentid.number.short");         //
    const passportNumberEmptyError = t("signup:errors.passport.number.empty");        // паспорта
    const passportNumberShortError = t("signup:errors.passport.number.short");        //
    const oldPassportNumberEmptyError = t("signup:errors.oldPassport.number.empty");  //
    const oldPassportNumberShortError = t("signup:errors.oldPassport.number.short");  //
    const oldPassportSeriesEmptyError = t("signup:errors.oldPassport.series.empty");  //
    const oldPassportSeriesShortError = t("signup:errors.oldPassport.series.short");  //

    // Пошта
    if (signupErrors?.isEmailValid === false && !dirtyFields.email) {
      emailError = emailInvalidError;
    }
    if (signupErrors?.isEmailNonEmpty === false && !dirtyFields.email) {
      emailError = emailEmptyError;
    }
    // Пароль
    if (signupErrors?.isPasswordValid && Object.keys(signupErrors?.isPasswordValid).length > 0) {
      const errors = signupErrors.isPasswordValid

      if (!!errors.short) passwordErrors.push(passShortError)
      if (!!errors.long) passwordErrors.push(passLongError)
      if (!!errors.noLower) passwordErrors.push(passNoLowerError)
      if (!!errors.noUpper) passwordErrors.push(passNoUpperError)
      if (!!errors.noDigit) passwordErrors.push(passNoDigitError)
      if (!!errors.noSymbol) passwordErrors.push(passNoSymboLError)
    }
    if (signupErrors?.arePasswordsEqual === false) {
      passwordErrors.push(passNotEqualError)
    }
    // Студ. квиток
    if (signupErrors?.isStudIdSeriesNonEmpty === false && !!isStudentId) {
      studentIdErrors.push(studIdSeriesEmptyError)
    }
    else if (signupErrors?.isStudIdSeriesValid === false && !!isStudentId) {
      studentIdErrors.push(studIdSeriesShortError)
    }
    if (signupErrors?.isStudIdNumberNonEmpty === false && !!isStudentId) {
      studentIdErrors.push(studIdNumberEmptyError)
    }
    else if (signupErrors?.isStudIdNumberValid === false && !!isStudentId) {
      studentIdErrors.push(studIdNumberShortError)
    }
    // Паспорт
    if (signupErrors?.isPassportNumberNonEmpty === false && !isStudentId) {
      passportErrors.push(passportNumberEmptyError)
    }    
    else if (signupErrors?.isPassportNumberValid === false && !isStudentId) {
      passportErrors.push(passportNumberShortError)
    }
   if (signupErrors?.isOldPassportNumberNonEmpty === false && !isStudentId) {
      oldPassportErrors.push(oldPassportNumberEmptyError)
    }    
    else if (signupErrors?.isOldPassportNumberValid === false && !isStudentId) {
      oldPassportErrors.push(oldPassportNumberShortError)
    }
    if (signupErrors?.isOldPassportSeriesNonEmpty === false && !isStudentId) {
      oldPassportErrors.push(oldPassportSeriesEmptyError)
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

  // Текст
  // -- поля
  const emailLabel = t("auth:fields.emailField");
  const passLabel = t("auth:fields.passField");
  const confirmPassLabel = t("signup:fields.confirmPassField");
  const studIdSeriesLabel = t("signup:fields.studIdSeries");
  const studIdNumberLabel = t("signup:fields.studIdNumber");
  const noStudentIdLabel = t("signup:fields.noStudentId");
  const passportSeriesLabel = t("signup:fields.passportSeries");
  const passportNumberLabel = t("signup:fields.passportNumber");
  const oldPassportLabel = t("signup:fields.oldPassport")
  // -- кнопка
  const signUpButtonText = t("signup:buttons.signUp");

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

        <InputRow>
          <Input
            label={passLabel}
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            maxLength="16"
            disabled={isSubmitting}
          />
          <Input
            label={confirmPassLabel}
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
            label={studIdSeriesLabel}
            id="student-id-series"
            placeholder="АА"
            onChange={handleLettersInput}
            maxLength="2"
            disabled={!isStudentId || isSubmitting}
          />
          <Input
            label={studIdNumberLabel}
            id="student-id-num"
            placeholder="12345678"
            onChange={handleDigitsInput}
            disabled={!isStudentId || isSubmitting}
            maxLength="8"
            type="tel"
          />
        </InputRow>
        <Checkbox
          label={noStudentIdLabel}
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
                  label={passportSeriesLabel}
                  id="passport-series"
                  placeholder="АА"
                  onChange={handleLettersInput}
                  maxLength="2"
                  disabled={isSubmitting}
                />
                <Input
                  label={passportNumberLabel}
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
                label={passportNumberLabel}
                id="passport-number"
                placeholder="123456789"
                maxLength="9"
                type="tel"
                onChange={handleDigitsInput}
                disabled={isSubmitting}
              />}
            <Checkbox
              label={oldPassportLabel}
              id="old-passport"
              checked={isOldPassport}
              onChange={handlePassportCheckboxChange}
              disabled={isSubmitting}
            />

            {(passportErrors.length > 0 && !isOldPassport) && <ErrorList l={passportErrors}/>}
            {(oldPassportErrors.length > 0 && isOldPassport) && <ErrorList l={oldPassportErrors}/>}
        </>}

        

        <FormActions>
          <Button isBlue disabled={isSubmitting}>{signUpButtonText}</Button>
        </FormActions>
      </Form>
      {showSignupFailedModal && <SignupFailedModal onClose={() => setShowSignupFailedModal(false)}/>}
    </>
  );
}

export default SignupForm;
