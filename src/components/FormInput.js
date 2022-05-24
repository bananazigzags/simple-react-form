import React from 'react';
import './FormInput.css'

export default class FormInput extends React.Component {
  render() {
    return (
      <div class="form-input">
        <label 
          htmlFor={this.props.fieldName} className="field-label">
          {this.props.fieldName}
        </label>
        <input 
          type="text"
          name={this.props.fieldName}
          placeholder={this.props.placeholder}
          className="input-field">
        </input>
      </div>
    )
  }
}