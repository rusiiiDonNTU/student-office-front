import { Form } from "react-router-dom";
import "./FormBlock.css";

export function FormBlock({children, method="post", ...props}) {
    return <Form className="form" method={method} noValidate {...props}>
        {children}
    </Form>
}
