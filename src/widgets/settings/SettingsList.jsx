import { useTranslation } from "react-i18next";

import { SettingsLanguageChanger } from "@/features/change-language";
import { Skeleton, SettingsField } from "@/shared/ui";
import { useStudent } from "@/entities/student";

import "./Settings.css"

export function SettingsList({ className='', onPasswordClick, onPhoneClick}) {
    // const { data: phone, isPending, isFetching, isError, error, isFetched, refetch } = useStudent({
    //     select: (user) => user.phoneNumber
    // });
    const { t } = useTranslation("dashboard");

    return <ul className={`settings-list ${className}`}>
        <li className="settings-element">
            <label htmlFor="langs">{t("dashboard:settings.language")}</label>
            <SettingsLanguageChanger name="langs" />
        </li>
        {/* <li className="settings-element">
            <label htmlFor="pass">{t("dashboard:settings.password")}</label>
            <SettingsField name="pass" text={"••••••••••••••••"} onClick={onPasswordClick}/>
        </li>
        <li className="settings-element">
            <label htmlFor="phone">{t("dashboard:settings.phone")}</label>
            {isPending ? <Skeleton width="100%" height="2.5rem"/> : <SettingsField name="phone" text={phone} onClick={onPhoneClick} />}
        </li> */}
    </ul>
}