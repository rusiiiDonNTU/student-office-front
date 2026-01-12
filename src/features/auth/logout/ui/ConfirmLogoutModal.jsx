import { useModal } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { Button, ModalButtons, Modal } from "@/shared/ui";
import { useNavigate, useNavigation } from "react-router-dom";
import doorImg from "/img/door.png";

export function ConfirmLogoutModal({onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const { t } = useTranslation(["dashboard"]);

    const isLoading = navigation.state === "loading";

    function handleConfirmLogoutClose() {
        handleClose();
        onClose();
    }

    function handleConfirmLogout() {
        navigate('/logout');
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmLogoutClose} isLoading={isLoading}>
        <h1>{t("dashboard:logout.header")}</h1>
        <img src={doorImg} className="modal-img"/>
        <span>{t("dashboard:logout.question")}</span>
        <ModalButtons>
           <Button onClick={handleConfirmLogoutClose} disabled={isLoading}>{t("dashboard:logout.no")}</Button>
           <Button isBlue={true} onClick={handleConfirmLogout} disabled={isLoading}>{t("dashboard:logout.yes")}</Button>
        </ModalButtons>
    </Modal>
}