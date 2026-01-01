import Modal from "../Modal";
import { useModal } from "../../../../hooks/useModal";
import InputRow from "../../InputRow/InputRow";
import Button from "../../Button/Button";
import ModalButtons from "../ModalButtons/ModalButtons";
import { useTranslation } from "react-i18next";
import errorImg from "/img/error.png";

function ErrorModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("errors");

    function handleErrorClose() {
        handleClose();
        onClose();
    }
        
    return <Modal isOpen={isOpen} onClose={handleErrorClose}>
        <h1>{t("errors:errorOccured")}</h1>
        <img src={errorImg}/>
        <p>{t("errors:failed")}</p>
        <ModalButtons>
            <Button onClick={handleErrorClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}

export default ErrorModal;