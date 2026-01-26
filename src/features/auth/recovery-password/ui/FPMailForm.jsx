import { useTranslation } from 'react-i18next';
import { Button, Input, FormBlock, FormActions, HelpText } from "@/shared/ui";
import { useEffect, useState } from "react";
import { validateEmail } from "@/shared/lib";
import { useNavigation } from 'react-router-dom';

export function FPMailForm({ sent=false }) {
  const { t } = useTranslation(["auth", "forgot"]);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (sent)
      setSecondsLeft(120)
  }, [sent])

  useEffect(() => {
      if (secondsLeft === 0) return;

      const interval = setInterval(
          () => setSecondsLeft(s => Math.max(s - 1, 0))
      , 1000);

      return () => clearInterval(interval);
  }, [secondsLeft]);

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
      <HelpText>{recoveryInstructionText}</HelpText>
      <FormActions>
        <Button isBlue disabled={!isEmailValid || isSubmitting} secondsLeft={secondsLeft}>{buttonText}</Button>
      </FormActions>
    </FormBlock>
  );
}
