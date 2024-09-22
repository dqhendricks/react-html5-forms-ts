import React, { useState, useCallback } from "react";

import styles from "./Form.module.css";

export function useControlValidation<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>(attributes: React.InputHTMLAttributes<T>) {
  const [validationMessage, setValidationMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // updates validation message on type
  const handleChange = useCallback((event: React.ChangeEvent<T>) => {
    const inputElement = event.target;
    setValidationMessage(inputElement.validationMessage);
    if (attributes.onChange) attributes.onChange(event);
  }, []);

  // sets isTouched which determines whether to show validation indicators
  const handleBlur = useCallback((event: React.FocusEvent<T>) => {
    // skip onBlur validation if submitting
    const { target: inputElement, relatedTarget } = event;
    if (relatedTarget && relatedTarget.tagName === "BUTTON") {
      const relatedTargetType = relatedTarget.getAttribute("type");
      const form = relatedTarget.closest("form");
      const buttonWillSubmit =
        form && (relatedTargetType === "submit" || relatedTargetType === null);
      if (buttonWillSubmit) {
        return;
      }
    }
    setValidationMessage(inputElement.validationMessage);
    setIsTouched(true);
    if (attributes.onBlur) attributes.onBlur(event);
  }, []);

  // for when user submits without clicking any of the inputs
  const handleInvalid = useCallback((event: React.InvalidEvent<T>) => {
    const inputElement = event.target;
    setValidationMessage(inputElement.validationMessage);
    if (attributes.onInvalid) attributes.onInvalid(event);
  }, []);

  const validationClasses = `${isTouched ? styles.isTouched : ""} ${
    validationMessage ? styles.invalid : styles.valid
  }`;

  return {
    validationMessage,
    validationClasses,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid,
  };
}
