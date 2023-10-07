import React from 'react'


import './../../assets/css/landing-page/Services.css'

const Services = () => {
  return (
    <section className='page-section' id='services'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Services</h2>
          <h3 className='section-subheading text-muted'>
            Serving you is what we do best at Just Klean Lcc.
          </h3>
        </div>
        <div className='row text-center'>
          <div className='col-md-6'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary'></i>
              <i className='fas fa-shopping-cart fa-stack-1x fa-inverse'></i>
            </span>
            <h4 className='my-3'>NIN Registration</h4>
            <p className='text-muted'>
            The National Identification Number (NIN) is a unique 11 digit number that uniquely identifies a citizen or legal resident in Nigeria. This system was incorporated to curb fraud in the nation as the government-mandated everyone to enrol in the National Identity Database (NIDB). After registration, a unique NIN number is randomly chosen and assigned to the individual. To save yourself the hassle of physical registration, you can complete your NIN registration online and this article would put you through on how you can do that. 
            Knowing how to apply for NIN registration online is the easiest way to get it done.
            </p>
          </div>
          <div className='col-md-6'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary'></i>
              <i className='fas fa-laptop fa-stack-1x fa-inverse'></i>
            </span>
            <h4 className='my-3'>BVN Registration</h4>
            <p className='text-muted'>
              Just Klean LCC has partnered with Nigeria Inter-Bank Settlement System Plc (NIBSS), to provide
              Bank Verification Number(BVN) enrollment service around the globe  for all 
              Nigerian Bank Account Holders.BVN is a scheme introduced by the Central Bank Of Nigeria
              (CBN) to protect customers' transactions, enhance maximum security and monitoring of Nigeria banking sector.
            </p>
          </div>
          {/* <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-primary'></i>
              <i className='fas fa-lock fa-stack-1x fa-inverse'></i>
            </span>
            <h4 className='my-3'>Web Security</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Services