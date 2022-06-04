import { Row } from './Row';
import "./styles/Profile.css"

export const Profile = ({ 
  name,
  lastName,
  dateOfBirth, 
  phone,
  website,
  desc,
  techStack,
  projectDesc
}) => {
  return (
    <div className="profile">
      <h1>{`${name} ${lastName}`}</h1>
      <div className="profile-data">
        <Row 
        fieldName="Имя" 
        inputData={name}
        />
        <Row 
        fieldName="Фамилия" 
        inputData={lastName}
        />
        <Row 
        fieldName="Дата рождения" 
        inputData={dateOfBirth}
        />
        <Row 
        fieldName="Телефон" 
        inputData={phone}
        />
        <Row 
        fieldName="Сайт" 
        inputData={website}
        />
        <Row
        fieldName="О себе" 
        inputData={desc}
        />
        <Row 
        fieldName="Стек технологий" 
        inputData={techStack}
        />
        <Row 
        fieldName="Описание последнего проекта" 
        inputData={projectDesc}
        />
      </div>
    </div>
  )
}