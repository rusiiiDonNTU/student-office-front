export async function postSignup(requestBody) {
    try {
        const response = await api.post("/auth/signUp", requestBody);
        return { 
            signupSuccess: true 
        };
    }
    catch (err) {
        return {
            signupSuccess: false
        }
    }
}