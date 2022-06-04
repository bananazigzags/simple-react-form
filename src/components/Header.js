import React from 'react';
import "./styles/Header.css"

export const Header = ({ formName }) => {
  return (
    <div className="header">
      <h1>{formName}</h1>
    </div>
  )
}