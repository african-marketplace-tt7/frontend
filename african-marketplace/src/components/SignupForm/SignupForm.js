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
  preferredCurrency: "",
  primaryLanguage: "",
}

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
    console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const selectOnChangeHandler = (e) => {
    // console.log(e);
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value
    // })
  }

  return (
    <div>
      {text.map(i => {
        return <TextInput name={i} key={i} value={form[i]} onChange={testOnChangeHandler} />
      })}
      {select.map(i => {
        return <SelectInput name={i} key={i} value={form[i]} onChange={selectOnChangeHandler} />
      })}
    </div>
  )
}

export default SignupForm;