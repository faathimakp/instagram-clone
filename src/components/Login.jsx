import React, { useState } from 'react'
 import appStoreImage from '../assets/apple-button.png'
import facebookImage from '../assets/fb-icon.png'
 import googlePlayImage from '../assets/googleplay-button.png'
import instagramLogoImge from '../assets/instagramlogo.png'
import '../App';

const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const loginHandler = () =>{
    alert("Login successfully");
  }
  return (
    <div className='login-container'>
    <div className="box-1">
        <div className="box-1-logo">
            <img src={instagramLogoImge} alt="#" className='instagram-logo' />
        </div>
        <div className="input-box">
          <input type="text" placeholder='Phone number,username or email address' value={userName} onChange={(e) => setUserName( e.target.value )}/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword( e.target.value )} />
        </div>
        <div className="login-button-box">
          <button className="login-button" onClick={loginHandler}>Login</button>
        </div>
        <div className="lines-box">
          <div className="line-1"></div>
          <div className="or-box">OR</div>
          <div className="line-1"></div>
        </div>
        <div className="fb-box">
          <span>
            <img src={facebookImage} alt="#" className='fb-logo' />
          </span>
          <p className='fb-link'>Login with facebook</p>
        </div>
        <div className="forgotten-password-box">
          <p className='forgotten-password-link'>Forgotten your password?</p>
        </div>

    </div>
    <div className="box-2">
      <p>Don't have an account? <span className='sign-up-span'>Sign up</span></p>
    </div>
    <div className="get-app-box">
      <p>Get the app.</p>
    </div>
    <div className="app-store-google-play-box">
      <img src={appStoreImage} alt="#" className='app-store-image'/>
      <img src={googlePlayImage} alt="#" className='google-play-image' />
      
    </div>
    </div>
  )
}

export default Login