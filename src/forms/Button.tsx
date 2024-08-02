import React from "react";

import styles from "./Form.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...attributes }: ButtonProps) {
  return (
    <button className={styles.button} {...attributes}>
      {label}
    </button>
  );
}
