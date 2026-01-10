import { useTranslation } from "react-i18next";
import { AuthInfo } from "../../../widgets";
import { AuthPanel } from "../../../shared/ui";
import { SignupForm } from "../../../features/auth";


export function SignupPage() {
  const { t } = useTranslation("signup");

  return (
    <>
      <AuthPanel header={t("signup:header")} back>
        <SignupForm />
      </AuthPanel>
      <AuthInfo infoType="requirements"/>
    </>
  );
}