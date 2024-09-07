import React from "react";

import { useControlValidation } from "./useControlValidation.ts";
import styles from "./Form.module.css";

export default function Select({
  children,
  className = "",
  onChange,
  ...attributes
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { validationMessage, controlRef, handleChange } =
    useControlValidation(onChange);

  return (
    <>
      <select
        className={`${styles.baseControl} ${
          styles.selectControl
        } ${className}`}
        onChange={handleChange}
        ref={controlRef}
        {...attributes}
      >
        {children}
      </select>
      <p
        className={styles.invalidMessage}
      >
        {validationMessage}
      </p>
    </>
  );
}
