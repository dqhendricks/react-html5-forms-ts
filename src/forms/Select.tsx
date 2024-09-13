import React from "react";

import { useControlValidation } from "./useControlValidation.ts";
import styles from "./Form.module.css";

export default function Select({
  children,
  className = "",
  onChange,
  ...attributes
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { validationMessage, validationClasses, ...controlProps } =
    useControlValidation(onChange);

  return (
    <>
      <select
        className={`${styles.baseControl} ${styles.selectControl} ${className} ${validationClasses}`}
        {...attributes}
        {...controlProps}
      >
        {children}
      </select>
      <p className={styles.invalidMessage}>{validationMessage}</p>
    </>
  );
}
