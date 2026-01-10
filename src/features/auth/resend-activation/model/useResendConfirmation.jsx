import { useMutation } from "@tanstack/react-query";
import { postResendConfirmation } from "../api/postResendConfirmation";

export function useResendConfirmation(email) {
    return useMutation({
        enabled: false,
        mutationKey: ["confirmation"],
        mutationFn: () => postResendConfirmation(email)
    });
}