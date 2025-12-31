import { useTranslation } from "react-i18next";
import "./ProfileStatus.css";
import Skeleton from "../../UI/Skeleton/Skeleton";

function ProfileStatus({ group, course, specialtyCode, skeleton=false }) {
    const { t } = useTranslation("profile");

    if (skeleton) {
        return <section className="profile-status">
            <div className="profile-row">
                <div className="profile-element-centered">
                    <span className="profile-element-value">
                        <Skeleton width="4rem"/>
                    </span>
                    <span className="profile-element-header">{t("profile:group")}</span>
                </div>
                <div className="profile-element-centered">
                    <span className="profile-element-value">
                        <Skeleton width="4rem"/>
                    </span>
                    <span className="profile-element-header">{t("profile:specialtyCode")}</span>
                </div>
                <div className="profile-element-centered">
                    <span className="profile-element-value">
                        <Skeleton width="4rem"/>
                    </span>
                    <span className="profile-element-header">{t("profile:course")}</span>
                </div>
            </div>
        </section>
    }
    else {
        return <section className="profile-status">
            <div className="profile-row">
                <div className="profile-element-centered">
                    <span className="profile-element-value">{group}</span>
                    <span className="profile-element-header">{t("profile:group")}</span>
                </div>
                <div className="profile-element-centered">
                    <span className="profile-element-value">{specialtyCode}</span>
                    <span className="profile-element-header">{t("profile:specialtyCode")}</span>
                </div>
                <div className="profile-element-centered">
                    <span className="profile-element-value">{course}</span>
                    <span className="profile-element-header">{t("profile:course")}</span>
                </div>
            </div>
        </section>
    }
}

export default ProfileStatus;