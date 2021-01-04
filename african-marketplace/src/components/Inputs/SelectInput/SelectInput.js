import React from 'react';
import Option from './Option/Option';

const SelectInput = ({name, languages, currencies, value}) => {
  console.log(value) //=> null


  let options = [];

  if(name === 'preferredCurrency'){
    options = currencies;
  } else if (name === 'primaryLanguage'){
    options = languages;
  }

  let optionsToRender = options.map(option => {
    return <Option details={option} value={value}/>
  })

  return (
    <div>
      <label name={name}> {name}:
        <select type="select" value={value}>
          <option value='0'>---Please select your preference---</option>
          {optionsToRender}
        </select>
      </label>
    </div>
  )
}

export default SelectInput;