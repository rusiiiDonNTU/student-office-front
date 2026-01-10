import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useModal } from "../../../../shared/hooks";
import { Button, ModalButtons, Modal } from "../../../../shared/ui";
import googleImg from "/img/google.png";

export function GoogleErrorModal({email="", onClose = () => {}}) {
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