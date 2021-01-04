import React, { useState } from 'react';
import TextInput from '../Inputs/TextInput/TextInput';
import SelectInput from '../Inputs/SelectInput/SelectInput';

const initialStateText = {
  city: "",
  country: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  username: ""
}
const initialStateSelect = {
  preferredCurrency: 0,
  primaryLanguage: 0,
}

const currencies = ['DZD', 'AOA', 'BWP',];

const languages = ['Bangi Me', 'Bayot', 'Dompo', 'Ega', 'Gomba',]


const SignupForm = () => {
  const [form, setForm] = useState({ ...initialStateText, ...initialStateSelect });
  console.log(form);

  const text = [];
  const select = [];

  for (let i in form) {
    if (initialStateSelect.hasOwnProperty(i)) {
      select.push(i)
    } else {
      text.push(i)
    }
  }

  const testOnChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const selectOnChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {text.map(i => {
          return <TextInput name={i} key={i} value={form[i]} onChange={testOnChangeHandler} />
        })}
        {select.map(i => {
          return <SelectInput name={i} key={i} value={form[i]} onChange={selectOnChangeHandler} languages={languages} currencies={currencies} />
        })}
        <button>Create Your Account!</button>
      </form>
    </div>
  )
}

export default SignupForm;