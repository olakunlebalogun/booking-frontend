import React from 'react'
import { Link } from 'react-router-dom'

import nav_image from "./../../assets/images/apple-touch-icon.png"
import './../../assets/css/landing-page/Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
      <div className='container'>
        <a className='navbar-brand' href='#page-top'>
          <img src={nav_image} alt='...' />
        </a>
        <h3 className='logo'>Just Klean</h3>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i className='fas fa-bars ms-1'></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav text-uppercase ms-auto py-4 py-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='#services'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#team'>
                Team
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
            {/* <li className='nav-item'>
              <Link to='/booking' className='nav-link'>
                Book
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Sign in
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link'>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
