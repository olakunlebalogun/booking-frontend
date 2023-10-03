import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


import './../../assets/css/pages/entrance/Signup.css'

const Signup = () => {
  	const navigate = useNavigate()
    const onCreateAccount = () => {
      // Create a new account by interrracting with the appropriate endpoint
      // Route to login
      navigate('/login')
    }
  return (
    

    <div id='booking' className='section bg-dark'>
      <div className='section-center'>
        <div className='container'>
          <div className='row'>
            <div className='signup-form rounded'>
              <div className='form-header rounded-top'>
                <h1 className='text-center'> Create Account</h1>
              </div>
              <form>
                <div className='row'>
                  <div className='form-group col-6'>
                    <span className='form-label'>Firstname</span>
                    <input className='form-control' type='text' />
                  </div>
                  <div className='form-group col-6'>
                    <span className='form-label'>Lastname</span>
                    <input className='form-control' type='text' />
                  </div>
                </div>
                <div className='row'>
                  <div className='form-group col-6'>
                    <span className='form-label'>Email</span>
                    <input className='form-control' type='email' />
                  </div>
                  <div className='form-group col-6'>
                    <span className='form-label'>Password</span>
                    <input className='form-control' type='password' />
                  </div>
                </div>
                <div className='row'>
                  <div className='form-group col-6'>
                    <span className='form-label'>Username</span>
                    <input className='form-control' type='text' />
                  </div>
                  <div className='form-group col-6'>
                    <span className='form-label'>Phone Number</span>
                    <input className='form-control' type='phone' />
                  </div>
                </div>

                {/* <div className='mt-4 mb-0'>
                  <div className='d-grid'>
                    <button
                      className='btn btn-primary btn-block'
                      onClick={() => onCreateAccount()}
                    >
                      Create Account
                    </button>
                  </div>
                </div> */}

                <div className='form-btn'>
                  <button
                    className='submit-btn col-12'
                    onClick={() => onCreateAccount()}
                  >
                    Create account
                  </button>
                </div>
                <div className='card-footer text-center py-3'>
                  <div className='small'>
                    <Link to='/login'>Already have an account? Sign in!</Link>
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

export default Signup