import "./Button.css";

function Button({ children, isBlue }) {
  return (
    <button className={"button" + (isBlue ? " blue-button" : "")}>
      {children}
    </button>
  );
}

export default Button;
