import { useTranslation } from "react-i18next";

function ProfileEntryInfo({ entryBasis, entryDate, fundingSource }) {
    const { t } = useTranslation("profile");

    return <>
        <div className="profile-row">
            <div className="profile-element">
                <span className="profile-element-header">{t("profile:entryDate")}</span>
                <span className="profile-element-value">{entryDate}</span>
            </div>
            <div className="profile-element">
                <span className="profile-element-header">{t("profile:entryBasis")}</span>
                <span className="profile-element-value">{entryBasis}</span>
            </div>
        </div>
        <div className="profile-row">
            <div className="profile-element">
                <span className="profile-element-header">{t("profile:fundingSource")}</span>
                <span className="profile-element-value">{fundingSource}</span>
            </div>
        </div>
    </>
}

export default ProfileEntryInfo;