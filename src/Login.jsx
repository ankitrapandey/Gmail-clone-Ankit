import React from 'react'
import {  useState } from 'react';
const Login = () => {
  const [accesstoken, setAccessToken] = useState('');
  const handleLogin = () => {
    const CLIENT_ID = "272560249615-a76l81evcasu3d5jkhhifmps9qap4cm2.apps.googleusercontent.com"
    const REDIRECT_URL = 'http://localhost:3000/Inbox'
    const SCOPE = "https://mail.google.com/";
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
    window.location.href = AUTH_URL;
  };
  return (
    <div>
      {accesstoken ? (
        <div>
          <h1>Access token obtained</h1>
          <p>access Token:{accesstoken}</p>
        </div>) : (
        <>
          <button onClick={() => handleLogin()}>LOGIN WITH GOOGLE</button>
        </>
      )
      }
    </div>
  )
}
export default Login;
