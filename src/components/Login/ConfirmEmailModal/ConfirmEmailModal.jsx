import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";

function ConfirmEmailModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation(["signin"]);

    function handleConfirmEmailClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmEmailClose}>
        <h1>{t("signin:text.signupRequest.header")}</h1>
        <img src={emailImg}/>
        <p>{t("signin:text.signupRequest.beforeEmail")}<span>{email}</span>{t("signin:text.signupRequest.afterEmail")}</p>
    </Modal>
}

export default ConfirmEmailModal;