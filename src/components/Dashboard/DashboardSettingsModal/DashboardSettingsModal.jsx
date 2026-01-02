import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";

import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";

import "./DashboardSettingsModal.css";
import SettingsList from "../../UI/Settings/SettingsList";

function DashboardSettingsModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("dashboard");

    function handleSettingsClose() {
        handleClose();
        onClose();
    }
        
    return <Modal isOpen={isOpen} onClose={handleSettingsClose}>
        <h1>{t("dashboard:settings.header")}</h1>
        <SettingsList className="settings-modal-list"/>
        <ModalButtons>
            <Button onClick={handleSettingsClose}>{t("dashboard:settings.close")}</Button>
        </ModalButtons>
    </Modal>
}

export default DashboardSettingsModal;