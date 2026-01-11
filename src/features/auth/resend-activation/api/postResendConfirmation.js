import { api } from "@/shared/api"

export async function postResendConfirmation(email) {
  try {
    const response = await api.post("/auth/resend-confirmation", {email: email})
    return 200
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 429) throw {code: 429}
    }
    throw {code: 500}
  }
}