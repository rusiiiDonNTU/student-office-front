import { ErrorText } from "..";
import "./Input.css";

export function Input({ label, id, isError=false, errorMsg, type="text", maxLength=256, ...props }) {
  return (
    <div className={`input-group${type === "hidden" ? " hidden" : ""}`}>
      <div className="input-label-row">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
      </div>

      <input className={`input-field${isError ? " error" : ""}`} maxLength={maxLength} name={id} id={id} type={type} {...props} />
    </div>
  );
}