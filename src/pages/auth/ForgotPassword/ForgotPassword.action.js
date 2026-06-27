import { sendRecoveryMail } from "@/features/auth";

export async function forgotPasswordAction({ request }) {
    const formData = await request.formData();
    return sendRecoveryMail(formData);
}