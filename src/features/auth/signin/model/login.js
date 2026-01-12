import { checkIfNonEmpty, validateEmail } from "@/shared/lib";
import { postSignin } from "../api/postSignIn";

export async function login(formData) {
    const buttonType = formData.get("button");

    if (buttonType === "google") {
        window.location.href = "https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api/auth/signin-google";
        return;
    }

    const requestBody = {
        email: formData.get("email"),
        password: formData.get("password"),
        rememberMe: formData.get("remember-me") === "on"
    };
    
    // Валідація (клієнт-сайд)
    const valids = {
        isEmailValid: validateEmail(requestBody.email),
        isEmailNonEmpty: checkIfNonEmpty(requestBody.email),
        // isPasswordValid:
        //   Object.values(validatePassword(requestBody.password)).includes(true) ? false : true,
        isPasswordNonEmpty: checkIfNonEmpty(requestBody.password),
    };

    if (Object.values(valids).includes(false)) {
        return {
            errors: valids
        }
    }

    // Відправка запиту на логін
    return postSignin(requestBody);
}