import React from 'react'

import './../../assets/css/landing-page/Masthead.css'


const Masthead = () => {
  return (
    <header className='masthead'>
      <div className='container'>
        <div className='masthead-subheading'>Welcome To Our Studio!</div>
        <div className='masthead-heading text-uppercase'>It's Nice To Meet You</div>
        <a className='btn btn-primary btn-xl text-uppercase' href='#services'>
          Tell Me More
        </a>
      </div>
    </header>
  )
}

export default Masthead