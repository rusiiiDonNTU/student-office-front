import { postSendRecoveryMail } from "../api/requests";

export async function sendRecoveryMail(formData) {
    const email = formData.get("email");

    return postSendRecoveryMail(email);
}