import { useState } from "react";

import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import Form from "../UI/Form/Form";
import InputRow from "../UI/InputRow/InputRow";
import FormActions from "../UI/Form/FormActions/FormActions";

function SignupForm() {
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
        label="Пошта"
        id="email"
        type="email"
        placeholder="name.surname.institute@donntu.edu.ua"
        required
      />

      <InputRow>
        <Input
          label="Пароль"
          id="password"
          type="password"
          placeholder="••••••••••••••••"
          required
        />
        <Input
          label="Підтвердити пароль"
          id="confirm-password"
          type="confirm-password"
          placeholder="••••••••••••••••"
          required
        />
      </InputRow>

      <Input
        label="РНОКПП"
        id="rnokpp"
        placeholder="12345678"
        required
        disabled={!isRnokpp}
      />
      <Checkbox
        label="РНОКПП відсутній"
        id="no-rnokpp"
        checked={!isRnokpp}
        onChange={handleRnokppChange}
      />

      <InputRow>
        <Input
          label="Серія студентського квитка"
          id="student-id-series"
          placeholder="12345678"
          disabled={!isStudentId}
          required
        />
        <Input
          label="Номер студентського квитка"
          id="student-id-num"
          placeholder="12345678"
          disabled={!isStudentId}
          required
        />
      </InputRow>
      <Checkbox
        label="Студентський квиток відсутній"
        id="no-student-id"
        checked={!isStudentId}
        onChange={handleStudentIdChange}
      />

      <FormActions>
        <Button isBlue>Зареєструватись</Button>
      </FormActions>
    </Form>
  );
}

export default SignupForm;
