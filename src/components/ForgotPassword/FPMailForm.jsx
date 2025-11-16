import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";

function FPMailForm() {
  const { t } = useTranslation("auth");

  return (
    <Form className="form">
      <Input
        label={t("fields.emailField")}
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        required
      />
      <p style={{color: "#929292", textAlign: "center"}}>
        {t("text.recoveryInstruction")}
      </p>
      <FormActions>
        <Button isBlue>{t("buttons.submitRecovery")}</Button>
      </FormActions>
    </Form>
  );
}

export default FPMailForm;
