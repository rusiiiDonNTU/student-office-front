import "./Checkbox.css";

function Checkbox({ label, id, ...props }) {
  return (
    <div className="checkbox">
      <input type="checkbox" name={id} id={id} {...props} />
      <label className="checkbox-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
