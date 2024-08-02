import React from "react";

import styles from "./Form.module.css";

export default function Label({
  children,
  className = "",
  ...attributes
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`${styles.label} ${className}`} {...attributes}>
      {children}
    </label>
  );
}
