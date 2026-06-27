import "./SettingsField.css"
import pencilImg from "/icons/settings/pencil.png";
import pencilHoverImg from "/icons/settings/pencil-hover.png";

export function SettingsField({text, onClick}) {
    return <div className="change-pass-option">
        <div name="pass" className="change-pass-field">
            <span>{text}</span>
        </div>
        <div className="change-pass-button" onClick={onClick}>
            <img src={pencilImg} id="pencil"/>
            <img src={pencilHoverImg} id="pencil-hover"/>
        </div>
    </div>
}