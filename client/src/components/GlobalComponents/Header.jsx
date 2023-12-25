import { useState } from 'react'
import HamburgerIcon from '../../assets/Icons/hamburger-menu.svg'



const Header = () => {

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  return (
    
    <header className='flex justify-between items-center mb-9 md:mb-[73px] lg:mb-[69px]'>
      <a href='/' className='w-[111.59px] h-[25.9px] bg-no-repeat bg-center bg-logo-mobile md:w-[186.54px] md:h-[43.3px] md:bg-logo-tablet lg:w-[224px] lg:h-[54px] lg:bg-logo-desktop'></a>

      <div className='header-left-side'>

          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`cursor-pointer hamburger-menu-button w-[25px] h-[25px] border-[1pt] ${isHovered ? 'border-base-green' : 'border-white' } bg-transparent rounded-[5px] rotate-45 flex justify-center items-center md:h-[33.3px] md:w-[33.3px] lg:hidden`}>
            <div className={`rotate-90 rounded-[1pt] w-[11px] h-[11px] ${isHovered ? 'bg-base-green' : 'bg-white' } md:h-[15.65px] md:w-[15.65px]`}></div>
          </div>

          <div className='nav-menu hidden lg:block'>
            <ul className='text-white text-xl font-poppins font-semibold flex'>
              <li className='mr-[54px]'><a href='#' className=' hover:text-base-green'>Login</a></li>
              <li className='mr-[54px]'><a href='#' className=' hover:text-base-green'>About</a></li>
              <li className=''><a href='#' className=' hover:text-base-green'>Signup</a></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header