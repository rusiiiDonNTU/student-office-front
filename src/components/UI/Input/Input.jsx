import "./Input.css";

function Input({ label, id, errorMsg, ...props }) {
  return (
    <div className="input-group">
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

export default Input;
