import React, { useState } from "react";
import FormStyle from "./FormInput.module.css"

const FormInput = (props) => {
  const { label, handleChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true)
  }

  return (
    <>
      <label className={FormStyle.formInput}>
        <span className={FormStyle.label}>{label}</span>
        <input
          className={FormStyle.input}
          onChange={handleChange}
          onBlur={handleBlur}
          focused={focused.toString()}
          onFocus={() =>
            Boolean(inputProps.name === "confirmPassword") && setFocused(true)
          }
          {...inputProps}
        />
        <span className={FormStyle.err_msg}>{errorMessage}</span>
      </label>
    </>
  )
}

export default FormInput