import React from 'react'
// import {Navbar, Masthead, Services, Portfolio, About, Team, Clients, Contacts, Footer} from './../components/landing-page'
import Navbar from './../components/landing-page/Navbar'
import Masthead from './../components/landing-page/Masthead'
import Services from './../components/landing-page/Services'
import Portfolio from './../components/landing-page/Portfolio'
import About from './../components/landing-page/About'
import Team from './../components/landing-page/Team'
import Clients from './../components/landing-page/Clients'
import Contacts from './../components/landing-page/Contacts'
import Footer from './../components/landing-page/Footer'


const Landing = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Clients />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Landing