import React, { useState } from 'react'

import Form from "react-validation/build/form";
import AuthService from '../../services/authService'
import './Login.css'
const Login = () => {

  const [formData, setFormData] = useState({loginId: '', loginPassword: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')
  const {loginId, loginPassword} = formData;
  
  const handleChangeInput = (e) => {
    const{name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleLogin=(e)=> {
    e.preventDefault();
    setFormData({loginId: '', loginPassword: ''})

    this.form.validateAll();
    // if (this.checkBtn.context._errors.length === 0) {
      AuthService(loginId, loginPassword).then(
        () => {
          this.props.history.push("/login");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          // setLoading(false);
        }
      );
    // } else {
    //   setLoading(false)
    // }
  }

  return (
    <>
        <p>Login to your account</p>
        <Form  onSubmit={handleLogin}>
        <div className="app__login-form app__flex">
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Login id' name="loginId" value={loginId} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input type="password" className="p-text" placeholder='Login password' name="loginPassword" value={loginPassword} onChange={handleChangeInput} />
        </div>
        
        <button type="button" className="p-text" >
          Login
        </button>
      </div>
      </Form>

    </>
  )
}

export default Login