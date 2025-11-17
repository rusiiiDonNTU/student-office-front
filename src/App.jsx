import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AuthLayout, { permForLoginLoader } from "./layouts/Auth/Auth";
import LoginPage, { loginAction } from "./pages/auth/Login.jsx";
import SignupPage from "./pages/auth/Signup";
import DashboardLayout, {
  permForDashboardLoader,
} from "./layouts/Dashboard/Dashboard";
import ForgotPage from "./pages/auth/Forgot";
import ProfilePage from "./pages/dashboard/Profile.jsx";
import SubscribePage from "./pages/dashboard/Subscribe.jsx";
import { getAuthStatus, logout } from "./util/auth.js";
import ErrorPage from "./pages/Error.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    loader: rootRedirectLoader,
  },
  {
    element: <AuthLayout />,
    loader: permForLoginLoader,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "register", element: <SignupPage /> },
      { path: "forgot-password", element: <ForgotPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    loader: permForDashboardLoader,
    errorElement: <ErrorPage />,
    children: [
      { path: "profile", element: <ProfilePage /> },
      { path: "subscribe", element: <SubscribePage /> },
    ],
  },
  { path: "logout", loader: logout },
]);

function App() {
  const { t, i18n } = useTranslation('main');
  const lang = i18n.language;

  // Переклад назви сторінки в браузері після зміни мови
  useEffect(() => {
    document.title = t('title')
  }, [lang]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

export function rootRedirectLoader() {
  const isLogged = getAuthStatus();

  if (!!isLogged) {
    return redirect("/profile");
  } else {
    return redirect("/login");
  }
}
