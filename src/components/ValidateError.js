import React from 'react'
import "./styles/ValidateError.css"

export const ValidateError = ({isValid, message}) => !isValid ? <span className="error">{message}</span> : null