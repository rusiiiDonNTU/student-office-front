import { useTranslation } from "react-i18next"
import developmentImg from "/img/development.png";
import "./InDevelopment.css";

export function InDevelopment() {
    const { t } = useTranslation(["main"]);

    return <div className="in-development">
        <img className="in-development-img" src={developmentImg}/>
        <span className="in-development-text">{t("main:development")}</span>
    </div>
}