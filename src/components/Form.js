import React from 'react';
import FormInput from './FormInput'
import Header from "./Header"
import "./Form.css"
import FormTextArea from './FormTextArea';
import Button from './Button';

export default class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <Header formName={this.props.input.name}/>
        {this.props.input.inputText.map(input => <FormInput
        fieldName={input[0]} 
        placeholder={input[1]}
        />)}
        {this.props.input.textArea.map(input => <FormTextArea
        fieldName={input[0]} 
        placeholder={input[1]} 
        numRows={input[2]}/>)}
        <div className="controls-block">
          <Button 
          buttonName="ОТМЕНА"
          onClick={() => alert('BYE')}
          />
          <Button 
          buttonName="СОХРАНИТЬ"
          onClick={() => alert('SUCCESS')}
          />
        </div>
      </div>
    )
  }
}