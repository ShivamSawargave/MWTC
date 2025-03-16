import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Feedback from '../components/Feedback'
import Address from '../components/Address'
import Footer from '../components/Footer'
import Contactus from '../components/Contactus'

function Home() {
  return (
    <>
        <div className='bg-white'>
        <Navbar/>
        <Banner/>
        <Hero/>
        <Feedback/>
       
        <Address/>
        <Footer/>
        </div>
    </>
  )
}

export default Home