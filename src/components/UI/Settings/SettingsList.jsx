import { useTranslation } from "react-i18next";
import "./Settings.css"
import DashboardLanguages from "../../Dashboard/DashboardLanguages/DashboardLanguages";
import ChangePasswordOption from "../../Dashboard/DashboardSettings/ChangeOption/ChangeOption";
import ChangeOption from "../../Dashboard/DashboardSettings/ChangeOption/ChangeOption";
import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../../../util/http";
import Skeleton from "../Skeleton/Skeleton";

function SettingsList({ className='' }) {
    const { data: phone, isPending, isFetching, isError, error, isFetched, refetch } = useQuery({
        queryKey: ["profile"],
        queryFn: getStudent,
        select: (user) => user.phoneNumber
    });
    const { t } = useTranslation("dashboard");

    return <ul className={`settings-list ${className}`}>
        <li className="settings-element">
            <label htmlFor="langs">{t("dashboard:settings.language")}</label>
            <DashboardLanguages name="langs" />
        </li>
        <li className="settings-element">
            <label htmlFor="pass">{t("dashboard:settings.password")}</label>
            <ChangeOption name="pass" text={"••••••••••••••••"} />
        </li>
        <li className="settings-element">
            <label htmlFor="phone">{t("dashboard:settings.phone")}</label>
            {isPending ? <Skeleton width="100%" height="2.5rem"/> : <ChangeOption name="phone" text={phone} />}
        </li>
    </ul>
}

export default SettingsList;