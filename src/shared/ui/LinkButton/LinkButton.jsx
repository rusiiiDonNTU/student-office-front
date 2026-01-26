import "./LinkButton.css";

export function LinkButton({ children, isBlue, className="", secondsLeft=0, disabled, ...props }) {
  const off = disabled || secondsLeft > 0;

  return (
    <div className={"link-button " + (off ? "disabled " : "") + className} {...props}>
      {secondsLeft > 0 ? children + ` (${secondsLeft})`: children}
    </div>
  );
}