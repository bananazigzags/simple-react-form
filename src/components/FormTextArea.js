import React from 'react';

export const FormTextArea = ({ 
  field, 
  fieldLabel, 
  numRows, 
  placeholder,
  handleChange,
}) => {
  return (
    <div className="form-input">
      <label 
        htmlFor={field}
        className="field-label"
      >
        {fieldLabel}
      </label>
      <textarea 
        rows={numRows} 
        name={field} 
        placeholder={placeholder}
        onChange={handleChange}
        className="input-field"
      >
      </textarea>
    </div>
  )
}