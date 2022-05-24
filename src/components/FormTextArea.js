import React from 'react';

export default class FormTextArea extends React.Component {
  render() {
    return (
      <div className="form-input">
        <label 
          htmlFor={this.props.fieldName}className="field-label"
        >
          {this.props.fieldName}
        </label>
        <textarea 
          rows={this.props.numRows} 
          name={this.props.fieldName} placeholder={this.props.placeholder}className="input-field">
        </textarea>
      </div>
    )
  }
}