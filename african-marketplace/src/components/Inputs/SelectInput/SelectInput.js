import React from 'react';
import Option from './Option/Option';

const SelectInput = ({ name, languages, currencies, value, onChange, displayName, register}) => {
  let options = [];

  if (name === 'preferredCurrency') {
    options = currencies;
  } else if (name === 'primaryLanguage') {
    options = languages;
  }

  let optionsToRender = options.map((option, i) => {
    return <Option details={option} key={i} />
  })

  return (
    <div>
      <label name={name}> {displayName}:
        <select type="select" name={name} value={value} onChange={onChange} ref={register({required: true})}>
          <option value=''>---Please select your preference---</option>
          {optionsToRender}
        </select>
      </label>
    </div>
  )
}

export default SelectInput;