import defaultPfp from "/img/default-pfp-white.png";
import "./StudentPerson.css";
import { Skeleton } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { formatBirthDate } from "@/shared/lib";

export function StudentPerson({ user=null, skeleton=false }) {
    const { t, i18n } = useTranslation(["profile"]);

    if (skeleton) {
        return <div className="profile-person">
            <div className="profile-person-picture">
                <Skeleton height="6rem" width="6rem"/>
            </div>
            <div className="profile-person-info">
                <span className="profile-person-name">
                    <Skeleton height="1rem" width="10rem"/>
                </span>
                <span className="profile-person-age">
                    <Skeleton height="1rem" width="6rem"/>
                </span>
            </div>
        </div>
    }

    const words = {
        one: t("profile:years.one"),
        few: t("profile:years.few"),
        many: t("profile:years.many"),
        other: t("profile:years.other")
    }

    const pib = user.lastName + " " + user.firstName + " " + user.middleName;
    const age = formatBirthDate(user.birthDate, words, i18n.language);
    const pfp = null;

    return <div className="profile-person">
        <div className="profile-person-picture">
            <img src={pfp === null ? defaultPfp : pfp}/>
        </div>
        <div className="profile-person-info">
            <span className="profile-person-name">{pib}</span>
            <span className="profile-person-age">{age}</span>
        </div>
    </div>
}