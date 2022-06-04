import React, { useState, useRef } from 'react';
import { FormInput } from './FormInput'
import { Header } from "./Header"
import { FormTextArea } from './FormTextArea';
import { Button } from './Button';
import { Profile } from './Profile';
import { ValidateError } from './ValidateError';
import { SymbolTracker } from './SymbolTracker';
import { validations, errors } from '../util/validations';
import { validateInput } from '../util/validate';
import "./styles/Form.css"

export const Form = () => {
  const [state, setState] = useState({
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
      }
    })

  const phoneRef = useRef(null);
  const {fields, isReady} = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({...state, isReady: true});
    for (let [key, value] of Object.entries(fields)) {
      if(!validateInput(value, validations[key])) {
        return
      }
    }
    setState({...state, isSubmitted: true})
  }

  const handleChange = (event) => {
    const newFields = {...fields}
    newFields[event.target.name] = event.target.value;
    setState({...state, fields: newFields})
  }

  const handlePhoneChange = (e) => {
    if(!/^\d/.test(phoneRef.current.value)) {
      phoneRef.current.value = "";
    }
    if (phoneRef.current.value) {
      const phoneValue = phoneRef.current.value.replace(/\D/g, '').match(/(\d{1})(\d{0,4})(\d{0,2})(\d{0,2})/)
      phoneRef.current.value = !phoneValue[2]
      ? phoneValue[1]
      : `${phoneValue[1]}-${phoneValue[2]}
      ${(`${phoneValue[3] ? `-${phoneValue[3]}` : ''}`)}
      ${(`${phoneValue[4] ? `-${phoneValue[4]}` : ''}`)}`;
      phoneRef.current.value = phoneRef.current.value.replace(/\s/g, "");
      const numbers = phoneRef.current.value;
      
      const newFields = {...fields}
      newFields.phone = numbers;
      setState({...state, fields: newFields})
    }
  }

  const clearForm = (e) => {
    e.preventDefault();
    setState({
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
      }
    })
  }

  return !state.isSubmitted ?
  <form 
  className="form"
  >
    <Header
      formName="Создание анкеты"
    />
    <FormInput 
    value={fields.name}
    field="name"
    fieldLabel="Имя"
    placeholder="Dan"
    handleChange={(e) => handleChange(e)}
    />
    {isReady && 
    <ValidateError
    isValid={validateInput(fields.name, validations.name)} 
    message={!fields.name ? errors.empty : errors.name}
    />}
    <FormInput 
    value={fields.lastName}
    field="lastName"
    fieldLabel="Фамилия"
    placeholder="Abramov"
    handleChange={(e) => handleChange(e)}
    />
    {isReady && 
    <ValidateError
    isValid={validateInput(fields.lastName, validations.lastName)} 
    message={!fields.lastName ? errors.empty : errors.lastName}
    />}
    <FormInput 
    value={fields.dateOfBirth}
    field="dateOfBirth"
    fieldLabel="Дата рождения"
    placeholder="DD.MM.YYYY"
    handleChange={(e) => handleChange(e)}
    />
    {isReady && 
    <ValidateError
    isValid={validateInput(fields.dateOfBirth, validations.dateOfBirth)} 
    message={!fields.dateOfBirth ? errors.empty : errors.dateOfBirth}
    />}
    <FormInput 
    value={fields.phone}
    field="phone"
    fieldLabel="Телефон"
    placeholder="7-7777-77-77"
    handleChange={(e) => handlePhoneChange(e)}
    phoneRef={phoneRef}
    />
    {isReady && 
    <ValidateError
    isValid={validateInput(fields.phone, validations.phone)} 
    message={!fields.phone ? errors.empty : errors.phone}
    />}
    <FormInput 
    value={fields.website}
    field="website"
    fieldLabel="Сайт"
    placeholder="https://overreacted.io"
    handleChange={(e) => handleChange(e)}
    />
    {isReady && 
    <ValidateError
    isValid={validateInput(fields.website, validations.website)} 
    message={!fields.website ? errors.empty : errors.website}
    />}
    <FormTextArea
    value={fields.desc}
    field="desc"
    fieldLabel="О себе" 
    placeholder="Describe yourself here"
    numRows="7"
    handleChange={(e) => handleChange(e)}
    />
    {state.isReady && 
    <ValidateError
    isValid={validateInput(fields.desc, validations.desc)} 
    message={!fields.desc ? errors.empty : errors.desc}
    />}
    {fields.desc && <SymbolTracker 
    len={fields.desc.length}
    limit={600}
    />}
    <FormTextArea
    value={fields.techStack}
    field="techStack"
    fieldLabel="Стек технологий" 
    placeholder="JavaScript, React, Redux"
    numRows="7"
    handleChange={(e) => handleChange(e)}
    />
    {state.isReady && 
    <ValidateError
    isValid={validateInput(fields.techStack, validations.techStack)} 
    message={!fields.techStack ? errors.empty : errors.techStack}
    />}
    {fields.techStack && <SymbolTracker 
    len={fields.techStack.length}
    limit={600}
    />}
    <FormTextArea
    value={fields.projectDesc}
    field="projectDesc"
    fieldLabel="Описание последнего проекта" 
    placeholder="Short and sweet, please"
    numRows="7"
    handleChange={(e) => handleChange(e)}
    />
    {state.isReady && 
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
      onClick={(e) => clearForm(e)}
      />
      <Button 
      buttonName="СОХРАНИТЬ"
      onClick={(e) => handleSubmit(e)}
      />
    </div>
  </form>
: <Profile 
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