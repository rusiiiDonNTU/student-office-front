import { useTranslation } from "react-i18next";
import { PageCard } from "@/shared/ui";
import { StudentProfileCard } from "@/widgets";
import "./Profile.css";

export function ProfilePage() {
  const { t } = useTranslation("profile");

  return (
    <PageCard className="profile" header={t("profile:header")}>
        <StudentProfileCard />
    </PageCard>
  );
}