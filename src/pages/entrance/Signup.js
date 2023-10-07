import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './../../assets/css/pages/entrance/Signup.css'

const Signup = () => {

  const [data, setData] = useState({
    firstName: "lanre",
    lastName: "balogun",
    email: "larryfu",
    password: "",
    userName: "",
    phone: ""
  });
  const [error, setError] = useState("")
  const navigate = useNavigate()

  //const{firstName,lastName,email,password,userName,phone}=signUp;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onCreateAccount = async (e) => {
    e.preventDefault();
    const out = await axios.post("http://localhost:7000/api/v1/auth/signup", data)
    if (out) {
      navigate('/login')
    } else {
      setError(out)
      console.log(error);
    }
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