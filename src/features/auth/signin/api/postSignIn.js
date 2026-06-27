import { api } from "@/shared/api";

export async function postSignin(requestBody) {
    // Відправка на сервер
    try {
        const response = await api.post("/auth/signIn", requestBody);
        return {
            success: true
        }
    }
    catch (err) {
        // Якщо в помилці є відповідь сервера
        if (err.response) {         
            return {
                errors: {
                    isWrong: true
                }
            }
        }
        return {
            authError: true
        }
    }
}