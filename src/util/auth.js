import { redirect } from "react-router-dom";

let isLogged = false;

export function login(accessToken, isRemember = true) {
  if (isRemember) localStorage.setItem("accessToken", accessToken);
  else sessionStorage.setItem("accessToken", accessToken);
  isLogged = true;
}

export function logout() {
  const accessToken = getAccessToken();

  if (accessToken !== "UNAUTHETICATED") {
    localStorage.removeItem("accessToken", accessToken);
    sessionStorage.removeItem("accessToken", accessToken);
    isLogged = false;
  }

  return redirect("/login")
}

export function getAccessToken() {
  const locToken = localStorage.getItem("accessToken");
  const sesToken = sessionStorage.getItem("accessToken");

  if (locToken) return locToken;
  if (sesToken) return sesToken;

  return "UNAUTHETICATED";
}

export function getAuthStatus() {
  if (!isLogged) {
    const accessToken = getAccessToken();
    if (accessToken !== "UNAUTHETICATED") isLogged = true;
  }

  return isLogged;
}
