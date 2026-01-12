import { useTranslation } from "react-i18next";
import { Skeleton } from "@/shared/ui";
import "./StudentTerms.css";

export function StudentTerms({ user=null, skeleton=false}) {
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

    const educationLevel = user.educationLevel;
    const studyForm = user.studyForm;

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