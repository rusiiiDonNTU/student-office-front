import AuthInfo from "../../components/Auth/AuthInfo/AuthInfo.jsx";
import AuthPanel from "../../components/Auth/AuthPanel/AuthPanel.jsx";
import SignupForm from "../../components/Signup/SignupForm.jsx";

function SignupPage() {
  return (
    <>
      <AuthPanel header="Реєстрація" back>
        <SignupForm />
      </AuthPanel>
      <AuthInfo infoType={2}/>
    </>
  );
}

export default SignupPage;
