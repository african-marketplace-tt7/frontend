import React from 'react';

const TextInput = ({name, onChange, value}) => {
  return (
    <label htmlFor={name}> {name}:
      <input type='text' id={name} name={name} value={value} onChange={onChange}/>
    </label>
  )
}

export default TextInput;