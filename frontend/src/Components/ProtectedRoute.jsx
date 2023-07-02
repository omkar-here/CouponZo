import axios from "axios";
import React from "react";
import { useEffect, useContext } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./ContextAPI/UserContext";
const PrivateRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { loginId, setUserId, userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/verify", { withCredentials: true })
      .then((response) => {
        // console.log(response);
        // console.log("hello");
        if (response.data) {
          setIsLoggedIn(true);
          setUserId(response.data.id);
          setUserInfo({...response.data});
        }
        console.log(userInfo);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          setIsLoggedIn(false);
          navigate("/login");
        }
        console.log(err);
      });
  }, [isLoggedIn]);

  return isLoggedIn && <Outlet />;
};

export default PrivateRoutes;
