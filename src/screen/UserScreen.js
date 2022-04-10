import React from 'react'
import bg from '../assets/bg.jpeg'
import './LoginScreen.scss'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import MainButton from '../components/reusable components/MainButton';
import Nav from '../components/Nav/Nav';
import { signOut } from "firebase/auth";
import {auth} from '../firebase'

const UserScreen = () => {
    let navigate = useNavigate();
    const {currentUser} = useSelector(state => state.currentUser)

    const logout = async () => {
        await signOut(auth)
        navigate('/')
      }
      console.log(currentUser)

  return (
    <div>
        <Nav/>
        <div style={{
            backgroundImage: `url(${bg})`, 
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            position: 'relative',
        }}> <div className='gradient'>
            <div className='profile'>
            <div className='profile__email'>{currentUser[0]?.email}</div>
                <MainButton name='Log Out' onSubmit={logout}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UserScreen