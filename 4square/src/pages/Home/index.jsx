import React from 'react'
import Layout from '../../component/Layout'

import Intro from '../../component/intro'
import MainContext from './MainContext'
import WhyUs from './WhyUs'
import Footer from '../../component/Footer'
const Home = () => {
  return (
    
      <div className='px-10 sm:overflow-hidden sm:py-5  sm:max-w-full'>
      <Intro/>
      <MainContext/>
      <WhyUs/>
      <Footer/>
      </div>
  

  )
}

export default Home