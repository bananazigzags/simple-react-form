import React from 'react'
import './styles/Row.css'

export default class Row extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="fieldLabel">{this.props.fieldName}</div>
        <div className="fieldContent">{this.props.inputData}</div>
      </div> 
    )
  }
}