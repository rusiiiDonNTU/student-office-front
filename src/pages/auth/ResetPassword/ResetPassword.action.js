import { sendNewPassword } from "@/features/auth";

export async function resetPasswordAction({ request }) {
    const formData = await request.formData();
    return sendNewPassword(formData);
}