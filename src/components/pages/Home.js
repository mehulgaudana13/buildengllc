import React from 'react'
import Navbar from '../navbar/Navbar'
import MainSection from '../others/MainSection'
import Services from '../others/Services'
import BluidSection from '../others/BluidSection'
import ProjectSection from '../others/ProjectSection'
import Testimonials from '../others/Testimonials'
import Connect from '../others/Connect'
import Copyright from '../others/Copyright'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MainSection />
        <Services />
        <BluidSection />
        <ProjectSection />
        <Testimonials />
        <Connect />
        <Copyright />
    </div>
  )
}

export default Home
