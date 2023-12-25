import React from 'react'
import Header from '../GlobalComponents/Header'
import Form from './components/form'
import PrivacyLink from '../GlobalComponents/PrivacyLink'

const backgroundPath = {
   
}

function Login() {
  return (
    <div className={`login-container w-screen h-screen bg-mobile bg-no-repeat bg-cover relative px-10 py-9`}>
      <Header />
      <Form />

      <PrivacyLink />
    </div>
  )
}

export default Login