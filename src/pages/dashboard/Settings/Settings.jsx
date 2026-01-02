import { useTranslation } from "react-i18next";
import PageCard from "../../../components/UI/PageCard/PageCard";
import SettingsList from "../../../components/UI/Settings/SettingsList";

function SettingsPage() {
  const { t } = useTranslation("dashboard");

  return (
    <PageCard className="settings" header={t("dashboard:settings.header")}>
      <SettingsList />
    </PageCard>
  );
}

export default SettingsPage;