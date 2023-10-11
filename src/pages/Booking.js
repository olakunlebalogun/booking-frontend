import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import api from './../api/data';


import './../assets/css/pages/Booking.css'

const Booking = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    email: "",
    phone: "",
    appointmentDate:"",
    service:""
  });
 const [error, setError] = useState("")

  //const{firstName,lastName,email,password,userName,phone}=signUp;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const onAddBooking = async (e) => {
    e.preventDefault();
    // console.log(data)
    const a = await axios.post("http://localhost:7000/api/v1/booking/add", data)
     if (a) {

      navigate('/landing')

   } else {
      setError(a)
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
                  <button className='btn btn-primary' type='submit'>
                    Book Appointment
                  </button>
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
