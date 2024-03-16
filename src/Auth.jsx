import React, { useEffect, useState } from 'react'

const Auth = () => {
const [accesstoken, setAccessToken]=useState('');
const handleLogin=()=>{
    const CLIENT_ID='663552429392-4pno8ja3fopm2kri014vvhnrqg1fbi9q.apps.googleusercontent.com'
    const REDIRECT_URL='http://localhost:3001'
    const SCOPE='https://www.googleapis.com/auth/gmail.readonly';
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;

window.location.href=AUTH_URL;
};

const getAccessToken = () => {
  const url = window.location.href;
  const token = url.match(/access_token=([^&]+)/);
  if (token && token[1]) {
    console.log(token[1]);
    localStorage.setItem("Token", token[1]);
    console.log("token is", localStorage.getItem("Token"));
  // } else {
  //   console.log("Access token not found in URL");
  // }
};

useEffect(() => {
  getAccessToken();
}, []);

const getEmaildata = () => {
  let token = localStorage.getItem("Token"); 
  console.log("hello", token);
  let url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'; 
  const options = {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
  };
  fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('error in fetching mails', error));
};

const fetchMail = () => {
  let id = "18e409667f6cb3c9";
  let token = localStorage.getItem("Token"); 
  const options = {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
  };
  let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`; 
  fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json.messages[0], id))
      .catch(error => console.log('error in fetching mails', error));
};



  return (
    <div>
    {accesstoken ? (
    <div>
      <h1>Access token obtained</h1>
      <p>access Token:{accesstoken}</p>
    </div>):(
        <>
        
        <button onClick={()=>handleLogin()}>LOGIN WITH GOOGLE</button> 
        <button onClick={()=>getEmaildata()}>GET EMAIL</button>
        
        <button onClick={()=>fetchMail()}>fetch mail</button> 
        
        </>
    )

    }
    </div>
  )
}

export default Auth;

