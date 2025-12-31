import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";

import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";
import DashboardLanguages from "../DashboardLanguages/DashboardLanguages";

import "./DashboardSettingsModal.css";

function DashboardSettingsModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("dashboard");

    function handleSettingsClose() {
        handleClose();
        onClose();
    }
        
    return <Modal isOpen={isOpen} onClose={handleSettingsClose}>
        <h1>{t("dashboard:settings.header")}</h1>
        <ul className="settings-list">
            <li className="settings-element">
                <label htmlFor="langs">{t("dashboard:settings.language")}</label>
                <DashboardLanguages name="langs" />
            </li>
            <li><hr/></li>
        </ul>
        <ModalButtons>
            <Button onClick={handleSettingsClose}>{t("dashboard:settings.close")}</Button>
        </ModalButtons>
    </Modal>
}

export default DashboardSettingsModal;