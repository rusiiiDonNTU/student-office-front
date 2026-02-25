import { useTranslation } from "react-i18next";
import {
  Button,
  Input,
  FormBlock,
  FormActions,
  RequirementsList,
  InputPassword,
} from "@/shared/ui";
import { useState } from "react";
import { validatePassword } from "@/shared/lib";
import { PASSWORD_RULES } from "@/entities/user";
import { useNavigation } from "react-router-dom";

export function FPResetForm({ token }) {
  const { t } = useTranslation(["auth", "forgot"]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const validationErrors = validatePassword(password);
  const isEmpty = password === "";
  const areEqual = password === confirmPassword && !isEmpty;
  const invalid = Object.values(validationErrors).includes(true) || !areEqual;

  const requirementsInfo = PASSWORD_RULES.map((rule) => {
    return {
      item: t(rule.locale),
      done: rule.test(validationErrors, areEqual, isEmpty),
    };
  });

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);
  }

  function handleConfirmPasswordChange(event) {
    const password = event.target.value;
    setConfirmPassword(password);
  }

  return (
    <FormBlock>
      <InputPassword
        label={t("forgot:fields.newPass")}
        id="new-password"
        placeholder="••••••••••••••••"
        maxLength={32}
        value={password}
        onChange={handlePasswordChange}
        disabled={isSubmitting}
        visible={visible}
        setVisible={setVisible}
        required
      />
      <InputPassword
        label={t("forgot:fields.confirmNewPass")}
        id="confirm-new-password"
        placeholder="••••••••••••••••"
        maxLength={32}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        disabled={isSubmitting}
        visible={visible}
        setVisible={setVisible}
        required
      />
      <Input type="hidden" id="token" value={token} />

      <hr />
      <RequirementsList requirements={requirementsInfo} />
      <hr />

      <FormActions>
        <Button isBlue disabled={invalid || isSubmitting}>
          {t("forgot:buttons.change")}
        </Button>
      </FormActions>
    </FormBlock>
  );
}
