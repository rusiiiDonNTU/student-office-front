import { useTranslation } from 'react-i18next';
import { Button, Input, FormBlock, FormActions } from "@/shared/ui";

export function FPChangeForm() {
  const { t } = useTranslation(["auth", "forgot"]);

  return (
    <FormBlock>
      <Input
        label={t("forgot:fields.newPass")}
        id="newPassword"
        type="password"
        placeholder="••••••••••••••••"
        required
      />
      <Input
        label={t("forgot:fields.confirmNewPass")}
        id="newPassword"
        type="password"
        placeholder="••••••••••••••••"
        required
      />
      
      <FormActions>
        <Button isBlue>{t("forgot:buttons.change")}</Button>
      </FormActions>
    </FormBlock>
  );
}
