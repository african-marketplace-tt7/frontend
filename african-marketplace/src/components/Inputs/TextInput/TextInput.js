import React from 'react';

const TextInput = ({name, onChange, value, displayName}) => {

  return (
    <label htmlFor={name}> {displayName}:
      <input type='text' id={name} name={name} value={value} onChange={onChange}/>
    </label>
  )
}

export default TextInput;