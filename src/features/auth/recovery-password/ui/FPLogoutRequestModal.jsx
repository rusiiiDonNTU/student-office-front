import { useModal } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { Button, ModalButtons, Modal } from "@/shared/ui";
import doorImg from "/img/door.png";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/logout";

export function FPLogoutRequestModal({ onClose = () => {}, token = "" }) {
  const [isOpen, setIsOpen, handleClose] = useModal();
  const navigate = useNavigate();
  const { t } = useTranslation(["forgot"]);

  function handleLogoutRequestClose() {
    handleClose();
    onClose();
  }

  function handleLogout() {
    handleLogoutRequestClose();
    navigate(`/logout?redirect=reset-password&token=${token}`);
  }

  return (
    <Modal isOpen={isOpen} onClose={handleLogoutRequestClose}>
      <h1>{t("forgot:modal.logout.header")}</h1>
      <img src={doorImg} className="modal-img" />
      <p>{t("forgot:modal.logout.body")}</p>
      <ModalButtons>
        <Button onClick={handleLogoutRequestClose}>
          {t("forgot:modal.logout.later")}
        </Button>
        <Button isBlue={true} onClick={handleLogout}>
          {t("forgot:modal.logout.ok")}
        </Button>
      </ModalButtons>
    </Modal>
  );
}
