import React from "react";

import { useControlValidation } from "./useControlValidation.ts";
import styles from "./Form.module.css";

export default function Textarea({
  children,
  className = "",
  onChange,
  ...attributes
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { isValid, validationMessage, controlRef, handleChange } =
    useControlValidation(onChange);

  return (
    <>
      <textarea
        className={`${styles.baseControl} ${
          styles.textareaControl
        } ${className} ${isValid ? styles.isValid : styles.isInvalid}`}
        onChange={handleChange}
        ref={controlRef}
        {...attributes}
      >
        {children}
      </textarea>
      <p
        className={`${styles.invalidMessage} ${isValid ? "" : styles.warning}`}
      >
        {validationMessage}
      </p>
    </>
  );
}
