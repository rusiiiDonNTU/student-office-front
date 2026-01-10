import { useTranslation } from "react-i18next";
import PageCard from "../../../shared/ui/PageCard/PageCard";
import SettingsList from "../../../components/Settings/SettingsList";

function SettingsPage() {
  const { t } = useTranslation("dashboard");

  function handlePasswordClick() {

  }

  return (
    <PageCard className="settings" header={t("dashboard:settings.header")}>
      <SettingsList onPasswordClick={handlePasswordClick}/>
    </PageCard>
  );
}

export default SettingsPage;