import React from 'react';

const TextInput = ({name, onChange, value, displayName, register, requirements, errorMessage}) => {
const inputType = name === 'email' ? 'email' : 'text'

  return (
    <label htmlFor={name}> {displayName}:
      <input type={inputType} id={name} name={name} value={value} onChange={onChange} ref={register(requirements)}/>
      {errorMessage[name] && <p>{requirements.errorMessage}</p>}
    </label>
  )
}

export default TextInput;