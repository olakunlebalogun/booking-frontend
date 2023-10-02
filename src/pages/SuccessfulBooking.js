import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './../assets/css/pages/SuccessfulBooking.css'


const SuccessfulBooking = () => {
  const navigate = useNavigate()
  const onSuccess = () => {

     navigate('/landing')
  }
  return (
    // <div id='myModal' className='modal fade'>
    //   <div className='modal-dialog modal-confirm'>
    //     <div className='modal-content'>
    //       <div className='modal-header'>
    //         <div className='icon-box'>
    //           <i className='material-icons'>&#xE876;</i>
    //         </div>
    //         <h4 className='modal-title w-100'>Awesome!</h4>
    //       </div>
    //       <div className='modal-body'>
    //         <p className='text-center'>
    //           Your booking has been confirmed. Check your email for detials.
    //         </p>
    //       </div>
    //       <div className='modal-footer'>
    //         <button className='btn btn-success btn-block' data-dismiss='modal'>
    //           OK
    //         </button>
    //       </div>
    //       <div>
    //         <Link to='/landing'>SuccessfulBooking</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>




    // <div className='main'>
    //   <div class='card'>
    //     <div
    //       style={{
    //         borderRadius: '200px',
    //         height: '200px',
    //         width: '200px',
    //         background: '#F8FAF5',
    //         margin: '0 auto',
    //       }}
    //     >
    //       <i class='checkmark'>✓</i>
    //     </div>
    //     <h1>Success</h1>
    //     <p>
    //       We received your purchase request;
    //       <br /> we'll be in touch shortly!
    //     </p>
    //   </div>
    // </div>



     <div class="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <div class="mb-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-success" width="75" height="75"
                        fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
                <div class="text-center">
                    <h1>Thank You !</h1>
                    <p>We've send the link to your inbox. Lorem ipsum dolor sit, </p>
                    <button class="btn btn-primary" onClick={() => onSuccess()}>Back Home</button>
                </div>
            </div>
            </div>
  )
}

export default SuccessfulBooking