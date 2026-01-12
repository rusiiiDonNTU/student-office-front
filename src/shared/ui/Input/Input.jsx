import "./Input.css";

export function Input({ label, id, errorMsg, type="text", ...props }) {
  return (
    <div className={`input-group${type === "hidden" ? " hidden" : ""}`}>
      <div className="input-label-row">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        {errorMsg && <p className="input-field-message">{errorMsg}</p>}
      </div>

      <input className="input-field" name={id} id={id} {...props} />
    </div>
  );
}