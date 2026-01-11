import { useTranslation } from "react-i18next";
import { AuthInfo } from "@/widgets";
import { AuthPanel } from "@/shared/ui";
import { SignupFailedModal, SignupForm } from "@/features/auth";
import { useActionData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export function SignupPage() {
  const { t } = useTranslation("signup");
  const navigate = useNavigate();
  const signupResults = useActionData();
  const [showSignupErrorModal, setShowSignupErrorModal] = useState(false)

  // Якщо запит на реєстрацію успішно відправлено
  useEffect(() => {
    if (signupResults?.signupSuccess === true) {
      navigate("/login", {
        state: {
          justRegistered: true
        }
      })
    }
  }, [signupResults, navigate])

  // Якщо запит на реєстрацію провалено
  useEffect(() => {
    if (signupResults?.signupSuccess === false) {
      setShowSignupErrorModal(true)
    }
  }, [signupResults])

  return (
    <>
      {/* Модалка */}
      {showSignupErrorModal && <SignupFailedModal onClose={() => setShowSignupErrorModal(false)} />}

      {/* Панель реєстрації */}
      <AuthPanel header={t("signup:header")} back>
        <SignupForm signupErrors={signupResults?.errors || null} />
      </AuthPanel>

      {/* Блок з вимогами до реєстрації*/}
      <AuthInfo infoType="requirements"/>
    </>
  );
}