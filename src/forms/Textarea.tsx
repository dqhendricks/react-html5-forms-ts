import React from "react";

import { useControlValidation } from "./useControlValidation.ts";
import styles from "./Form.module.css";

export default function Textarea({
  children,
  className = "",
  onChange,
  ...attributes
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { validationMessage, controlRef, handleChange } =
    useControlValidation(onChange);

  return (
    <>
      <textarea
        className={`${styles.baseControl} ${
          styles.textareaControl
        } ${className}`}
        onChange={handleChange}
        ref={controlRef}
        {...attributes}
      >
        {children}
      </textarea>
      <p
        className={styles.invalidMessage}
      >
        {validationMessage}
      </p>
    </>
  );
}
