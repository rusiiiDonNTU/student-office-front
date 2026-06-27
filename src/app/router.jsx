// Функції стороніх бібліотек
import { createBrowserRouter } from "react-router-dom";
// Кастом. хуки
import { logout } from "@/features/auth";
// Компоненти
import { AuthLayout, DashboardLayout } from "./layouts";
import { ErrorRoute } from "./routes";
import { LoginPage, SignupPage, ForgotPasswordPage, loginAction, signupAction, forgotPasswordAction, ResetPasswordPage, resetPasswordAction, resetPasswordLoader } from "@/pages/auth";
import { ProfilePage, SchedulePage, PerformancePage, DocsPage, SubscribePage, SettingsPage, ChangePasswordPage } from "@/pages/dashboard";
import { authLoader, dashLoader, rootLoader } from "@/entities/session";


export const router = createBrowserRouter([
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
]);