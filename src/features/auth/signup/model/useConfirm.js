import { useMutation } from "@tanstack/react-query";
import { postConfirm } from "../api/postConfirm";

export function useConfirm() {
    return useMutation({
        enabled: false,
        mutationKey: ["confirmation"],
        mutationFn: ({ email, otp }) => postConfirm(email, otp)
    });
}