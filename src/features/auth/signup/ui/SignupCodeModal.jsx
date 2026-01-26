import { useTranslation } from "react-i18next";
import { useModal } from "@/shared/hooks";
import { Modal, ModalButtons, Button, Input, HelpText, ErrorText, InputRow, OtpBlock, LinkButton } from "@/shared/ui";
import { useResendConfirmation } from "@/features/auth/resend-activation";
import { useConfirm } from "../model/useConfirm";
import codeImg from "/img/code.png";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function SignupCodeModal({email, onClose = () => {}}) {
    const [isOpen, setIsOpen, handleClose] = useModal();
    const [otp, setOtp] = useState("");
    const [secondsLeft, setSecondsLeft] = useState(0);
    const {mutate: resend, isPending: isResendPending, isSuccess: isResendSuccess, isError: isResendError} = useResendConfirmation(email, setSecondsLeft);
    const {mutate: confirm, isPending: isConfirmPending, isSuccess: isConfirmSuccess, isError: isConfirmError} = useConfirm();

    useEffect(() => {
        if (secondsLeft === 0) return;

        const interval = setInterval(
            () => setSecondsLeft(s => Math.max(s - 1, 0))
        , 1000);

        return () => clearInterval(interval);
    }, [secondsLeft]);

    const { t } = useTranslation("signup");

    const isPending = isResendPending || isConfirmPending; 
    const isError = isResendError || isConfirmError;

    let errMsg = "";
    if (isResendError) {
        errMsg = t("signup:errors.resend");
    }
    if (isConfirmError) {
        errMsg = t("signup:errors.confirm");
    }

    function handleCodeChange(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
        const newValue = e.target.value;
        if (newValue !== otp) setOtp(newValue);
    }
    
    if (isConfirmSuccess)
        return <Navigate to="/login" replace={true} state={{signupSuccess: true}}/>

    return <Modal isOpen={isOpen} isLoading={isPending} cancelling={false} style={{width: "33rem"}}> 
        <img src={codeImg} className="modal-img"/>
        <HelpText>
            {t("signup:confirm.body")}
        </HelpText>
        <div className="w-[100%] max-w-[22rem]">
            <Input type="tel"
                placeholder={t("signup:fields.otp")}
                inputMode="numeric"
                disabled={isPending}
                autoComplete="one-time-code"
                pattern="[0-9]*"
                onChange={handleCodeChange}
                isError={isError}
                style={{textAlign: "center"}}/>
        </div>
        {/* {isError && <ErrorText>
            {errMsg}
        </ErrorText>} */}
        <LinkButton secondsLeft={secondsLeft} onClick={resend} disabled={isPending}>{t("signup:confirm.resend")}</LinkButton>
        <ModalButtons>
            <Button onClick={() => confirm({ email, otp })} disabled={isPending || !otp} isBlue={true}>{t("signup:confirm.activate")}</Button>
        </ModalButtons>
    </Modal>
}