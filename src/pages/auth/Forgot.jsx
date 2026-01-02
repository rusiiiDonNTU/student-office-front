import { useTranslation } from "react-i18next";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel";
import FPMailForm from "../../components/ForgotPassword/FPMailForm";
import { useSearchParams } from "react-router-dom";

function ForgotPage() {
  const { t } = useTranslation("forgot");

  return (
    <>
      <AuthPanel header={t("forgot:header")} style={{maxWidth: "37.5rem"}} back>
        <FPMailForm />
      </AuthPanel>
    </>
  );
}

export default ForgotPage;
