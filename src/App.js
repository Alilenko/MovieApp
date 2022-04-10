import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {getCurrentUser} from './app/Slice/UserSlice'
import './styles/index.scss';
import useMovie from './app/services/useMovie';
import Home from './screen/Home';
import LoginScreen from './screen/LoginScreen';
import SingUpScreen from './screen/SingUpScreen';
import UserScreen from './screen/UserScreen';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from "firebase/auth";
import {auth }from './firebase'

function App() {

  const dispatch = useDispatch()
  onAuthStateChanged(auth, (currentUser) => {
    dispatch(getCurrentUser([{id: currentUser.uid, email: currentUser.email}]))
  })

  return (
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/singup' element={<SingUpScreen/>}/>
        <Route path='/profile' element={<UserScreen/>}/>
        <Route path="/" element={<Home/>} /> 
      </Routes>
  );
}

export default App;
