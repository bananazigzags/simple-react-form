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

  clearForm = (e) => {
    e.preventDefault();
    this.setState({
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

  render() {
    const {fields, isReady} = this.state;
    return !this.state.isSubmitted ?
      <form 
      className="form"
      >
        <Header
          formName="???????????????? ????????????"
        />
        <FormInput 
        value={fields.name}
        field="name"
        fieldLabel="??????"
        placeholder="Dan"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.name, validations.name)} 
        message={!fields.name ? errors.empty : errors.name}
        />}
        <FormInput 
        value={fields.lastName}
        field="lastName"
        fieldLabel="??????????????"
        placeholder="Abramov"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.lastName, validations.lastName)} 
        message={!fields.lastName ? errors.empty : errors.lastName}
        />}
        <FormInput 
        value={fields.dateOfBirth}
        field="dateOfBirth"
        fieldLabel="???????? ????????????????"
        placeholder="DD.MM.YYYY"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.dateOfBirth, validations.dateOfBirth)} 
        message={!fields.dateOfBirth ? errors.empty : errors.dateOfBirth}
        />}
        <FormInput 
        value={fields.phone}
        field="phone"
        fieldLabel="??????????????"
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
        value={fields.website}
        field="website"
        fieldLabel="????????"
        placeholder="https://overreacted.io"
        handleChange={(e) => this.handleChange(e)}
        />
        {isReady && 
        <ValidateError
        isValid={validateInput(fields.website, validations.website)} 
        message={!fields.website ? errors.empty : errors.website}
        />}
        <FormTextArea
        value={fields.desc}
        field="desc"
        fieldLabel="?? ????????" 
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
        value={fields.techStack}
        field="techStack"
        fieldLabel="???????? ????????????????????" 
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
        value={fields.projectDesc}
        field="projectDesc"
        fieldLabel="???????????????? ???????????????????? ??????????????" 
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
          buttonName="????????????"
          onClick={(e) => this.clearForm(e)}
          />
          <Button 
          buttonName="??????????????????"
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