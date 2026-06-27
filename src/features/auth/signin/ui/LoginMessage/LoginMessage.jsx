import "./LoginMessage.css"

import { useTranslation } from "react-i18next";

export function LoginMessage({ h="", b="" }) {
    const { t } = useTranslation("auth");

    return <div className="login-message">
        <span className="login-message-header">{h}</span>
        <span className="login-message-body">{b}</span>
    </div>
}