import { useTranslation } from "react-i18next";
import { useModal } from "../../hooks/useModal";
import { Modal, ModalButtons, Button } from "@/shared/ui";
import errorImg from "/img/error.png";

export function RefreshModal({ onClose = () => {}, refetch }) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const { t } = useTranslation("errors");

    function handleRefreshClose() {
        onClose();
        handleClose();
    }

    function handleRefresh() {
        refetch();
        handleRefreshClose();
    }

    return <Modal isOpen={isOpen} onClose={handleRefreshClose}>
        <h1>{t("errors:fetching.header")}</h1>
        <img src={errorImg} className="modal-img"/>
        <p>{t("errors:fetching.body")}</p>
        <ModalButtons>
            <Button isBlue={true} onClick={handleRefresh}>{t("errors:fetching.again")}</Button>
        </ModalButtons>
    </Modal>
}