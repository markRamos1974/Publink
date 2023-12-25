import React from 'react'
import Header from '../GlobalComponents/Header'
import Form from './components/form'
import PrivacyLink from '../GlobalComponents/PrivacyLink'

import testimonial from '../../assets/Images/Testimony.png'

function Login() {
  return (
    <div className={`login-container xl:px-[197px] md:p-[73px] lg:px-[100px] lg:py-[40px] lg:flex lg:flex-col lg:justify-between`}>
      <Header />
      <div className='hero-section flex justify-between items-center lg:mb-[92px]'>
        <div className='content hidden lg:block'>
          <h1 className='font-cutive font-regular text-[50px] text-white w-[650px] leading-[60px] mb-[20px] xl:text-[70px] xl:w-[700px] xl:leading-[90px]'>New ways to <span className='text-base-green'>stay connected</span></h1>
          <p className='font-poppins font-regular text-base text-white w-[374px] leading-8 mb-[30px] xl:text-lg xl:w-[421px] xl:leading-10'>Whether you are catching up with friends, collaborating with colleagues, or meeting new people, we've got you covered.</p>
          <img src={testimonial} alt='testimonial' className='w-[330px] h-[50px] mb-[30px]'/>
          <button className='py-5 px-[59px] bg-base-green rounded-[20px] font-poppins font-bold text-base'>JOIN NOW</button>
        </div> 
        <Form />
      </div>
      <PrivacyLink />
    </div>
  )
}

export default Login