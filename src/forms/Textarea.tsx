import React from "react";

import { useControlValidation } from "./useControlValidation.ts";
import styles from "./Form.module.css";

export default function Textarea({
  children,
  className = "",
  onChange,
  ...attributes
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { validationMessage, validationClasses, ...controlProps } =
    useControlValidation(onChange);

  return (
    <>
      <textarea
        className={`${styles.baseControl} ${
          styles.textareaControl
        } ${className} ${validationClasses}`}
        {...attributes}
        {...controlProps}
      >
        {children}
      </textarea>
      <p className={styles.invalidMessage}>{validationMessage}</p>
    </>
  );
}
