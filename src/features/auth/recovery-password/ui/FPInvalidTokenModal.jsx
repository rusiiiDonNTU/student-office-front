import { useModal } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { Button, ModalButtons, Modal } from "@/shared/ui";
import errorImg from "/img/error.png";
import { useNavigate } from "react-router-dom";

export function FPInvalidTokenModal({ onClose = () => {}, resend = true }) {
  const [isOpen, setIsOpen, handleClose] = useModal();
  const navigate = useNavigate();
  const { t } = useTranslation(["forgot"]);

  function handleInvalidTokenClose() {
    handleClose();
    onClose();
  }

  function handleNewRequestPressed() {
    navigate("/forgot-password");
    handleInvalidTokenClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleInvalidTokenClose}>
      <h1>{t("forgot:modal.invalid.header")}</h1>
      <img src={errorImg} className="modal-img" />
      <p>{t("forgot:modal.invalid.body")}</p>
      <ModalButtons>
        <Button onClick={handleInvalidTokenClose}>ОК</Button>
        {resend && (
          <Button isBlue={true} onClick={handleNewRequestPressed}>
            {t("forgot:modal.invalid.button")}
          </Button>
        )}
      </ModalButtons>
    </Modal>
  );
}
