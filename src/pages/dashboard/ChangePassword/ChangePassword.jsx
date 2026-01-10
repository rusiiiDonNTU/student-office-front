import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../app/layouts/Dashboard/Dashboard";

function InternalChangePasswordPage({ token }) {
  const { t } = useTranslation("forgot");
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      
    </DashboardLayout>
  );
}

export default InternalChangePasswordPage;
