import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";

function ConfirmEmailModal({email, onClose = () => {}, modalType="signup"}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation(["signin"]);

    let modalHeader = t("signin:text.signupRequest.header");
    let modalTextBeforeEmail = t("signin:text.signupRequest.beforeEmail");
    let modalTextAfterEmail = t("signin:text.signupRequest.beforeEmail");
    
    if (modalType === "signin") {
        modalHeader = t("signin:errors.notActivated.header");
        modalTextBeforeEmail = t("signin:errors.notActivated.body");
        modalTextAfterEmail = "";
    }

    function handleConfirmEmailClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmEmailClose}>
        <h1>{modalHeader}</h1>
        <img src={emailImg}/>
        <p>{modalTextBeforeEmail}<span>{email}</span>{modalTextAfterEmail}</p>
    </Modal>
}

export default ConfirmEmailModal;