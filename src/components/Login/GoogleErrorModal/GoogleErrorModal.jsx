import Modal from "../../UI/Modal/Modal";
import googleImg from "/img/google.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";
import Button from "../../UI/Button/Button";

function GoogleErrorModal({email="", onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const navigate = useNavigate();
    const { t } = useTranslation("signin");

    function handleGoogleErrorClose() {
        handleClose();
        onClose();
    }

    function handleGoToSignup() {
        navigate("/register", {
            state: {
                "email": email
            }
        });
        handleGoogleErrorClose();
    }

    return <Modal isOpen={isOpen} onClose={handleGoogleErrorClose}>
        <h1>{t("signin:errors.google.header")}</h1>
        <img src={googleImg} className="modal-img"/>
        <p>{t("signin:errors.google.body")}</p>
        <ModalButtons>
            <Button onClick={handleGoogleErrorClose}>ОК</Button>
            <Button isBlue={true} onClick={handleGoToSignup}>{t("signin:links.signup")}</Button>
        </ModalButtons>
    </Modal>
}

export default GoogleErrorModal;