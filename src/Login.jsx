import React from 'react'
import {  useState } from 'react';

const Login = () => {
  const [accesstoken, setAccessToken] = useState('');
  const handleLogin = () => {
    const CLIENT_ID = "272560249615-a76l81evcasu3d5jkhhifmps9qap4cm2.apps.googleusercontent.com"
    const REDIRECT_URL = 'http://localhost:3000/Inbox'
    const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;

    window.location.href = AUTH_URL;
  };

  const getAccessToken = () => {
   

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
          {/* <button onClick={() => getEmaildata()}>GET EMAIL</button> */}

          {/* <button onClick={() => fetchMail("18e5632d9618b2db")}>fetch mail</button> */}

        </>
      )

      }
    </div>
  )
}

export default Login
