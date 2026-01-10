import { useTranslation } from "react-i18next";
import AuthPanel from "../../../shared/ui";
import { FPMailForm } from "../../../features/auth";

export function ForgotPasswordPage() {
  const { t } = useTranslation("forgot");

  return (
    <>
      <AuthPanel header={t("forgot:header")} style={{maxWidth: "37.5rem"}} back>
        <FPMailForm />
      </AuthPanel>
    </>
  );
}