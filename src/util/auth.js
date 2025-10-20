let isLogged = false;

export function login(token, isRemember = true) {
  if (isRemember) localStorage.setItem("token", token);
  else sessionStorage.setItem("token", token);
  isLogged = true;
}

export function logout() {
  localStorage.removeItem("token", token);
  sessionStorage.removeItem("token", token);
  isLogged = false;
}

export function getAuthToken() {
  const locToken = localStorage.getItem("token");
  const sesToken = sessionStorage.getItem("token");

  if (locToken) return locToken;
  if (sesToken) return sesToken;

  return 'UNAUTHETICATED';
}

export function getAuthStatus() {
  return isLogged;
}