import "./Button.css";

export function Button({ children, isBlue, className="", ...props }) {
  return (
    <button className={"button " + (isBlue ? "blue-button" : "") + className} {...props}>
      {children}
    </button>
  );
}
