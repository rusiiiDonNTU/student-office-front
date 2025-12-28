import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";

function ActivationErrorModal({email, onClose = () => {}, modalType="signup"}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation(["signin"]);

    function handleActivationErrorClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleActivationErrorClose}>
        <h1>{t("signin:errors.activationFailed.header")}</h1>
        <img src={emailImg}/>
        <p>{t("signin:errors.activationFailed.body")}</p>
    </Modal>
}

export default ActivationErrorModal;