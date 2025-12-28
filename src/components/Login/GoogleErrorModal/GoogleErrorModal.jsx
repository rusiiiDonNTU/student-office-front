import Modal from "../../UI/Modal/Modal";
import googleImg from "/img/google.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function GoogleErrorModal({email="", onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const navigate = useNavigate();
    const { t } = useTranslation("signin");

    function handleGoogleErrorClose() {
        handleClose();
        onClose();
    }

    function handleGoToSignup() {
        handleGoogleErrorClose();
        navigate("/register", {
            state: {
                "email": email
            }
        })
    }

    return <Modal isOpen={isOpen} onClose={handleGoogleErrorClose}
        isBlueButton={true}
        blueButtonText={t("signup:links.signup")}
        blueButtonAction={handleGoToSignup}
    >
        <h1>{t("signin:errors.google.header")}</h1>
        <img src={googleImg}/>
        <p>{t("signin:errors.google.body")}</p>
    </Modal>
}

export default GoogleErrorModal;