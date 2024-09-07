import React, { useState, useEffect, useRef, useCallback } from "react";

export function useControlValidation<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>(onChange?: (event: React.ChangeEvent<T>) => void) {
  const [validationMessage, setValidationMessage] = useState("");
  const controlRef = useRef<T>(null);

  // applys styles for displaying valid/invalid indicators
  const handleChange = useCallback(
    (event: React.ChangeEvent<T>) => {
      const inputElement = event.target;
      setValidationMessage(inputElement.validationMessage);
      if (onChange) onChange(event);
    },
    [onChange]
  );

  // ensures correct validation status applied even if the user hits submit before changing values
  useEffect(() => {
    if (controlRef.current) {
      handleChange({
        target: controlRef.current,
      } as React.ChangeEvent<T>);
    }
  }, [handleChange]);

  return {
    validationMessage,
    controlRef,
    handleChange,
  };
}
