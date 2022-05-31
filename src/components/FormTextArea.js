import React from 'react';

export default class FormTextArea extends React.Component {
  render() {
    return (
      <div className="form-input">
        <label 
          htmlFor={this.props.field}
          className="field-label"
        >
          {this.props.fieldLabel}
        </label>
        <textarea 
          rows={this.props.numRows} 
          name={this.props.field} 
          id={this.props.fielde}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
          className="input-field"
        >
        </textarea>
      </div>
    )
  }
}