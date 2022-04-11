import React, { useState } from 'react'
import './FormInput.scss'

const FormInput = ({value, setValue, placeholder, type, setError}) => {

  const changeHandler = (e) => {
    setValue(e.target.value)
    setError(false)
  }

  return (
    <input 
    value={value}
    onChange={(e) => changeHandler(e)} 
    className='form__input' 
    placeholder={placeholder}
    type={type}/>
  )
}

export default FormInput