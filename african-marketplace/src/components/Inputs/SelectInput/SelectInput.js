import React from 'react';
import Option from './Option/Option';

const SelectInput = ({ name, languages, currencies, value, onChange, displayName}) => {

  let options = [];

  if (name === 'preferredCurrency') {
    options = currencies;
  } else if (name === 'primaryLanguage') {
    options = languages;
  }

  let optionsToRender = options.map(option => {
    return <Option details={option} />
  })

  return (
    <div>
      <label name={name}> {displayName}:
        <select type="select" name={name} value={value} onChange={onChange}>
          <option value='0'>---Please select your preference---</option>
          {optionsToRender}
        </select>
      </label>
    </div>
  )
}

export default SelectInput;