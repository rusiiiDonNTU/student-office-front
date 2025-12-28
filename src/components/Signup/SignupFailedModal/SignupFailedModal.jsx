import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";

function SignupFailedModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation();

    function handleSignupFailedClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleSignupFailedClose}>
        <h1>Реєстрація не вдалась!</h1>
        <img src={emailImg}/>
        <div>
            <p>Можливі причини:</p>
        </div>
    </Modal>
}

export default SignupFailedModal;