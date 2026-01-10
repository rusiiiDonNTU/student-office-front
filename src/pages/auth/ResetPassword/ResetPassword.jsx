import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthPanel } from "@/shared/ui";
import { FPChangeForm } from "@/features/auth/recovery-password";
import { AuthInfo } from "@/widgets/";

export function ResetPasswordPage({ token }) {
  const { t } = useTranslation("forgot");
  const navigate = useNavigate();

  return (
    <>
      <AuthPanel header={t("forgot:change")} style={{maxWidth: "37.5rem"}}>
        <FPChangeForm />
      </AuthPanel>
      <AuthInfo infoType="newPass"/>
    </>
  );
}
