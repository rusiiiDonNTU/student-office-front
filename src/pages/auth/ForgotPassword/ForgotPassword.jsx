import { useTranslation } from "react-i18next";
import { AuthPanel, ErrorModal } from "@/shared/ui";
import { FPMailForm, FPMailSentModal } from "@/features/auth";
import { useActionData } from "react-router-dom";
import { useEffect, useState } from "react";

export function ForgotPasswordPage() {
  const { t } = useTranslation("forgot");
  const forgotPasswordResults = useActionData();
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [showMailSentModal, setShowMailSentModal] = useState(false);

  // Якщо виникла помилка при відправці запиту
  useEffect(() => {
    if (forgotPasswordResults?.success === false)
      setShowErrorModal(true)
  }, [forgotPasswordResults])

  // Якщо запит надіслано успішно
  useEffect(() => {
    if (forgotPasswordResults?.success === true)
      setShowMailSentModal(true)
  }, [forgotPasswordResults])

  return (
    <>
      {/* Модалки */}
      {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)}/>}
      {showMailSentModal && <FPMailSentModal onClose={() => setShowMailSentModal(false)}/>}

      {/* Панель відправки запиту */}
      <AuthPanel header={t("forgot:header")} style={{maxWidth: "37.5rem"}} back>
        <FPMailForm sent={showMailSentModal}/>
      </AuthPanel>
    </>
  );
}