import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";
import { useRef, useState } from "react";
import { validateEmail } from "../../util/validation";

function FPChangeForm() {
  const { t } = useTranslation(["auth", "forgot"]);

  return (
    <Form>
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
    </Form>
  );
}

export default FPChangeForm;
