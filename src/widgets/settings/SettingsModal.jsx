
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { Modal, ModalButtons, Button } from "@/shared/ui";
import { SettingsPasswordChange } from "@/features/change-password";
import { SettingsList } from "./SettingsList";
import { useModal } from "@/shared/hooks";

import "./Settings.css";

export function SettingsModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const [activeParam, setActiveParam] = useState("main")
    const { t } = useTranslation("dashboard");

    function handleSettingsClose() {
        handleClose();
        onClose();
    }

    function handlePasswordClick() {
        setActiveParam("password");
    }
    
    function handleBackClick() {
        setActiveParam("main");
    }

    let content = <>
        <SettingsList className="settings-modal-list" mode="modal" onPasswordClick={handlePasswordClick}/>
        <ModalButtons>
            <Button onClick={(handleSettingsClose)}>{t("dashboard:settings.close")}</Button>
        </ModalButtons>
    </>;

    if (activeParam === "password") {
        content = <SettingsPasswordChange onClose={handleSettingsClose} className="settings-modal-list"/>;
    }

    return <Modal isOpen={isOpen} onClose={handleSettingsClose} back={true} onBack={handleBackClick}>
        <h1>{t("dashboard:settings.header")}</h1>
        {content}
    </Modal>
}