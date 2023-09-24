import React from 'react'


import './../assets/css/pages/Booking.css'

const Booking = () => {
  return (
    // <div id='booking' className='section mt-4'>
    //   <div className='section-center'>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='booking-form'>
    //           <div className='form-header mb-4'>
    //             <h1>Book Your Apppointment</h1>
    //           </div>
    //           <form>
    //             <div class='mb-3'>
    //               <label for='exampleInputEmail1' class='form-label'>
    //                 Email address
    //               </label>
    //               <input
    //                 type='email'
    //                 class='form-control'
    //                 id='exampleInputEmail1'
    //                 aria-describedby='emailHelp'
    //               />
    //               <div id='emailHelp' class='form-text'>
    //                 We'll never share your email with anyone else.
    //               </div>
    //             </div>
    //             <div class='mb-3'>
    //               <label for='exampleInputEmail1' class='form-label'>
    //                 Email address
    //               </label>
    //               <input
    //                 type='email'
    //                 class='form-control'
    //                 id='exampleInputEmail1'
    //                 aria-describedby='emailHelp'
    //               />
    //               <div id='emailHelp' class='form-text'>
    //                 We'll never share your email with anyone else.
    //               </div>
    //             </div>
    //             <div class='mb-3'>
    //               <label for='exampleInputPassword1' class='form-label'>
    //                 Password
    //               </label>
    //               <input
    //                 type='password'
    //                 class='form-control'
    //                 id='exampleInputPassword1'
    //               />
    //             </div>
    //             <div class='mb-3 form-check'>
    //               <input
    //                 type='checkbox'
    //                 class='form-check-input'
    //                 id='exampleCheck1'
    //               />
    //               <label class='form-check-label' for='exampleCheck1'>
    //                 Check me out
    //               </label>
    //             </div>
    //             <button type='submit' class='btn btn-primary'>
    //               Submit
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id='booking' className='section'>
      <div className='section-center'>
        <div className='container'>
          <div className='row'>
            <div className='booking-form'>
              <div className='form-header'>
                <h1>Book Your Apppointment</h1>
              </div>
              <form>
                <div className='form-group'>
                  <span className='form-label'>Email</span>
                  <input className='form-control' type='text' />
                </div>
                <div className='form-group'>
                  <span className='form-label'>Phone Number</span>
                  <input className='form-control' type='text' />
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <span className='form-label'>Appointment Date</span>
                      <input className='form-control' type='date' />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='form-checkbox'>
                    <p>
                      Select appointment type <span>(Choose atleast one)</span>
                    </p>
                    {/* <div class='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='nin'
                        id='flexCheckDefault'
                        name='app-type'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault'
                      >
                        Default checkbox
                      </label>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='bvn'
                        id='flexCheckChecked'
                        name='app-type'
                        checked
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckChecked'
                      >
                        Checked checkbox
                      </label>
                    </div> */}

                    <label htmlFor='nin'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='nin'
                        id='nin'
                        name='app-type'
                      />
                      <span></span>NIN
                    </label>
                    <label htmlFor='bvn'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='bvn'
                        id='bvn'
                        name='app-type'
                      />
                      <span></span>BVN
                    </label>
                  </div>
                </div>
                <div className='form-btn'>
                  <button className='submit-btn'>Book Appointment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
