import { useTranslation } from "react-i18next";
import "./ProfileTerms.css";
import Skeleton from "../../UI/Skeleton/Skeleton";

function ProfileTerms({ studyForm, educationLevel, skeleton=false}) {
    const { t } = useTranslation("profile");
    
    if (skeleton) {
        return <section className="profile-row">
            <div className="profile-element">
                <span className="profile-element-header">{t("profile:educationLevel")}</span>
                <span className="profile-element-value">
                    <Skeleton/>
                </span>
            </div>
            <div className="profile-element">
                <span className="profile-element-header">{t("profile:studyForm")}</span>
                <span className="profile-element-value">
                    <Skeleton/>
                </span>
            </div>
        </section>
    }
    else {
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
}

export default ProfileTerms;