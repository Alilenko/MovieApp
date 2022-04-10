import React, { useState } from 'react'
import './FormInput.scss'

const FormInput = ({value, setValue, placeholder, type}) => {

  return (
    <input 
    value={value}
    onChange={(e) => setValue(e.target.value)} 
    className='form__input' 
    placeholder={placeholder}
    type={type}/>
  )
}

export default FormInput