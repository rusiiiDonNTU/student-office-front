import { useModal } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { Button, ModalButtons, Modal } from "@/shared/ui";
import emailWithKeyImg from "/img/email-with-key.png";

export function FPMailSentModal({onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation(["forgot"]);

    function handleMailSentClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleMailSentClose}>
        <h1>{t("forgot:modal.sent.header")}</h1>
        <img src={emailWithKeyImg} className="modal-img"/>
        <p>{t("forgot:modal.sent.body")}</p>
        <ModalButtons>
           <Button onClick={handleMailSentClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}