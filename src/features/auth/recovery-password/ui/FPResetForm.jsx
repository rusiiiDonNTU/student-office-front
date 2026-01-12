import { useTranslation } from 'react-i18next';
import { Button, Input, FormBlock, FormActions, RequirementsList } from "@/shared/ui";
import { useState } from 'react';
import { validatePassword } from '@/shared/lib';
import { PASSWORD_RULES } from '@/entities/user';
import { useNavigation } from 'react-router-dom';


export function FPResetForm({ token }) {
  const { t } = useTranslation(["auth", "forgot"]);
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const validationErrors = validatePassword(password)
  const areEqual = (password === confirmPassword) && (password !== "");
  const invalid = Object.values(validationErrors).includes(true) || !areEqual;

  const requirementsInfo = PASSWORD_RULES.map(rule => {return {
    item: t(rule.locale),
    done: rule.test(validationErrors, areEqual)
  }})

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password)
  }

  function handleConfirmPasswordChange(event) {
    const password = event.target.value
    setConfirmPassword(password)
  }

  return (
    <FormBlock>
      <Input
        label={t("forgot:fields.newPass")}
        id="new-password"
        type="password"
        placeholder="••••••••••••••••"
        value={password}
        onChange={handlePasswordChange}
        disabled={isSubmitting}
        required
      />
      <Input
        label={t("forgot:fields.confirmNewPass")}
        id="confirm-new-password"
        type="password"
        placeholder="••••••••••••••••"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        disabled={isSubmitting}
        required
      />
      <Input
        type="hidden"
        id="token"
        value={token}
      />

      <hr/>
      <RequirementsList requirements={requirementsInfo} />
      <hr/>

      <FormActions>
        <Button isBlue disabled={invalid || isSubmitting}>{t("forgot:buttons.change")}</Button>
      </FormActions>
    </FormBlock>
  );
}
