import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";
import { useRef, useState } from "react";
import { validateEmail } from "../../util/validation";

function FPMailForm() {
  const { t } = useTranslation(["auth", "forgot"]);
  const [isEmailValid, setIsEmailValid] = useState(false);

  function handleEmailChange(event) {
    const email = event.target.value;
    const validation = validateEmail(email);
    console.log(validation)
    if (validation && !isEmailValid) setIsEmailValid(true);
    else if (!validation && isEmailValid) setIsEmailValid(false);
  }

  // Текст
  const emailLabel = t("auth:fields.emailField");
  const recoveryInstructionText = t("forgot:text.recoveryInstruction");
  const buttonText = t("forgot:buttons.send");

  return (
    <Form>
      <Input
        label={emailLabel}
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        onChange={handleEmailChange}
        required
      />
      <p style={{color: "#929292", textAlign: "center"}}>
        {recoveryInstructionText}
      </p>
      <FormActions>
        <Button isBlue disabled={!isEmailValid}>{buttonText}</Button>
      </FormActions>
    </Form>
  );
}

export default FPMailForm;
