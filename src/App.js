import React from 'react';
import { Routes, Route} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {getCurrentUser} from './app/Slice/UserSlice'
import {auth }from './firebase'
import { onAuthStateChanged } from "firebase/auth";

import Home from './screen/Home';
import LoginScreen from './screen/LoginScreen';
import SingUpScreen from './screen/SingUpScreen';
import UserScreen from './screen/UserScreen';
import MovieScren from './screen/MovieScreen';
import NotFoundScreen from './screen/NotFoundScreen';
import SearchScreen from './screen/SearchScreen/SearchScreen';

import './styles/index.scss';

function App() {

  const dispatch = useDispatch()
  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      dispatch(getCurrentUser([{id: currentUser.uid, email: currentUser.email}]))
    }
  })

  return (
      <Routes>
        <Route exact path='/login' element={<LoginScreen/>}/>
        <Route exact path='/singup' element={<SingUpScreen/>}/>
        <Route exact path='/profile' element={<UserScreen/>}/>
        <Route exact path='/movies/:id' element={<MovieScren/>}/>
        <Route exact path='/search' element={<SearchScreen/>}/>
        <Route exact path="/" element={<Home/>} /> 
        <Route path="*" element={<NotFoundScreen/>} /> 
      </Routes>
  );
}

export default App;
