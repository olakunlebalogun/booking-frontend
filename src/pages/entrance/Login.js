import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './../../assets/css/pages/entrance/Login.css'
const Login = () => {

  	const navigate = useNavigate()
    const onLogin = () => {
      navigate('/landing')
    }
  return (
    <div  className='section'>
      <div className='section-center'>
        <div className='container'>
          <div className='row'>
            <div className='booking-form'>
              <div className='form-header'id="header">
                <h1>Login</h1>
              </div>
              <form>
                <div className='form-group'>
                  <span className='form-label'>Email</span>
                  <input className='form-control' type='email'/>
                </div>
                <div className='form-group'>
                  <span className='form-label'>Password</span>
                  <input className='form-control' type='password'/>
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
                      <button
                        className='btn btn-primary'
                        onClick={() => onLogin()}
                      >
                        Login
                      </button>
                    </div>
                    <div className='card-footer text-center py-3'>
                      <div className='small'>
                        
                        <Link to='/signup'>
                          Need an account? Sign up!
                        </Link>
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