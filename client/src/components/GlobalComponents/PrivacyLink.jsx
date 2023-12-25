import Link from "./Link"

const PrivacyLink = () => {
  return (
    <div className="m-auto privacy-terms-and-condition-links w-[217px] md:w-[326px] lg:flex lg:w-[692px] lg:justify-between lg:items-center lg:my-0">
        <p className="italic font-poppins font-regular text-[8pt] text-inputbox-label md:text-base">PUBLINK Copyright ©. All Rights Reserved.</p>
        <div className="privacy links flex justify-between items-center lg:w-[326px]">
            <Link body="Terms and Condition" to="/" />
            <Link body="Privacy Policy" to="/" />
        </div>
    </div>
  )
}

export default PrivacyLink