import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './../../assets/css/pages/entrance/Login.css'
const Login = () => {

  	const navigate = useNavigate()
    const onLogin = () => {
      navigate('/landing')
    }
  return (
    <div className=''>
      <main>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div className='card shadow-lg border-0 rounded-lg mt-5'>
                <div className='card-header'>
                  <h3 className='text-center font-weight-light my-4'>Login</h3>
                </div>
                <div className='card-body'>
                  <form>
                    <div className='form-floating mb-3'>
                      <input
                        className='form-control'
                        id='inputEmail'
                        type='email'
                        placeholder='name@example.com'
                      />
                      <label for='inputEmail'>Email address</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        className='form-control'
                        id='inputPassword'
                        type='password'
                        placeholder='Password'
                      />
                      <label for='inputPassword'>Password</label>
                    </div>
                    <div className='form-check mb-3'>
                      <input
                        className='form-check-input'
                        id='inputRememberPassword'
                        type='checkbox'
                        value=''
                      />
                      <label
                        className='form-check-label'
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
                  </form>
                </div>
                <div className='card-footer text-center py-3'>
                  <div className='small'>
                    <Link to='/signup'>Need an account? Sign up!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login