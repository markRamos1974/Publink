const Link = ({body, to}) => {
  return (
    <a href={to} className="font-poppins font-regular text-base-green italic underline text-[8pt] hover:text-light-blue md:text-base">{body}</a>
  )
}

export default Link