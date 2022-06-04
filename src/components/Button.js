import React from 'react';
import "./styles/Button.css"

export const Button = ({ onClick, buttonName }) => {
  return (
    <button 
    onClick={onClick}
    className="button"
    >
      {buttonName}
    </button>
  )
}