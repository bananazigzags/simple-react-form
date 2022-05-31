import React from 'react';
import './styles/FormInput.css'

export default class FormInput extends React.Component {
  render() {
    return (
      <div className="form-input">
        <label 
          htmlFor={this.props.field} 
          className="field-label"
        >
          {this.props.fieldLabel}
        </label>
        <input 
          type="text"
          name={this.props.field}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
          className="input-field"
          ref={this.props.phoneRef}
        >
        </input>
        {this.props.isValidateFail && <p>{this.props.validateError}</p>}
      </div>
    )
  }
}