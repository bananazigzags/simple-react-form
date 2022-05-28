import React from 'react';
import FormInput from './FormInput'
import Header from "./Header"
import FormTextArea from './FormTextArea';
import Button from './Button';
import Profile from './Profile';
import ValidateError from './ValidateError';
import SymbolTracker from './SymbolTracker';
import { validations, errors } from '../util/validations';
import { validateInput } from '../util/validate';
import "./styles/Form.css"

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      isReady: false,
      fields: {
        name: "",
        lastName: "",
        dateOfBirth: "",
        phone: "",
        website: "",
        desc: "",
        techStack: "",
        projectDesc: "",
      },
    }
    this.phoneRef = React.createRef();
  }

  handleSubmit = (event) => {
    const { fields } = this.state;
    event.preventDefault();
    this.setState({isReady: true});
    for (let [key, value] of Object.entries(fields)) {
      if(!validateInput(value, validations[key])) {
        return
      }
    }
    this.setState({isSubmitted: true})
  }

  handleChange = (event) => {
    const fields = {...this.state.fields}
    fields[event.target.name] = event.target.value;
    this.setState({fields})
  }

  handlePhoneChange = (e) => {
    if(!/^\d/.test(this.phoneRef.current.value)) {
      this.phoneRef.current.value = "";
    }
    if (this.phoneRef.current.value) {
      const phoneValue = this.phoneRef.current.value.replace(/\D/g, '').match(/(\d{1})(\d{0,4})(\d{0,2})(\d{0,2})/)
      this.phoneRef.current.value = !phoneValue[2]
      ? phoneValue[1]
      : `${phoneValue[1]}-${phoneValue[2]}
      ${(`${phoneValue[3] ? `-${phoneValue[3]}` : ''}`)}
      ${(`${phoneValue[4] ? `-${phoneValue[4]}` : ''}`)}`;
      this.phoneRef.current.value = this.phoneRef.current.value.replace(/\s/g, "");
      const numbers = this.phoneRef.current.value;
      
      const fields = {...this.state.fields}
      fields.phone = numbers;
      this.setState({fields})
    }
  }


  render() {
    const {fields, isReady} = this.state;
    return !this.state.isSubmitted ?
      <form 
      className="form"
      >
        <Header
          formName="Создание анкеты"
        />
        <FormInput 
        field="name"
        fieldLabel="Имя"
        placeholder="Dan"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.name, validations.name)} 
        message={!fields.name ? errors.empty : errors.name}
        />}
        <FormInput 
        field="lastName"
        fieldLabel="Фамилия"
        placeholder="Abramov"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.lastName, validations.lastName)} 
        message={!fields.lastName ? errors.empty : errors.lastName}
        />}
        <FormInput 
        field="dateOfBirth"
        fieldLabel="Дата рождения"
        placeholder="DD.MM.YYYY"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.dateOfBirth, validations.dateOfBirth)} 
        message={!fields.dateOfBirth ? errors.empty : errors.dateOfBirth}
        />}
        <FormInput 
        field="phone"
        fieldLabel="Телефон"
        placeholder="7-7777-77-77"
        handleChange={(e) => this.handlePhoneChange(e)}
        phoneRef={this.phoneRef}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.phone, validations.phone)} 
        message={!fields.phone ? errors.empty : errors.phone}
        />}
        <FormInput 
        field="website"
        fieldLabel="Сайт"
        placeholder="https://overreacted.io"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.website, validations.website)} 
        message={!fields.website ? errors.empty : errors.website}
        />}
        <FormTextArea
        field="desc"
        fieldLabel="О себе" 
        placeholder="Describe yourself here"
        numRows="7"
        handleChange={(e) => this.handleChange(e)}
        />
        {this.state.isReady && 
        <ValidateError
        isValid={validateInput(fields.desc, validations.desc)} 
        message={!fields.desc ? errors.empty : errors.desc}
        />}
        {fields.desc && <SymbolTracker 
        len={fields.desc.length}
        limit={600}
        />}
        <FormTextArea
        field="techStack"
        fieldLabel="Стек технологий" 
        placeholder="JavaScript, React, Redux"
        numRows="7"
        handleChange={(e) => this.handleChange(e)}
        />
        {this.state.isReady && 
        <ValidateError
        isValid={validateInput(fields.techStack, validations.techStack)} 
        message={!fields.techStack ? errors.empty : errors.techStack}
        />}
        {fields.techStack && <SymbolTracker 
        len={fields.techStack.length}
        limit={600}
        />}
        <FormTextArea
        field="projectDesc"
        fieldLabel="Описание последнего проекта" 
        placeholder="Short and sweet, please"
        numRows="7"
        handleChange={(e) => this.handleChange(e)}
        />
        {this.state.isReady && 
        <ValidateError
        isValid={validateInput(fields.projectDesc, validations.projectDesc)} 
        message={!fields.projectDesc ? errors.empty : 
          fields.projectDesc.length > 600 ? errors.projectDesc : ""}
        />}
        {fields.projectDesc && <SymbolTracker 
        len={fields.projectDesc.length}
        limit={600}
        />}
        <div className="controls-block">
          <Button 
          buttonName="ОТМЕНА"
          />
          <Button 
          buttonName="СОХРАНИТЬ"
          onClick={(e) => this.handleSubmit(e)}
          />
        </div>
      </form>
    : <Profile 
          fullName={`${fields.name} ${fields.lastName}`}
          name={fields.name}
          lastName={fields.lastName}
          dateOfBirth={fields.dateOfBirth}
          phone={fields.phone}
          website={fields.website}
          desc={fields.desc}
          techStack={fields.techStack}
          projectDesc={fields.projectDesc}
      />
    }
}