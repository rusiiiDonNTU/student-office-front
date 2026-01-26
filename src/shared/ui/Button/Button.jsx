import "./Button.css";

export function Button({ children, isBlue, className="", secondsLeft=0, disabled, ...props }) {
  const off = disabled || secondsLeft > 0;

  return (
    <button className={"button" + (isBlue ? " blue-button" : "") + className} disabled={off} {...props}>
      {secondsLeft > 0 ? children + ` (${secondsLeft})`: children}
    </button>
  );
}
