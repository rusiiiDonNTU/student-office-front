import { useTranslation } from "react-i18next";
import Skeleton from "../../UI/Skeleton/Skeleton";

function ProfileEntryInfo({ entryBasis, entryDate, fundingSource, skeleton=false }) {
    const { t } = useTranslation("profile");

    if (skeleton) {
        return <>
            <div className="profile-row">
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:entryDate")}</span>
                    <span className="profile-element-value">
                        <Skeleton width="8rem"/>
                    </span>
                </div>
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:entryBasis")}</span>
                    <span className="profile-element-value">
                        <Skeleton width="14rem" />
                    </span>
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:fundingSource")}</span>
                    <span className="profile-element-value">
                        <Skeleton />
                    </span>
                </div>
            </div>
        </>
    }
    else {
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
}

export default ProfileEntryInfo;