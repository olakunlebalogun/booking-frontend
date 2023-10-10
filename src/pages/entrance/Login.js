import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './../../assets/css/pages/entrance/Login.css'
const Login = () => {
  
  const [data, setData] = useState({
    email: "",
    password: ""
  });
 const [error, setError] = useState("")

 const onInputChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value })
}
  const navigate = useNavigate()
  const onLogin = async (e) => {
    e.preventDefault();
    console.log(data)
    const a = await axios.post("http://localhost:7000/api/v1/auth/login", data)
    console.log(a.data.data.accountType);
     if (a) {
      if(a.data.data.accountType==="USER"){
        navigate('/landing')
      }
      else{
        navigate('/admin/dashboard')
      }
     
   } else {
      setError(a)
    }
  }
  return (
    <div className='section bg-dark'>
      <div className='section-center'>
        <div className='container'>
          <div className='row'>
            <div className='booking-form rounded'>
              <div className='form-header rounded-top' id='header'>
                <h1>Login</h1>
              </div>
              <form onSubmit={onLogin}>
                <div className='form-group'>
                  <span className='form-label'>Email</span>
                  <input className='form-control' type='email'  name='email'
                      value={data.email}
                      onChange={onInputChange}/>
                </div>
                <div className='form-group'>
                  <span className='form-label'>Password</span>
                  <input className='form-control' type='password'  name='password'
                      value={data.password}
                      onChange={onInputChange}/>
                </div>
                <div className='form-check mb-3'>
                  <input
                    className='form-check-input'
                    id='inputRememberPassword'
                    type='checkbox'
                    value=''
                  />
                  <label
                    className='form-check-label txt'
                    for='inputRememberPassword'
                  >
                    Remember Password
                  </label>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                  <Link to='/forgot-password' className='small'>
                    Forgot Password?
                  </Link>
                  <button className='btn btn-primary'  type='submit'>
                    Login
                  </button>
                </div>
                <div className='card-footer text-center py-3'>
                  <div className='small'>
                    <Link to='/signup'>Need an account? Sign up!</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
