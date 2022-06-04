import React from 'react';
import './styles/FormInput.css'

export const FormInput = ({ 
  field, 
  fieldLabel, 
  value, 
  placeholder,
  handleChange,
  phoneRef
}) => {
  return (
    <div className="form-input">
      <label 
        htmlFor={field} 
        className="field-label"
      >
        {fieldLabel}
      </label>
      <input 
        type="text"
        className="input-field"
        name={field}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        ref={phoneRef}
      />
    </div>
    )
}