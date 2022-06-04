import React from 'react'
import './styles/Row.css'

export const Row = ({fieldName, inputData}) => {
  return (
    <div className="row">
      <div className="fieldLabel">{fieldName}</div>
      <div className="fieldContent">{inputData}</div>
    </div> 
  )
}