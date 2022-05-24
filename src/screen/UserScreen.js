import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../app/Slice/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import MainButton from "../components/reusable components/MainButton";
import Nav from "../components/Nav/Nav";

import bg from "../assets/bg.jpeg";
import "./LoginScreen.scss";

const UserScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);

  const logout = async () => {
    await signOut(auth);
    dispatch(getCurrentUser([]));
    navigate("/login");
  };

  return (
    <div>
      <Nav />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          position: "relative",
        }}
      >
        {" "}
        <div className="gradient">
          <div className="profile">
            <div className="profile__email">{currentUser[0]?.email}</div>
            <MainButton name="Log Out" onSubmit={logout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserScreen;
