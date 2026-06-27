import { api } from "@/shared/api";

export async function postSignup(requestBody) {
    try {
        const response = await api.post("/auth/signUp", requestBody);
        return { 
            signupSent: true,
            email: requestBody.email
        };
    }
    catch (err) {
        return {
            signupSuccess: false
        }
    }
}