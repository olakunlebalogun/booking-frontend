import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './../assets/css/pages/ForgetPassword.css'

const ForgetPassword = () => {
  const navigate = useNavigate()
  const onResetPassword = () => {
    // Implement this to send a mail and execute the reset password
    navigate('/login')
  }

  return (
    <div className='section bg-dark'>
      <div className='section-center'>
        <div className='container'>
          <div className='row'>
            <div className='forgetpassword-form'>
              <div className='form-header' id='header'>
                <h1>Reset Password</h1>
                <p className='sub-heading'>
                  Enter the email address associated with your account and we
                  will send you a link to reset your password
                </p>
              </div>

              <form>
                <div className='form-group'>
                  <span className='form-label'>Email</span>
                  <input className='form-control' type='email' />
                </div>
                {/* <div className='form-check mb-3'>
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
                  </div> */}
                {/* <div className='d-flex align-items-center justify-content-center mt-4 mb-0'>
                    <Link to='/forgot-password' className='small'>
                      Forgot Password?
                    </Link>
                    <button
                      className='btn btn-primary'
                      onClick={() => onResetPassword()}
                    >
                      Continue
                    </button>
                  </div> */}
                <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                  {/* <a className='small' href='login.html'>
                            Return to login
                          </a> */}
                  <Link to='/login' className='small'>
                    Return to login
                  </Link>
                  <button
                    className='btn btn-primary'
                    onClick={() => onResetPassword()}
                  >
                    Reset Password
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

export default ForgetPassword