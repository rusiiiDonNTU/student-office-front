import { InDevelopment, PageCard } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import "./Schedule.css"

export function SchedulePage() {
  const { t } = useTranslation(["schedule"]);

  return (
    <PageCard className="schedule" header={t("schedule:header")}>
        <InDevelopment />
    </PageCard>
  );
}