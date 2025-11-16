import { useTranslation } from "react-i18next";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel";
import FPMailForm from "../../components/ForgotPassword/FPMailForm";

function ForgotPage() {
  const { t } = useTranslation("auth");

  return (
    <>
      <AuthPanel header={t("headers.forgot")} style={{maxWidth: "37.5rem"}} back>
        <FPMailForm />
      </AuthPanel>
    </>
  );
}

export default ForgotPage;
