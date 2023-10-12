import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'


import './../assets/css/pages/Booking.css'

const Booking = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isSuccessful, setIsSuccessful] = useState(false);
  const [data, setData] = useState({
    email: "",
    phone: "",
    appointmentDate:"",
    service:""
  });
//  const [error, setError] = useState("")

  //const{firstName,lastName,email,password,userName,phone}=signUp;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const onAddBooking = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    // console.log(data)
    const a = await axios.post("http://localhost:7000/api/v1/booking/add", data)
     if (a) {
      setIsLoading(false)
      // setIsSuccessful(true)
      navigate('/landing')

   } else {
      // setError(a)
      setIsLoading(true)
    }
  }

  return (
    <div id='booking' className='section bg-dark'>
      <div className='section-center'>
        <div className='container '>
          <div className='row'>
            <div className='booking-form rounded'>
              <div className='form-header rounded-top'>
                <h1>Book Your Apppointment</h1>
              </div>
              <form onSubmit={onAddBooking}>
                <div className='form-group'>
                  <span className='form-label'>Email</span>
                  <input
                    className='form-control'
                    type='text'
                    name='email'
                    value={data.email}
                    onChange={onInputChange}
                  />
                </div>
                <div className='form-group'>
                  <span className='form-label'>Phone Number</span>
                  <input
                    className='form-control'
                    type='text'
                    name='phone'
                    value={data.phone}
                    onChange={onInputChange}
                  />
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <span className='form-label'>Appointment Date</span>
                      <input
                        className='form-control'
                        type='date'
                        name='appointmentDate'
                        value={data.appointmentDate}
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='form-radio'>
                    <p>
                      Select appointment type <span>(Choose atleast one)</span>
                    </p>

                    <label htmlFor='NIN'>
                      <input
                        className='form-radio-input'
                        type='radio'
                        id='service1'
                        name='service'
                        value="NIN"
                        onChange={onInputChange}
                      />
                      <span></span>NIN
                    </label>
                    <label htmlFor='BVN'>
                      <input
                        className='form-radio-input'
                        type='radio'
                        id='service2'
                        name='service'
                        value="BVN"
                        onChange={onInputChange}
                      />
                      <span></span>BVN
                    </label>
                    <label htmlFor='BOTH'>
                      <input
                        className='form-radio-input'
                        type='radio'
                        id='service3'
                        name='service'
                        value="BOTH"
                        onChange={onInputChange}
                      />
                      <span></span>BOTH
                    </label>
                  </div>
                </div>
                <div className='form-btn'>
                  {isLoading ? (
                    <button className='btn btn-primary' type='submit' disabled>
                      <span
                        className='spinner-border spinner-border-sm'
                        aria-hidden='true'
                      ></span>
                      <span role='status'>Loading...</span>
                    </button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      Book Appointment
                    </button>
                  )}
                </div>
              </form>
              {/* <div>
                {isSuccessful && (
                  <div
                    class='alert alert-primary d-flex align-items-center'
                    role='alert'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='bi bi-exclamation-triangle-fill flex-shrink-0 me-2'
                      viewBox='0 0 16 16'
                      role='img'
                      aria-label='Warning:'
                    >
                      <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                    </svg>
                    <div>An example alert with an icon</div>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
