import { emailRegex } from "./regex";

export function checkIfNonEmpty(field) {
  return field.length > 0;
}

export function validateEmail(email) {
  return emailRegex.test(email);
}

export function validatePassword(password) {
  // Об'єкт з помилками
  const errors = {
    short: false,
    long: false,
    noLower: false,
    noUpper: false,
    noDigit: false,
    noSymbol: false
  };

  // Довжина
  if (password.length < 8) {
    errors.short = true;
  } else if (password.length > 16) {
    errors.long = true;
  }

  // Одна маленька літера
  if (!/[a-z]/.test(password)) {
    errors.noLower = true;
  }
  // Одна велика літера
  if (!/[A-Z]/.test(password)) {
    errors.noUpper = true;
  }
  // Одна цифра
  if (!/\d/.test(password)) {
    errors.noDigit = true;
  }
  // Один спец. символ
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.noSymbol = true;
  }

  return errors;
}

export function checkIfEqual(password, confirmPassword) {
  return password === confirmPassword;
}

export function validateRNOKPP(rnokpp, isEmpty) {
  if (!isEmpty) return rnokpp.length === 10
  return true
}

export function validateStudIdSeries(sIdSeries, isEmpty) {
  if (!isEmpty) return sIdSeries.length === 2
  return true
}

export function validateStudIdNumber(sIdNumber, isEmpty) {
  if (!isEmpty) return sIdNumber.length === 8
  return true
}