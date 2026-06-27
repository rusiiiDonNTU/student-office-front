import { useTranslation } from "react-i18next";
import { Skeleton } from "@/shared/ui";
import { formatDate } from "@/shared/lib";

export function StudentEntryInfo({ user=null, skeleton=false }) {
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

    const fundingSource = user.fundingSource;
    const entryBasis = user.entryBasis;
    const entryDate = formatDate(user.entryDate);

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