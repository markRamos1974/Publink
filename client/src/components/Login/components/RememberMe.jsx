import checkIcon from '../../../assets/Icons/check.svg'

const RememberMe = ({isActive, setIsActive}) => {
    return (
        <div className="remember-me-interaction flex items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
            <div className={`mr-[8px] w-[14px] h-[14px] bg-transparent rounded-[3px] flex justify-center items-center ${isActive ? 'custom-checkbox-active' : 'custom-checkbox-inActive'} md:w-6 md:h-6 md:mr-4`}>
                <img src={checkIcon} alt="check" className={`${isActive ? 'w-[5.64px] h-[4.61px] md:w-[12px] md:h-[12px]' : 'hidden'}`}/>
            </div>
            <p className="font-poppins font-semibold italic text-[8pt] text-white md:text-base">Remember Me</p>
        </div>  
    )


}

export default RememberMe