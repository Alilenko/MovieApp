import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import bg from '../assets/bg.jpeg'
import Form from '../components/Form/Form'
import './LoginScreen.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth }from '../firebase'
import { useNavigate } from 'react-router';

const LoginScreen = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let navigate = useNavigate();
    const {currentUser} = useSelector(state => state.currentUser)

    const singIn = async () => {
        setLoading(true)
          await signInWithEmailAndPassword(auth, login, password)
          .then(({user}) => {
            setLogin('')
            setPassword('')
            navigate('/')
            setLoading(false)
        })
        .catch((err) => setError(true))
        setLoading(false)
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
            formName='Sign In' 
            link='/singup' 
            textLink='Sign up now.' 
            onSubmit={singIn}
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}/>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen