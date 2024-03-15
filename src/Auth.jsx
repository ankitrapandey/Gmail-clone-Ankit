import React, { useEffect, useState } from 'react'

const Auth = () => {
const [accesstoken, setAccessToken]=useState('');
const handleLogin=()=>{
    const CLIENT_ID='663552429392-4pno8ja3fopm2kri014vvhnrqg1fbi9q.apps.googleusercontent.com'
    const REDIRECT_URI='http://localhost:3001'
    const SCOPE='http://www.googleapis.com/auth/gmail.readonly';
    const AUTH_URL=' https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token'
window.location.href=AUTH_URL;
};
const getAceesToken=()=>{
    const url=window.location.href
    const token=url.match(/access_token=([^&]+)/);
    console.log(token[1]);
    localStorage.setItem("Token",token[1]);
    console.log("token is",localStorage.getItem("Token"));
}
useEffect(()=>{
getAceesToken();
},[])

const getEmaildata=()=>{
    let token=localStorage.getItem("item");
    console.log("hello",token);
    let url='http://gmail.googleapis.com/gmail/vl/users/me/messages'
    const options={
        method:'GET',
        headers:{
            'Authorization':'Bearer ${token}',
            'Content-Type':'application/json'
        }
    }
   fetch(url,options)
   .then(response => response.json())
   .then(json=>console.log(json))
   .catch()

}

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
        </>
    )

    }
    </div>
  )
}

export default Auth;

