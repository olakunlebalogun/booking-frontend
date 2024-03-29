import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from './../pages/entrance/Login'
import Signup from './../pages/entrance/Signup'
import ForgetPassword from '../pages/ForgetPassword'
import Booking from './../pages/Booking'
import SuccessfulBooking from '../pages/SuccessfulBooking'
import Dashboard from '../pages/Dashboard'





const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgot-password' element={<ForgetPassword />} />
        <Route path='landing' element={<Landing />} />
        <Route path='booking' element={<Booking />} />
        <Route path='successful-booking' element={<SuccessfulBooking />} />


{/* Admin routes */}
        <Route path='admin/dashboard' element={<Dashboard />} />


      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter