import Modal from "../../UI/Modal/Modal";
import emailImg from "/img/email.png";
import { useModal } from "../../../hooks/useModal";
import { useTranslation } from "react-i18next";
import { sendActivationList } from "../../../util/http";
import { useState } from "react";
import ModalButtons from "../../UI/Modal/ModalButtons/ModalButtons";
import Button from "../../UI/Button/Button";
import { useQuery } from "@tanstack/react-query";

function NotActivatedErrorModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const {data, isPending, isError, error, isFetched, refetch} = useQuery({
        enabled: false,
        queryKey: ["activation"],
        queryFn: sendActivationList
    });
    const { t } = useTranslation(["signin", "errors"]);

    function handleConfirmErrorClose() {
        handleClose();
        onClose();
    }

    let header = t("signin:errors.notActivated.header")
    let body = <p>{t("signin:errors.notActivated.body")}<span>{email}</span></p>

    if (!isError && data === 200) {
        header = t("signin:text.activationRequest.header")
        body = <p>{t("signin:text.activationRequest.beforeEmail")}<span>{email}</span>{t("signin:text.activationRequest.afterEmail")}</p>
    }
    else {
        if (isError && error.code === 429) {
            header = t("signin:errors.tooManyTries.header")
            body = <p>{t("signin:errors.tooManyTries.body")}</p>
        }
        else {
            header = t("errors:errorOccured")
            body = <p>{t("errors:failed")}</p>
        }
    }

    return <Modal isOpen={isOpen} onClose={handleConfirmErrorClose} isLoading={isLoading}>
        <h1>{header}</h1>
        <img src={emailImg}/>
        {body}
        <ModalButtons>
            <Button onClick={handleConfirmErrorClose} disabled={isPending}>ОК</Button>
            {!isFetched && <Button isBlue={true} onClick={refetch} disabled={isPending}>{t("signin:buttons.resend")}</Button>}
        </ModalButtons>
    </Modal>
}

export default NotActivatedErrorModal;