import { useTranslation } from 'react-i18next';
import { Button, Input, FormBlock, FormActions } from "@/shared/ui";
import { useState } from "react";
import { validateEmail } from "@/shared/lib";
import { useNavigation } from 'react-router-dom';

export function FPMailForm() {
  const { t } = useTranslation(["auth", "forgot"]);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function handleEmailChange(event) {
    const email = event.target.value;
    const validation = validateEmail(email);
    if (validation && !isEmailValid) setIsEmailValid(true);
    else if (!validation && isEmailValid) setIsEmailValid(false);
  }

  // Текст
  const emailLabel = t("auth:fields.emailField");
  const recoveryInstructionText = t("forgot:text.recoveryInstruction");
  const buttonText = t("forgot:buttons.send");

  return (
    <FormBlock>
      <Input
        label={emailLabel}
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        onChange={handleEmailChange}
        disabled={isSubmitting}
        required
      />
      <p style={{color: "#929292", textAlign: "center"}}>
        {recoveryInstructionText}
      </p>
      <FormActions>
        <Button isBlue disabled={!isEmailValid || isSubmitting}>{buttonText}</Button>
      </FormActions>
    </FormBlock>
  );
}
