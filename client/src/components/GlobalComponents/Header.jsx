import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Logo from '../../assets/Images/publink-logo-mobile.png'
import HamburgerIcon from '../../assets/Icons/hamburger-menu.svg'

const Header = () => {
  return (
    
    <header className='flex justify-between items-center mb-9'>
      <a href='/'><img src={Logo} alt='publink-logo'/></a>

      <div className='header-left-side'>
          <img src={HamburgerIcon} alt='hamburger-menu' className='lg:hidden'/>
          <div className='nav-menu hidden lg:block'>
            <ul className='text-white text-xl font-poppins font-semibold flex'>
              <li className='mr-[54px]'><a href='#'>Login</a></li>
              <li className='mr-[54px]'><a href='#'>About</a></li>
              <li className=''><a href='#'>Signup</a></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header