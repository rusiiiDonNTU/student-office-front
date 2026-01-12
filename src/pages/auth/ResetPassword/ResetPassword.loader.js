import { getCheckResetToken } from "@/features/auth";

export async function resetPasswordLoader({ request }) {
    // Парсінг URL
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    // Перевірка токену
    if (token !== null) {
        const res = await getCheckResetToken(token);

        if (res) {
            console.log("test")
            return {
                token,
                valid: true
            }
        }
    }
    
    return {
        token,
        valid: false
    } 
}