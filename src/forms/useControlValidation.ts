import React, { useState, useEffect, useRef, useCallback } from "react";

import styles from "./Form.module.css";

export function useControlValidation<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>(onChange?: (event: React.ChangeEvent<T>) => void) {
  const [validationMessage, setValidationMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const controlRef = useRef<T>(null);

  // sets validation message
  const handleChange = useCallback(
    (event: React.ChangeEvent<T>) => {
      const inputElement = event.target;
      setValidationMessage(inputElement.validationMessage);
      if (onChange) onChange(event);
    },
    [onChange]
  );

  // sets isTouched which determines whether to show validation indicators
  const handleBlur = useCallback((event: React.FocusEvent<T>) => {
    // skip onBlur validation if submitting
    const { relatedTarget } = event;
    if (relatedTarget && relatedTarget.tagName === "BUTTON") {
      const relatedTargetType = relatedTarget.getAttribute("type");
      if (relatedTargetType === "submit" || relatedTargetType === null) {
        return;
      }
    }
    setIsTouched(true);
  }, []);

  // ensures correct validation status applied even if the user hits submit before changing values
  useEffect(() => {
    if (controlRef.current) {
      handleChange({
        target: controlRef.current,
      } as React.ChangeEvent<T>);
    }
  }, [handleChange]);

  const validationClasses = `${isTouched ? styles.isTouched : ""} ${
    validationMessage ? styles.invalid : styles.valid
  }`;

  return {
    validationMessage,
    validationClasses,
    ref: controlRef,
    onChange: handleChange,
    onBlur: handleBlur,
  };
}
