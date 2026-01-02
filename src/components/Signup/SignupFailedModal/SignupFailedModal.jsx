import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";
import Button from "../../UI/Button/Button";

function SignupFailedModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("signup");

    function handleSignupFailedClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleSignupFailedClose}>
        <h1>{t("signup:errors.signupFailed.header")}</h1>
        <img src={emailImg} className="modal-img"/>
        <div>
            <p>{t("signup:errors.signupFailed.reasons")}</p>
            <div className="modal-list">
                <ul>
                    <li>{t("signup:errors.signupFailed.alreadyExist")}</li>
                    <li>{t("signup:errors.signupFailed.nonExist")}</li>
                    <li>{t("signup:errors.signupFailed.etc")}</li>
                </ul>
            </div>
        </div>
        <ModalButtons>
            <Button onClick={onClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}

export default SignupFailedModal;