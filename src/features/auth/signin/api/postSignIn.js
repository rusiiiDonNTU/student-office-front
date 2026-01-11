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
            if (err.response.status === 401) {
                return {
                    errors: {
                        isWrong: true
                    },
                };
            }
            if (err.response.status === 403) {
                return {
                    notActivated: true,
                    email: requestBody.email
                };
            }
        }
        return {
            authError: true
        }
    }
}