import { api } from "@/shared/api";

export async function postConfirm(email, code) {
    try {
        const response = await api.post("/auth/confirm-email", {email: email, code: code});
    }
    catch (err) {
        if (err.response.status === 400) {
            throw {
                msg: "confirm"
            }
        }
        else {
            throw {
                msg: "unknown"
            }
        }
    }
}