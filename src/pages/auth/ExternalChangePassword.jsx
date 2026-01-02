import { useTranslation } from "react-i18next";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel";
import FPMailForm from "../../components/ForgotPassword/FPMailForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import FPChangeForm from "../../components/ForgotPassword/FPChangeForm";
import AuthInfo from "../../components/Auth/AuthInfo/AuthInfo";
import AuthLayout from "../../layouts/Auth/Auth";

function ExternalChangePasswordPage({ token }) {
  const { t } = useTranslation("forgot");
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <AuthPanel header={t("forgot:change")} style={{maxWidth: "37.5rem"}}>
        <FPChangeForm />
      </AuthPanel>
      <AuthInfo infoType="newPass"/>
    </AuthLayout>
  );
}

export default ExternalChangePasswordPage;
