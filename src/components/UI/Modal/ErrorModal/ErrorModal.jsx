import Modal from "../Modal";
import { useModal } from "../../../../hooks/useModal";

function ErrorModal({ onClose = () => {} }) {
    const [isOpen, setIsOpen, handleClose] = useModal();

    function handleErrorClose() {
        handleClose();
        onClose();
    }
        
    return <Modal isOpen={isOpen} onClose={handleErrorClose}>
        <h1>Виникла помилка!</h1>
        <p>Не вдалось виконати дію</p>
    </Modal>
}

export default ErrorModal;