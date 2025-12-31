import { useTranslation } from "react-i18next";

function ProfileEducation({ specialtyName, educationProgram, faculty }) {
    const { t } = useTranslation("profile");

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

export default ProfileEducation;