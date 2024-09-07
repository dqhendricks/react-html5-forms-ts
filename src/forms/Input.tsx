import React from "react";

import { useControlValidation } from "./useControlValidation.ts";
import styles from "./Form.module.css";

export default function Input({
  className = "",
  onChange,
  ...attributes
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const { validationMessage, controlRef, handleChange } =
    useControlValidation(onChange);

  return (
    <>
      <input
        className={`${styles.baseControl} ${styles.inputControl} ${className}`}
        onChange={handleChange}
        ref={controlRef}
        {...attributes}
      />
      <p
        className={styles.invalidMessage}
      >
        {validationMessage}
      </p>
    </>
  );
}
