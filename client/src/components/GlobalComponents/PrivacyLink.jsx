import Link from "./Link"

const PrivacyLink = () => {
  return (
    <div className="m-auto privacy-terms-and-condition-links w-[217px]">
        <p className="italic font-poppins font-regular text-[8pt] text-inputbox-label">PUBLINK Copyright ©. All Rights Reserved.</p>
        <div className="privacy links flex justify-between items-center ">
            <Link body="Terms and Condition" to="/" />
            <Link body="Privacy Policy" to="/" />
        </div>
    </div>
  )
}

export default PrivacyLink