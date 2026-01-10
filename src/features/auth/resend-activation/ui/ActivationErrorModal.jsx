import Modal from "../../../../shared/ui/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../../shared/hooks/useModal";
import { useTranslation } from "react-i18next";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";
import Button from "../../../../shared/ui/Button/Button";

export function ActivationErrorModal({onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation(["signin"]);

    function handleActivationErrorClose() {
        handleClose();
        onClose();
    }
    
    return <Modal isOpen={isOpen} onClose={handleActivationErrorClose}>
        <h1>{t("signin:errors.activationFailed.header")}</h1>
        <img src={emailImg} className="modal-img"/>
        <p>{t("signin:errors.activationFailed.body")}</p>
        <ModalButtons>
            <Button onClick={handleActivationErrorClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}