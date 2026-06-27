import { api } from "@/shared/api"

export async function postSendRecoveryMail(email) {
    try {
        const response = await api.post("/auth/forgot-password", { email: email })
        return {
            success: true
        }
    }
    catch (err) {
        return {
            success: false
        }
    }
}

export async function getCheckResetToken(token) {
    try {
        const response = await api.get(`/auth/check-reset?token=${token}`)
        return true
    }
    catch (err) {
        if (err.response && err.response.status >= 500) 
            throw new Response({status: 500})
        
        return false
    }
}

export async function postResetPassword(password, token) {
    try {
        const response = await api.post("/auth/reset-password", { 
            newPassword: password, 
            token: token 
        })
        return {
            success: true
        }
    }
    catch (err) {
        return {
            success: false
        }
    }
}