import { useEffect, useState } from 'react'
import passwordVisible from '../../assets/Icons/eyes-icon-open.svg'

const InputField = ({label, icon, setFocus, focus}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [inputType, setInputType] = useState("password")

    //NEED SOLUTION
    const handleIconClick = () => {
        setIsPasswordVisible(!isPasswordVisible)

        if(isPasswordVisible) setInputType("password")
        else setInputType("text")
  
    }

    return (
        <div className={`input-field-container py-4 px-5 bg-dark-green mb-[5px] rounded-[10px] flex items-center ${focus === label ? 'input-field-active' : '' }`}>
            <div className="input flex flex-col w-full">
                <label htmlFor={label} className={`font-poppins font-extra-bold text-[6pt] ${focus === label ? 'text-base-green' : 'text-inputbox-label'}`}>{label}</label>
                <input 
                    onFocus={() => {
                            setFocus(label)
                       
                        }
                    } 
                    id={label} 
                    type={inputType}
                    className="bg-dark-green font-poppins font-semibold text-[8pt] text-white focus:outline-none"
                />
            </div>
            <div className="icon-holder" onClick={handleIconClick}>
                <img src={(isPasswordVisible && label === "PASSWORD")? passwordVisible : focus === label ? icon[1] : icon[0]} alt="input-icon" className={label === "EMAIL" ? `w-[9pt] h-[7pt]` : `w-[9pt] h-[8pt]`} />
            </div>
        </div>
    )
}

export default InputField