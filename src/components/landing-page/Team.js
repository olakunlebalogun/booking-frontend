import React from 'react'


import './../../assets/css/landing-page/Team.css'
import ghaf_1 from './../../assets/images/ghaf.jpg'
import oga_2 from './../../assets/images/oga.png'

const Team = () => {
  return (
    <section className='page-section bg-light' id='team'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Our Amazing Team</h2>
          <h3 className='section-subheading text-muted'>
            These are some of the goal driven individuals working tiredlessly to provide pristine services.
          </h3>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='team-member'>
              <img
                className='mx-auto rounded-circle'
                src={oga_2}
                alt='...'
              />
              <h4>Oladapo Olatunji</h4>
              <p className='text-muted'>Chief Executive Officer</p>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Parveen Anand Twitter Profile'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Parveen Anand Facebook Profile'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Parveen Anand LinkedIn Profile'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='team-member'>
              <img
                className='mx-auto rounded-circle'
                src={ghaf_1}
                alt='...'
              />
              <h4>Gafar Oladoja</h4>
              <p className='text-muted'>Chief Operating Officer</p>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Diana Petersen Twitter Profile'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Diana Petersen Facebook Profile'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Diana Petersen LinkedIn Profile'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
          {/* <div className='col-lg-4'>
            <div className='team-member'>
              <img
                className='mx-auto rounded-circle'
                src='assets/img/team/3.jpg'
                alt='...'
              />
              <h4>Larry Parker</h4>
              <p className='text-muted'>Lead Developer</p>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Larry Parker Twitter Profile'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Larry Parker Facebook Profile'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                className='btn btn-dark btn-social mx-2'
                href='#!'
                aria-label='Larry Parker LinkedIn Profile'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div> */}
        </div>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <p className='large text-muted'>
            Our team is driven by a shared vision of enhancing convenience and efficiency in the booking/registration process. We work tirelessly to ensure that our website is not just a tool but a trusted partner that helps our users save time, make informed decisions, and access the services they need with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team