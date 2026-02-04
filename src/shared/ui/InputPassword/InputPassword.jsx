import { ErrorText } from "..";
import "../Input/Input.css";
import "./InputPassword.css";
import visibleImg from "/img/visible.png";
import hiddenImg from "/img/hidden.png";

export function InputPassword({ label, id, isError=false, errorMsg, maxLength=256, visible=false, setVisible=() => {}, disabled=false, ...props }) {
  function handleShowPassword() {
    setVisible(prev => !prev);
  }

  return (
    <div className={`input-group`}>
      <div className="input-label-row">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
      </div>

      <div className="input-field-block">
        <input className={`input-password input-field${isError ? " error" : ""}`} 
          maxLength={maxLength} 
          name={id} id={id} type={visible ? "text" : "password"} 
          disabled={disabled} {...props}
        />
        <button disabled={disabled} type="button" className="password-toggle" onClick={handleShowPassword}>
          <img src={visible ? visibleImg : hiddenImg}/>
        </button>
      </div>
    </div>
  );
}