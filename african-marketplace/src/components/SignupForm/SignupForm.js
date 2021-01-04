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
const displayName = {
  city: 'City',
  country: 'Country',
  email: 'Email',
  firstName: 'First Name',
  lastName: 'Last Name',
  password: 'Password',
  username: 'Username',
  preferredCurrency: 'Preferred Currency',
  primaryLanguage: 'Preferred Currency',
}

const currencies = ['AOA', 'SHP', 'XOF', 'BWP', 'XOF', 'BIF', 'CVE', 'XAF', 'XAF', 'XAF', 'KMF', 'CDF', 'XAF', 'XOF', 'DJF', 'EGP', 'XAF', 'ERN', 'SZL', 'ETB', 'XAF', 'GMD', 'GHS', 'GNF', 'XOF', 'KES', 'LSL', 'LRD', 'LYD', 'MGA', 'MWK', 'XOF', 'MRU', 'MUR', 'EUR', 'MAD', 'MZN', 'NAD', 'XOF', 'NGN', 'EUR', 'RWF', 'SHP', 'STN', 'XOF', 'SCR', 'SLL', 'SOS', 'ZAR', 'SSP', 'SDG', 'TZS', 'XOF', 'GBP', 'TND', 'UGX', 'ZMW', 'USD'];

const languages = ['Bangi Me', 'Bayot', 'Dompo', 'Ega', 'Gomba', 'Gumuz', 'Hadza', 'Irimba', 'Jalaa', 'Kujarge', 'Laal', 'Lufu', 'Luo', 'Mawa', 'Meyobe', 'Mimi of Decorse; Mimi of Nachtigal', 'Mpra', 'Oblo', 'Ongota', 'Oropom', 'Rer Bare', 'Shabo', 'Weyto', 'Wutana', 'Yeni',
]

const SignupForm = () => {
  const [form, setForm] = useState({ ...initialStateText, ...initialStateSelect });
  console.log(form);

  //separate out inputs based on type 'text' or 'select'
  const text = [];
  const select = [];
  for (let i in form) {
    if (initialStateSelect.hasOwnProperty(i)) {
      select.push(i)
    } else {
      text.push(i)
    }
  }

  const textOnChangeHandler = (e) => {
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
    setForm({ ...initialStateText, ...initialStateSelect });
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {text.map(i => {
          return <TextInput name={i} key={i} value={form[i]} onChange={textOnChangeHandler} displayName={displayName[i]}/>
        })}
        {select.map(i => {
          return <SelectInput name={i} key={i} value={form[i]} onChange={selectOnChangeHandler} languages={languages} currencies={currencies} displayName={displayName[i]}/>
        })}
        <button>Create Your Account!</button>
      </form>
    </div>
  )
}

export default SignupForm;