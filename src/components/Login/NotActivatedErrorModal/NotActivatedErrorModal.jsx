import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";
import { sendActivationList } from "../../../util/http";
import { useState } from "react";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";
import Button from "../../UI/Button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";

function NotActivatedErrorModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const {mutate, isPending, isSuccess, isError, error} = useMutation({
        enabled: false,
        mutationKey: ["activation"],
        mutationFn: () => sendActivationList(email)
    });
    const { t } = useTranslation(["signin", "errors"]);

    function handleConfirmErrorClose() {
        handleClose();
        onClose();
    }

    let header = t("signin:errors.notActivated.header")
    let body = <p>{t("signin:errors.notActivated.body")}<span>{email}</span></p>

    if (isSuccess) {
        header = t("signin:text.activationRequest.header")
        body = <p>{t("signin:text.activationRequest.beforeEmail")}<span>{email}</span>{t("signin:text.activationRequest.afterEmail")}</p>
    }
    else if (isError) {
        if (error.code === 429) {
            header = t("signin:errors.tooManyTries.header")
            body = <p>{t("signin:errors.tooManyTries.body")}</p>
        }
        else {
            header = t("errors:errorOccured")
            body = <p>{t("errors:failed")}</p>
        }
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmErrorClose} isLoading={isPending}>
        <h1>{header}</h1>
        <img src={emailImg} className="modal-img"/>
        {body}
        <ModalButtons>
            <Button onClick={handleConfirmErrorClose} disabled={isPending}>ОК</Button>
            {(!isSuccess && !isError) && <Button isBlue={true} onClick={mutate} disabled={isPending}>{t("signin:buttons.resend")}</Button>}
        </ModalButtons>
    </Modal>
}

export default NotActivatedErrorModal;