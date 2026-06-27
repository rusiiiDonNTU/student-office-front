import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { PageCard } from "@/shared/ui";
import { StudentProfileCard } from "@/widgets";
import { FPInvalidTokenModal, FPLogoutRequestModal } from "@/features/auth";
import { useState } from "react";
import { useEffect } from "react";
import "./Profile.css";

export function ProfilePage() {
  const { t } = useTranslation("profile");
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetToken, setResetToken] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [showBadTokenModal, setShowBadTokenModal] = useState(false);

  useEffect(() => {
    const reset = searchParams.get("reset");
    const token = searchParams.get("token");

    if (reset === "true") {
      if (token !== "false") {
        setShowResetModal(true);
        setResetToken(token);
        searchParams.delete("token");
      } else setShowBadTokenModal(true);

      searchParams.delete("reset");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  function handleLogoutRequestClose() {
    setShowResetModal(false);
    setResetToken("");
  }

  function handleBadTokenClose() {
    setShowBadTokenModal(false);
  }

  return (
    <>
      {showResetModal && (
        <FPLogoutRequestModal
          token={resetToken}
          onClose={handleLogoutRequestClose}
        />
      )}
      {showBadTokenModal && (
        <FPInvalidTokenModal onClose={handleBadTokenClose} resend={false} />
      )}
      <PageCard className="profile" header={t("profile:header")}>
        <StudentProfileCard />
      </PageCard>
    </>
  );
}
