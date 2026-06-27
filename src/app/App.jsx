// Функції стороніх бібліотек
import {
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
// Хуки
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
// Кастом. API
import { queryClient } from "../shared/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "./router";

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