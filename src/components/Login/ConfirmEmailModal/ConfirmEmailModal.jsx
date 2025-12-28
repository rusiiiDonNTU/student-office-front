import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";

function ConfirmEmailModal({email, onClose = () => {}, modalType="signup"}) {
    const [isOpen, setIsOpen, handleClose] = useModal();

    console.log(email)
    let modalHeader = <h1>Запит на реєстрацію відправлено!</h1>;
    let modalBody = <p>Очікуйте повідомлення на пошту <span>{email}</span> з подальшими інструкціями</p>;
    
    if (modalType === "signin") {
        modalHeader = <h1>Пошта не підтверджена!</h1>
        modalBody = <p>Перевірте, чи прийшло посилання з активацією на пошту <span>{email}</span>.</p>
    }

    function handleConfirmEmailClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmEmailClose}>
        {modalHeader}
        <img src={emailImg}/>
        {modalBody}
    </Modal>
}

export default ConfirmEmailModal;