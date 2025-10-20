import donntuLogo from "./donntu-logo.png";

function AuthLogo() {
  return (
    <section className="auth-logo">
      <div className="auth-logo-img">
        <img src={donntuLogo} />
      </div>
      <span className="auth-logo-text">
        Донецький національний
        <br />
        технічний університет
      </span>
    </section>
  );
}

export default AuthLogo;