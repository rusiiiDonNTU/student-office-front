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

export async function signupAction({ request, params }) {
  const formData = await request.formData();
  const requestBody = {
    email: formData.get("email"),
    password: formData.get("password"),
    
  };

  // Валідація (клієнт-сайд)
  const valids = {
    isEmailValid: validateEmail(requestBody.email),
    isEmailNonEmpty: checkIfNonEmpty(requestBody.email),
    isPasswordValid:
      validatePassword(requestBody.password).length > 0 ? false : true,
    isPasswordNonEmpty: checkIfNonEmpty(requestBody.password),
  };

  if (Object.values(valids).includes(false)) {
    return valids;
  }

  // Відправка на сервер
  const response = await fetch("https://student-app-web-dzdtfbh6ejcpgcdm.westus-01.azurewebsites.net/api/auth/signIn", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  // // "Заглушка", щоб запит не відправлявся в будь-якому випадку (доки немає бекенда)
  // const response = {
  //   status: 401,
  // };

  // Перевірка відповіді з сервера
  if (response.status === 401) {
    return {
      message: "Невірний логін або пароль",
    };
  }
  else if (!response.ok) {
    throw new Response(
      { message: "Неочікування помилка під час авторизації" },
      { status: 500 }
    );
  }
  
  else {
    const resData = await response.json();
    login(resData.token, isRemembered);
    return redirect("/profile");
  }
}