import { useTranslation } from "react-i18next";
import "./ProfileTerms.css";

function ProfileTerms({ studyForm, educationLevel }) {
    const { t } = useTranslation("profile");

    return <section className="profile-row">
        <div className="profile-element">
            <span className="profile-element-header">{t("profile:educationLevel")}</span>
            <span className="profile-element-value">{educationLevel}</span>
        </div>
        <div className="profile-element">
            <span className="profile-element-header">{t("profile:studyForm")}</span>
            <span className="profile-element-value">{studyForm}</span>
        </div>
    </section>
}

export default ProfileTerms;