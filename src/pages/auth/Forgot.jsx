import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel";
import FPMailForm from "../../components/ForgotPassword/FPMailForm";

function ForgotPage() {
  return (
    <>
      <AuthPanel header="Відновлення паролю" style={{maxWidth: "37.5rem"}} back>
        <FPMailForm />
      </AuthPanel>
    </>
  );
}

export default ForgotPage;
