import { useTranslation } from "react-i18next";
import { useModal } from "@/shared/hooks";
import { Modal, ModalButtons, Button } from "@/shared/ui";
import errorImg from "/img/error.png";

export function SignupFailedModal({onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("signup");

    function handleSignupFailedClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleSignupFailedClose}>
        <h1>{t("signup:errors.signupFailed.header")}</h1>
        <img src={errorImg} className="modal-img"/>
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