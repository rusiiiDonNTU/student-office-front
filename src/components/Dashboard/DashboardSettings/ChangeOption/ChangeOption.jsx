import "./ChangeOption.css"
import pencilImg from "/icons/settings/pencil.png";

function ChangeOption({text}) {
    return <div className="change-pass-option">
        <div name="pass" className="change-pass-field">
            <span>{text}</span>
        </div>
        <div className="change-pass-button">
            <img src={pencilImg}/>
        </div>
    </div>
}

export default ChangeOption