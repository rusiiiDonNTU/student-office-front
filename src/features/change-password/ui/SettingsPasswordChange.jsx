import { useTranslation } from "react-i18next";
import { Button, Input, ModalButtons, RequirementsList } from "@/shared/ui";
import { checkIfNonEmpty, validatePassword } from "@/shared/lib";
import { PASSWORD_RULES } from "@/entities/user";
import { useState } from "react";

export function SettingsPasswordChange({ className='', onClose }) {
    const { t } = useTranslation(["auth", "forgot"]);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    let isSubmitting = false;

    const validationErrors = validatePassword(newPassword)
    const areEqual = (newPassword === confirmNewPassword) && checkIfNonEmpty(newPassword);
    const invalid = Object.values(validationErrors).includes(true) || !areEqual || !checkIfNonEmpty(password);

    const requirementsInfo = PASSWORD_RULES.map(rule => {return {
        item: t(rule.locale),
        done: rule.test(validationErrors, areEqual)
    }})

    function handleCurrentPasswordChange(event) {
        const password = event.target.value;
        setPassword(password)
    }

    function handleNewPasswordChange(event) {
        const password = event.target.value;
        setNewPassword(password)
    }

    function handleConfirmNewPasswordChange(event) {
        const password = event.target.value
        setConfirmNewPassword(password)
    }

    return <div className={`change-form`}>
        <Input
            label={t("forgot:fields.currentPass")}
            id="password"
            type="password"
            placeholder="••••••••••••••••"x
            maxLength="16"
            onChange={handleCurrentPasswordChange}
            disabled={isSubmitting}
        />

        <hr/>

        <Input
            label={t("forgot:fields.newPass")}
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            maxLength="16"
            onChange={handleNewPasswordChange}
            disabled={isSubmitting}
        />
        <Input
            label={t("forgot:fields.confirmNewPass")}
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            maxLength="16"
            onChange={handleConfirmNewPasswordChange}
            disabled={isSubmitting}
        />

        <RequirementsList requirements={requirementsInfo}/>

        <ModalButtons>
            <Button onClick={onClose}>{t("dashboard:settings.close")}</Button>
            <Button isBlue={true} disabled={invalid || isSubmitting}>{t("forgot:buttons.change")}</Button>
        </ModalButtons>
    </div>
}