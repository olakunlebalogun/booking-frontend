import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

  	const navigate = useNavigate()
    const onLogin = () => {
      navigate('/landing')
    }
  return (
    <div className='bg-primary'>
          <main>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-5'>
                  <div className='card shadow-lg border-0 rounded-lg mt-5'>
                    <div className='card-header'>
                      <h3 className='text-center font-weight-light my-4'>
                        Login
                      </h3>
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
        {/* </div> */}
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
        crossorigin='anonymous'
      ></script>
      <script src='js/scripts.js'></script>
    </div>



    // <div class='container'>
    //   <div class='row justify-content-center'>
    //     <div class='col-lg-5'>
    //       <div class='card shadow-lg border-0 rounded-lg mt-5'>
    //         <div class='card-header'>
    //           <h3 class='text-center font-weight-light my-4'>Login</h3>
    //         </div>
    //         <div class='card-body'>
    //           <form>
    //             <div class='form-floating mb-3'>
    //               <input
    //                 class='form-control'
    //                 id='inputEmail'
    //                 type='email'
    //                 placeholder='name@example.com'
    //               />
    //               <label for='inputEmail'>Email address</label>
    //             </div>
    //             <div class='form-floating mb-3'>
    //               <input
    //                 class='form-control'
    //                 id='inputPassword'
    //                 type='password'
    //                 placeholder='Password'
    //               />
    //               <label for='inputPassword'>Password</label>
    //             </div>
    //             <div class='form-check mb-3'>
    //               <input
    //                 class='form-check-input'
    //                 id='inputRememberPassword'
    //                 type='checkbox'
    //                 value=''
    //               />
    //               <label class='form-check-label' for='inputRememberPassword'>
    //                 Remember Password
    //               </label>
    //             </div>
    //             <div class='d-flex align-items-center justify-content-between mt-4 mb-0'>
    //               <a class='small' href='password.html'>
    //                 Forgot Password?
    //               </a>
    //               <a class='btn btn-primary' href='index.html'>
    //                 Login
    //               </a>
    //             </div>
    //           </form>
    //         </div>
    //         <div class='card-footer text-center py-3'>
    //           <div class='small'>
    //             <a href='register.html'>Need an account? Sign up!</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login