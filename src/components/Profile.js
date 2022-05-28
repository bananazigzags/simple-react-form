import React from 'react'
import Row from './Row';
import "./styles/Profile.css"

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

render() {
  return (
    <div className="profile">
      <h1>{this.props.fullName}</h1>
      <div className="profile-data">
        <Row 
        fieldName="Имя" 
        inputData={this.props.name}
        />
        <Row 
        fieldName="Фамилия" 
        inputData={this.props.lastName}
        />
        <Row 
        fieldName="Дата рождения" 
        inputData={this.props.dateOfBirth}
        />
        <Row 
        fieldName="Телефон" 
        inputData={this.props.phone}
        />
        <Row 
        fieldName="Сайт" 
        inputData={this.props.website}
        />
        <Row
        fieldName="О себе" 
        inputData={this.props.desc}
        />
        <Row 
        fieldName="Стек технологий" 
        inputData={this.props.techStack}
        />
        <Row 
        fieldName="Описание последнего проекта" 
        inputData={this.props.projectDesc}
        />
      </div>
    </div>
  )
}

}