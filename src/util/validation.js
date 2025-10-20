import { emailRegex } from "./regex";

export function checkIfNonEmpty(field) {
  return field.length > 0;
}

export function validateEmail(email) {
  return emailRegex.test(email);
}

export function validatePassword(password) {
  // Масив помилок
  const errors = [];

  // Довжина
  if (password.length < 8) {
    errors.push("Пароль занадто короткий (мінімум 8 символів)");
  } else if (password.length > 16) {
    errors.push("Пароль занадто довгий (максимум 16 символів)");
  }

  // Одна маленька літера
  if (!/[a-z]/.test(password)) {
    errors.push("Пароль не містить малих літер (мінімум 1)");
  }
  // Одна велика літера
  if (!/[A-Z]/.test(password)) {
    errors.push("Пароль не містить великих літер (мінімум 1)");
  }
  // Одна цифра
  if (!/\d/.test(password)) {
    errors.push("Пароль не містить жодної цифри (мінімум 1)");
  }
  // Один спец. символ
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push("Пароль не містить жодного спец. символу (мінімум 1)");
  }

  return errors;
}
