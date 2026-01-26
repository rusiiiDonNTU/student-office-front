import { ErrorText } from "..";
import "./Input.css";

export function Input({ label, id, isError=false, errorMsg, type="text", ...props }) {
  return (
    <div className={`input-group${type === "hidden" ? " hidden" : ""}`}>
      <div className="input-label-row">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
      </div>

      <input className={`input-field${isError ? " error" : ""}`} name={id} id={id} type={type} {...props} />
    </div>
  );
}