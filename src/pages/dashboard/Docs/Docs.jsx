import { useTranslation } from "react-i18next";
import { InDevelopment, PageCard } from "@/shared/ui";
import "./Docs.css"

export function DocsPage() {
  const { t } = useTranslation(["docs"]);

  return (
    <PageCard className="docs" header={t("docs:header")}>
        <InDevelopment />
    </PageCard>
  );
}