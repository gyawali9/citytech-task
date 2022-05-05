import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
        <p>Login to your account</p>
        <div className="app__login-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder='Login id' />
        </div>
        <div className="app__flex">
          <input type="password" className="p-text" placeholder='Login password' />
        </div>
        
        <button type="button" className="p-text" >
          Login
        </button>
      </div>

    </>
  )
}

export default Login