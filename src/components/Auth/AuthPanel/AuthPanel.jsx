import { Link } from "react-router-dom";
import "./AuthPanel.css";
import arrowImg from "./left-arrow.svg";

function AuthPanel({ header, children, back, ...props }) {
  return (
    <section className="auth-panel" {...props}>
      {back && (
        <div className="auth-panel-return">
          <Link to="/login">
            <img className="auth-panel-return-button" src={arrowImg} />
          </Link>
        </div>
      )}

      <div className="auth-panel-logo">
        <h1>Кабінет студента</h1>
        <h2>{header}</h2>
      </div>

      {children}
    </section>
  );
}

export default AuthPanel;
