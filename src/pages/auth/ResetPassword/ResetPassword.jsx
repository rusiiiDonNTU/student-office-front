import { useTranslation } from "react-i18next";
import { Navigate, useActionData, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { AuthPanel, ErrorModal } from "@/shared/ui";
import { FPResetForm } from "@/features/auth/recovery-password";
import { useEffect, useState } from "react";

export function ResetPasswordPage() {
  const { t } = useTranslation("forgot");
  const resetPasswordResults = useActionData();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const tokenInfo = useLoaderData();
  const navigate = useNavigate();
  
  // Якщо виникла помилка при відправці запиту
  useEffect(() => {
    if (resetPasswordResults?.success === false)
      setShowErrorModal(true)
  }, [resetPasswordResults])

  // Якщо запит надіслано успішно
  useEffect(() => {
    if (resetPasswordResults?.success === true)
      navigate("/login", { 
        replace: true,
        state: {
          passwordChanged: true
        }
      })
  }, [resetPasswordResults])

  // // Видалення токену з URL
  // useEffect(() => {
  //   if (searchParams.has("token")) {
  //     searchParams.delete("token");
  //     setSearchParams(searchParams);
  //   }
  // }, [searchParams, setSearchParams])

  // Якщо токен невалідний - йде переадресація на сторінку логіна
  if (!tokenInfo.valid) {
    console.log(tokenInfo)
    return <Navigate to="/login" replace state={{resetTokenInvalid: true}} />
  }

  return (
    <>
      {/* Модалки */}
      {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)}/>}

      <AuthPanel header={t("forgot:change")}>
        <FPResetForm token={tokenInfo.token} />
      </AuthPanel>
    </>
  );
}
