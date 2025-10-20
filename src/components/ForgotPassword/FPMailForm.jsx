import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import FormActions from "../UI/Form/FormActions/FormActions";
import Form from "../UI/Form/Form";

function FPMailForm() {
  return (
    <Form className="form">
      <Input
        label="Пошта"
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        required
      />
      <p style={{color: "#929292", textAlign: "center"}}>
        На вказану пошту прийде посилання, за яким ви зможете змінити пароль.
      </p>
      <FormActions>
        <Button isBlue>Відправити заявку</Button>
      </FormActions>
    </Form>
  );
}

export default FPMailForm;
