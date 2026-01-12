import { InDevelopment, PageCard } from "@/shared/ui";
import "./Performance.css"
import { useTranslation } from "react-i18next";

export function PerformancePage() {
  const { t } = useTranslation(["performance"]);

  return (
    <PageCard className="performance" header={t("performance:header")}>
        <InDevelopment />
    </PageCard>
  );
}