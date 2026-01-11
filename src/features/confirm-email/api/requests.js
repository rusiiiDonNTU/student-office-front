import { api } from "@/shared/api"

export async function postActivateEmail(token) {
    try {
        const response = await api.post("/auth/confirm-email", {token: token})

        return {
            activationSuccess: true
        }
    } catch(err) {
       return {
        activationSuccess: false
       }
    }
}