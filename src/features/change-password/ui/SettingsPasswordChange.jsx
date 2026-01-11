import { useTranslation } from "react-i18next";
import { Button, Input, ModalButtons } from "@/shared/ui";

export function SettingsPasswordChange({ className='', onClose }) {
    const { t } = useTranslation("forgot");

    let isSubmitting = false;

    return <div className={`change-form`}>
        <Input
            label={t("forgot:fields.currentPass")}
            id="password"
            type="password"
            placeholder="••••••••••••••••"x
            maxLength="16"
            disabled={isSubmitting}
        />

        <hr/>

        <Input
            label={t("forgot:fields.newPass")}
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            maxLength="16"
            disabled={isSubmitting}
        />
        <Input
            label={t("forgot:fields.confirmNewPass")}
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            maxLength="16"
            disabled={isSubmitting}
        />

        <ModalButtons>
            <Button onClick={onClose}>{t("dashboard:settings.close")}</Button>
            <Button isBlue={true} disabled={true}>{t("forgot:buttons.change")}</Button>
        </ModalButtons>
    </div>
}