export const formData = {
  name: "Создание анкеты",
  inputText: [
    { field: "name",
      fieldName: "Имя", 
      placeholder: "Dan",
      validator: "",
      validateError: "Имя должно начинаться с заглавной буквы"      
    },
    { field: "lastName",
      fieldName: "Фамилия",
      placeholder: "Abramov",
      validator: "",
      validateError: "Фамилия должна начинаться с заглавной буквы"
    },
    { field: "dateOfBirth",
      fieldName: "Дата рождения",
      placeholder: "DD.MM.YYYY",
      validator: "",
    },
    { field: "phone",
      fieldName: "Телефон", 
      placeholder: "7-7777-77-77",
      validator: "",
    },
    { field: "website",
      fieldName: "Сайт", 
      placeholder: "https://overreacted.io",
      validator: "",
    }
  ],
  textArea: [
    { field: "desc",
      fieldName: "О себе",
      placeholder: "Describe yourself here", 
      numRows: 7,
    },
    { field: "techStack",
      fieldName: "Стек технологий", 
      placeholder: "JavaScript, React, Redux", 
      numRows: 7,
    },
    { field: "projectDesc",
      fieldName: "Описание последнего проекта", 
      placeholder: "Short and sweet, please", 
      numRows: 7,
    }
  ]
}
