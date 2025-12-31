import Modal from "../Modal";
import { useModal } from "../../../../hooks/useModal";
import InputRow from "../../InputRow/InputRow";
import Button from "../../Button/Button";
import ModalButtons from "../ModalButtons/ModalButtons";

function ErrorModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();

    function handleErrorClose() {
        handleClose();
        onClose();
    }
        
    return <Modal isOpen={isOpen} onClose={handleErrorClose}>
        <h1>Виникла помилка!</h1>
        <p>Не вдалось виконати дію</p>
        <ModalButtons>
            <Button onClick={handleErrorClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}

export default ErrorModal;