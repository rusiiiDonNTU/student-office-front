import { useMutation } from "@tanstack/react-query";
import { postResendConfirmation } from "../api/postResendConfirmation";

export function useResendConfirmation(email, setSecondsLeft) {
    return useMutation({
        enabled: false,
        mutationKey: ["confirmation"],
        mutationFn: () => postResendConfirmation(email),
        onSuccess: () => setSecondsLeft(120)
    });
}