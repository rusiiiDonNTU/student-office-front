import { Form } from "react-router-dom";
import "./Form.css";

function FormContainer({children, method="post", ...props}) {
    return <Form className="form" method={method} noValidate {...props}>
        {children}
    </Form>
}

export default FormContainer;
