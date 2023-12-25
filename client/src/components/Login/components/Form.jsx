import React, { useState } from 'react'
import InputField from '../../GlobalComponents/InputField'

import emailIcon from '../../../assets/Icons/email-icon.svg'
import emailIconActive from '../../../assets/Icons/email-icon-active.svg'
import visibleIcon from '../../../assets/Icons/eyes-icon-close-unactive.svg'
import visibleIconActive from '../../../assets/Icons/eyes-icon-close-active.svg'
import RememberMe from './RememberMe'
import Link from '../../GlobalComponents/Link'
import googleLogo from '../../../assets/Images/google-logo.png'


const Form = () => {
    const [focus, setFocus] = useState(null)
    const [isActive, setIsActive] = useState(false)

    const changeFocus = (focused) => {
        setFocus(focused)
    }
  return (
   <div className='form relative w-full bg-darker-green px-5 py-6 rounded-[10px] mb-9'>
        <form className=''>
            <h1 className='font-poppins text-lg font-bold text-white text-center mb-6'>LOGIN</h1>
            <InputField label="EMAIL" icon={[emailIcon, emailIconActive]} setFocus={changeFocus} focus={focus}/>
            <InputField label="PASSWORD" icon={[visibleIcon, visibleIconActive]} setFocus={changeFocus} focus={focus}/>

            <div className='w-full my-[18px] flex justify-between items-center'>
                <RememberMe isActive={isActive} setIsActive={setIsActive}/> 
                <Link body="Forget password?" to="/"/>
            </div>

            <button className='w-full font-poppins font-bold text-[8pt] text-darker-green bg-base-green rounded-[10px] py-[15px] mb-[5px]'>LOGIN</button>
        
        </form>
        <div className='flex flex-col'>
            <button className='text-white w-full font-poppins font-bold text-[8pt] bg-light-blue rounded-[10px] py-[15px] mb-[5px]'>SIGN UP</button>
            <button className='bg-white  flex justify-center items-center rounded-[10px] py-[15px]'>
                <img src={googleLogo} alt='google-logo' className='w-3 h-3 mr-3'/>
                <p className='font-poppins font-bold text-[8pt] text-darker-green'>SIGN UP WITH GOOGLE</p>
            </button>
        </div>
       
   </div>
  )
}

export default Form
