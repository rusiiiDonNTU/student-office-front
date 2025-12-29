import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";
import { sendActivationList } from "../../../util/auth";
import { useState } from "react";

function NotActivatedErrorModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState({
        isSent: false,
        code: 0
    });
    const { t } = useTranslation(["signin", "errors"]);

    function handleConfirmErrorClose() {
        handleClose();
        onClose();
    }

    async function handleSendAgain() {
        const send = async () => {
             const response = await sendActivationList(email);
             setIsLoading(false);
             setResult(() => { return {
                isSent: true,
                code: response
            }})
        }

        setIsLoading(true);
        send();
    }

    let header = t("signin:errors.notActivated.header")
    let body = <p>{t("signin:errors.notActivated.body")}<span>{email}</span></p>

    if (result.code === 200) {
        header = t("signin:text.activationRequest.header")
        body = <p>{t("signin:text.activationRequest.beforeEmail")}<span>{email}</span>{t("signin:text.activationRequest.afterEmail")}</p>
    }
    else if (result.code === 429) {
        header = t("signin:errors.tooManyTries.header")
        body = <p>{t("signin:errors.tooManyTries.body")}</p>
    }
    else if (result.code === 500) {
        header = t("errors:errorOccured")
        body = <p>{t("errors:failed")}</p>
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmErrorClose}
        isBlueButton={!result.isSent}
        blueButtonText={t("signin:buttons.resend")}
        blueButtonAction={handleSendAgain}
        isLoading={isLoading}>
        <h1>{header}</h1>
        <img src={emailImg}/>
        {body}
    </Modal>
}

export default NotActivatedErrorModal;