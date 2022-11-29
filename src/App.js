import { useState } from 'react';
import AppStyle from './App.module.css';
import FormInput from './components/form/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "viking2striking",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "samJones@gmail.com",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "12/07/1993",
      label: "Birthday",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "**********",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id: "5",
      name: "confirmPassword",
      type: "password",
      placeholder: "**********",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      required: true,
      pattern: values.password
    }
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={AppStyle.App}>
      <form className={AppStyle.form} autoComplete="off" onSubmit={handleSubmit}>
        <h1 className={AppStyle.form_title}>Register</h1>
        {
          inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
            />
          ))
        }
        <button type='submit' className={AppStyle.form_button}>Submit</button>
      </form>
    </div>
  );
}

export default App;
