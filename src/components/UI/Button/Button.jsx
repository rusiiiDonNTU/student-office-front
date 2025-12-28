import "./Button.css";

function Button({ children, isBlue, className="", ...props }) {
  return (
    <button className={"button " + (isBlue ? "blue-button" : "") + className} {...props}>
      {children}
    </button>
  );
}

export default Button;
