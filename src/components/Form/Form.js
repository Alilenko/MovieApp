import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../reusable components/Input/FormInput'
import MainButton from '../reusable components/MainButton'
import './Form.scss'

const Form = ({login, setLogin, password, setPassword, error, setError, formName, link, textLink,onSubmit, verify, audit, setAudit}) => {

  return (
    <div className='form__row'>
        <div className='form__name'>{formName}</div>
        <FormInput placeholder='Email' type='email' value={login} setValue={setLogin} setError={setError}/>
        <FormInput placeholder='Password' type='password' value={password} setValue={setPassword} setError={setError}/>
        {verify ? <FormInput placeholder='Repeat password' type='password' value={audit} setValue={setAudit} setError={setError}/> : null}
        {error ? <div className='error'>Wrong login or password</div> : null}
        <MainButton name='Log In' onSubmit={onSubmit}/>
        <div className='form__text'>New to Netflix? <Link className='form__link' to={link}>{textLink}</Link></div>
    </div>
  )
}

export default Form