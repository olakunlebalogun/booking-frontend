import React from 'react'


import './../assets/css/pages/Booking.css'

const Booking = () => {
  return (
    <div id='booking' className='section bg-dark'>
      <div className='section-center'>
        <div className='container '>
          <div className='row'>
            <div className='booking-form rounded'>
              <div className='form-header rounded-top'>
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
