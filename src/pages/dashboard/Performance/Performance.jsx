import { InDevelopment, PageCard } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import "./Performance.css"

export function PerformancePage() {
  const { t } = useTranslation(["performance"]);

  return (
    <PageCard className="performance" header={t("performance:header")}>
        <InDevelopment />
    </PageCard>
  );
}