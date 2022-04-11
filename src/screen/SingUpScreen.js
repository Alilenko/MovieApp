import React, {useState} from 'react'
import bg from '../assets/bg.jpeg'
import Form from '../components/Form/Form'
import './LoginScreen.scss'
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth }from '../firebase'
import { useNavigate } from 'react-router';

const SingUpScreen = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [audit, setAudit] = useState('')

    let navigate = useNavigate();

    const register = async () => {
        if(audit === password){
            setLoading(true)
      await createUserWithEmailAndPassword(auth, login, password)
        .then(() => {
          setLogin('')
          setPassword('')
          setAudit('')
          navigate('/')
          setLoading(false)
      })
      .catch((err) => setError(true))
      setLoading(false)
        }
        
    }

  return (
    <div>
        <div style={{
            backgroundImage: `url(${bg})`, 
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            position: 'relative',
        }}> <div className='gradient'>
            <Form 
                formName='Sign Up' 
                link='/login' 
                textLink='Login'
                onSubmit={register}
                login={login}
                setLogin={setLogin}
                password={password}
                setPassword={setPassword}
                error={error}
                setError={setError}
                audit={audit}
                setAudit={setAudit}
                verify={true}/>
            </div>
        </div>
    </div>
  )
}

export default SingUpScreen