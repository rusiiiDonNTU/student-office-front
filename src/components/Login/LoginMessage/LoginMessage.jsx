import "./LoginMessage.css"

import { useTranslation } from "react-i18next";

function LoginMessage({ h="", b="" }) {
    const { t } = useTranslation("auth");

    return <div className="login-message">
        <span className="login-message-header">{t("text.signupSuccess.header")}</span>
        <span className="login-message-body">{t("text.signupSuccess.login")}</span>
    </div>
}

export default LoginMessage;