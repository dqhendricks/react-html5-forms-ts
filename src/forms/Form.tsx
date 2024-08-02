import React, { useState } from "react";

import styles from "./Form.module.css";
import Input from "./Input.tsx";
import Select from "./Select.tsx";
import Textarea from "./Textarea.tsx";
import Label from "./Label.tsx";
import Button from "./Button.tsx";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  as?: React.ElementType;
}

export default function Form({
  children,
  as: FormComponent = "form",
  className = "",
  onSubmit,
  noValidate = true,
  ...attributes
}: FormProps) {
  const [validated, setValidated] = useState(false);

  // check form validity using HTML5
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    if (event.currentTarget.checkValidity() === false) {
      // prevent submission and trigger validation messages to show
      event.preventDefault();
      setValidated(true);
    } else if (onSubmit) {
      onSubmit(event);
    }
  }

  return (
    <FormComponent
      className={`${className} ${validated ? styles.wasValidated : ""}`}
      onSubmit={submitHandler}
      noValidate={noValidate}
      {...attributes}
    >
      {children}
    </FormComponent>
  );
}

Form.Input = Input;
Form.Select = Select;
Form.Textarea = Textarea;
Form.Label = Label;
Form.Button = Button;
