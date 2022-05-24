import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./app/Slice/UserSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";

import Home from "./screen/Home";
import LoginScreen from "./screen/LoginScreen";
import SingUpScreen from "./screen/SingUpScreen";
import UserScreen from "./screen/UserScreen";
import MovieScren from "./screen/MovieScreen";
import NotFoundScreen from "./screen/NotFoundScreen";
import SearchScreen from "./screen/SearchScreen/SearchScreen";
import SeriesScreen from "./screen/SeriesScreen/SeriesScreen";
import Spinner from "./components/Spinner/Spinner";

import "./styles/index.scss";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  let navigate = useNavigate();

  useEffect(() => {
    const subsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getCurrentUser([{ id: user.uid, email: user.email }]));
        navigate("/");
      } else {
        navigate("/login");
      }
    });
    return subsribe;
  }, []);

  return (
    <Routes>
      <Route exact path="/login" element={<LoginScreen />} />
      <Route exact path="/singup" element={<SingUpScreen />} />
      <Route exact path="/profile" element={<UserScreen />} />
      <Route exact path="/movies/:id" element={<MovieScren />} />
      <Route exact path="/series" element={<SeriesScreen />} />
      <Route exact path="/search" element={<SearchScreen />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
