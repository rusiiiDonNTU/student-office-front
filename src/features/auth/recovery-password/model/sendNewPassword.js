import { postResetPassword } from "../api/requests";

export async function sendNewPassword(formData) {
    const password = formData.get("new-password");
    const token = formData.get("token");

    return postResetPassword(password, token);
}