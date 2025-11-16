import "./Button.css";

function Button({ children, isBlue, ...props }) {
  return (
    <button className={"button" + (isBlue ? " blue-button" : "")} {...props}>
      {children}
    </button>
  );
}

export default Button;
