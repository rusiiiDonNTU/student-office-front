import { useTranslation } from "react-i18next";
import Skeleton from "../../UI/Skeleton/Skeleton";

function ProfileEducation({ specialtyName, educationProgram, faculty, skeleton=false }) {
    const { t } = useTranslation("profile");

    if (skeleton) {
        return <div className="profile-section">
            <div className="profile-row">
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:specialtyName")}</span>
                    <Skeleton width="10rem"/>
                </div>
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:educationProgram")}</span>
                    <Skeleton width="9rem"/>
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:faculty")}</span>
                    <Skeleton width="40rem"/>
                </div>
            </div>
        </div>
    }
    else {
        return <div className="profile-section">
            <div className="profile-row">
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:specialtyName")}</span>
                    <span className="profile-element-value">{specialtyName}</span>
                </div>
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:educationProgram")}</span>
                    <span className="profile-element-value">{educationProgram}</span>
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-element">
                    <span className="profile-element-header">{t("profile:faculty")}</span>
                    <span className="profile-element-value">{faculty}</span>
                </div>
            </div>
        </div>
    }
}

export default ProfileEducation;