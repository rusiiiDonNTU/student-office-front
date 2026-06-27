import { useTranslation } from "react-i18next";

import { useModal } from "../../hooks";
import { Modal, Button, ModalButtons } from "../../ui";
import errorImg from "/img/error.png";

export function ErrorModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("errors");

    function handleErrorClose() {
        handleClose();
        onClose();
    }
        
    return <Modal isOpen={isOpen} onClose={handleErrorClose}>
        <h1>{t("errors:errorOccured")}</h1>
        <img src={errorImg} className="modal-img"/>
        <p>{t("errors:failed")}</p>
        <ModalButtons>
            <Button onClick={handleErrorClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}