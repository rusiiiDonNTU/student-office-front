import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAuthStatus, logout } from "./util/auth.js";
import AuthLayout, { permForLoginLoader } from "./layouts/Auth/Auth";
import LoginPage, { loginAction } from "./pages/auth/Login.jsx";
import SignupPage, { signupAction } from "./pages/auth/Signup";
import DashboardLayout, {
  permForDashboardLoader,
} from "./layouts/Dashboard/Dashboard";
import ProfilePage from "./pages/dashboard/Profile/Profile.jsx";
import ForgotPage from "./pages/auth/Forgot";
import SubscribePage from "./pages/dashboard/Subscribe.jsx";
import ErrorPage from "./pages/Error.jsx";
import ConfirmEmail from "./pages/auth/ConfirmEmail.jsx";
import SchedulePage from "./pages/dashboard/Schedule/Schedule.jsx";
import PerformancePage from "./pages/dashboard/Performance/Performance.jsx";
import DocsPage from "./pages/dashboard/Docs/Docs.jsx";
import ChangePasswordDispatcher from "./dispatchers/ChangePasswordDispatcher.jsx";
import SettingsPage from "./pages/dashboard/Settings/Settings.jsx";

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
    shouldRevalidate: () => {

    },
    children: [
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "register", element: <SignupPage />, action: signupAction },
      { path: "forgot-password", element: <ForgotPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    loader: permForDashboardLoader,
    errorElement: <ErrorPage />,
    shouldRevalidate: ({ currentUrl, nextUrl, formMethod, defaultShouldRevalidate }) => {
      if (formMethod && formMethod !== "GET") {
        return true
      }

      if (currentUrl.pathname !== nextUrl.pathname) {
        return false;
      }

      return true
    },
    children: [
      { path: "profile", element: <ProfilePage />, },
      { path: "schedule", element: <SchedulePage />, },
      { path: "performance", element: <PerformancePage />, },
      { path: "docs", element: <DocsPage />, },
      { path: "subscribe", element: <SubscribePage /> },
      { path: "settings", element: <SettingsPage />}
    ],
  },
  { path: "/logout", errorElement: <ErrorPage />, loader: logout },
  { path: "/confirm-email", errorElement: <ErrorPage />, element: <ConfirmEmail />},
  { path: "/change-password", errorElement: <ErrorPage />, element: <ChangePasswordDispatcher />, loader: getAuthStatus}
]);

function App() {
  const { t, i18n } = useTranslation('main');
  const lang = i18n.language;

  // Переклад назви сторінки в браузері після зміни мови
  useEffect(() => {
    document.title = t('title')
  }, [lang]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} initialIsOpen={false}>
      <RouterProvider router={router} />
    </QueryClientProvider>
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
