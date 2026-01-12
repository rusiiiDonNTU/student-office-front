import { useModal } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { Button, ModalButtons, Modal } from "@/shared/ui";
import newPasswordImg from "/img/new-password.png";

export function FPChangedModal({onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation(["forgot"]);

    function handleChangedClose() {
        handleClose();
        onClose();
    }

    return <Modal isOpen={isOpen} onClose={handleChangedClose}>
        <h1>{t("forgot:modal.changed.header")}</h1>
        <img src={newPasswordImg} className="modal-img"/>
        <ModalButtons>
           <Button onClick={handleChangedClose}>ОК</Button>
        </ModalButtons>
    </Modal>
}