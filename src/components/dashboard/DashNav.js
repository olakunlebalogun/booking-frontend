import React from 'react'
import { Link } from 'react-router-dom'


import nav_image from './../../assets/images/apple-touch-icon.png'


const DashNav = () => {
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
          <form className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0'>
            <div className='input-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Search for...'
                aria-label='Search for...'
                aria-describedby='btnNavbarSearch'
              />
              <button
                className='btn btn-primary'
                id='btnNavbarSearch'
                type='button'
              >
                <i className='fas fa-search'></i>
              </button>
            </div>
          </form>
          {/* <!-- Navbar--> */}
          <ul className='navbar-nav ms-auto ms-md-0 me-3 me-lg-4'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                href='https://www.google.com'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fas fa-user fa-fw'></i>
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdown'
              >
                {/* <li>
                <hr className='dropdown-divider' />
              </li> */}

                <li className='dropdown-item'>
                  <div className='small'>Logged in as:</div>
                  Start Bootstrap
                </li>
                <li>
                  {/* <a className='dropdown-item' href='#!'>
                  Logout
                </a> */}
                  <Link to='/login' className='dropdown-item'>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashNav