import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const tokenString = sessionStorage.getItem('user');
    const user_detail = JSON.parse(tokenString);
    return user_detail;
  };

  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const saveToken = (user, token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('user', JSON.stringify(user));

    setToken(token);
    setUser(user);
    navigate('/student/profile');
  };

  const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    http
  };
}

