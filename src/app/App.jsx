// Функції стороніх бібліотек
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
// Хуки
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
// Кастом. хуки
import { logout } from "@/features/auth";
// Кастом. API
import { queryClient } from "../shared/api";
// Компоненти
import { AuthLayout, DashboardLayout } from "./layouts";
import { ErrorRoute } from "./routes";
import { LoginPage, SignupPage, ForgotPasswordPage, ConfirmEmailPage, loginAction, signupAction, forgotPasswordAction, ResetPasswordPage, resetPasswordAction, resetPasswordLoader } from "@/pages/auth";
import { ProfilePage, SchedulePage, PerformancePage, DocsPage, SubscribePage, SettingsPage, ChangePasswordPage } from "@/pages/dashboard";
import { authLoader, dashLoader, rootLoader } from "@/entities/session";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorRoute />,
    loader: rootLoader
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorRoute />,
    loader: authLoader,
    children: [
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "register", element: <SignupPage />, action: signupAction },
      { path: "forgot-password", element: <ForgotPasswordPage />, action: forgotPasswordAction },
      { path: "reset-password", element: <ResetPasswordPage />, loader: resetPasswordLoader, action: resetPasswordAction },
    ]
  },
  {
    element: <DashboardLayout />,
    errorElement: <ErrorRoute />,
    loader: dashLoader,
    children: [
      { path: "profile", element: <ProfilePage />, },
      { path: "schedule", element: <SchedulePage />, },
      { path: "performance", element: <PerformancePage />, },
      { path: "docs", element: <DocsPage />, },
      { path: "subscribe", element: <SubscribePage /> },
      { path: "settings", element: <SettingsPage />},
      { path: "change-password", element: <ChangePasswordPage />}
    ],
  },
  { path: "/logout", errorElement: <ErrorRoute />, loader: logout },
  { path: "/confirm-email", errorElement: <ErrorRoute />, element: <ConfirmEmailPage />},
]);

export function App() {
  const { t, i18n } = useTranslation('main');
  const lang = i18n.language;

  // Переклад назви сторінки в браузері після зміни мови
  useEffect(() => {
    document.title = t('title')
  }, [lang]);

  return (
    <QueryClientProvider client={queryClient} initialIsOpen={false}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}