import { useState } from "react";

import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import Form from "../UI/Form/Form";
import InputRow from "../UI/InputRow/InputRow";
import FormActions from "../UI/Form/FormActions/FormActions";
import { useTranslation } from "react-i18next";

function SignupForm() {
  const { t } = useTranslation("auth");
  const [isRnokpp, setIsRnokpp] = useState(true);
  const [isStudentId, setIsStudentId] = useState(true);

  function handleRnokppChange() {
    console.log(isRnokpp);
    setIsRnokpp((prev) => !prev);
  }

  function handleStudentIdChange() {
    setIsStudentId((prev) => !prev);
  }

  return (
    <Form>
      <Input
        label={t("fields.emailField")}
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        required
      />

      <InputRow>
        <Input
          label={t("fields.passField")}
          id="password"
          type="password"
          placeholder="••••••••••••••••"
          required
        />
        <Input
          label={t("fields.confirmPassField")}
          id="confirm-password"
          type="confirm-password"
          placeholder="••••••••••••••••"
          required
        />
      </InputRow>

      <Input
        label={t("fields.TRN")}
        id="rnokpp"
        placeholder="12345678"
        required
        disabled={!isRnokpp}
      />
      <Checkbox
        label={t("fields.noTRN")}
        id="no-rnokpp"
        checked={!isRnokpp}
        onChange={handleRnokppChange}
      />

      <InputRow>
        <Input
          label={t("fields.studIdSeries")}
          id="student-id-series"
          placeholder="12345678"
          disabled={!isStudentId}
          required
        />
        <Input
          label={t("fields.studIdNumber")}
          id="student-id-num"
          placeholder="12345678"
          disabled={!isStudentId}
          required
        />
      </InputRow>
      <Checkbox
        label={t("fields.noStudentId")}
        id="no-student-id"
        checked={!isStudentId}
        onChange={handleStudentIdChange}
      />

      <FormActions>
        <Button isBlue>{t("buttons.signUp")}</Button>
      </FormActions>
    </Form>
  );
}

export default SignupForm;
