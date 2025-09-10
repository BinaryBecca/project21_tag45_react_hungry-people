import { Link } from "react-router"

interface ButtonsProps {
  to: string
  buttonText: string
  backgroundColor: string
  borderColor: string
  paddingX?: string
}

export default function Buttons({ to, buttonText, backgroundColor, borderColor, paddingX = "5rem" }: ButtonsProps) {
  return (
    <>
      <Link
        style={{ backgroundColor, borderColor }}
        className={`flex items-center justify-center text-nowrap p-[1.5rem] text-white text-sm border rounded-[1rem] px-[${paddingX}]`}
        to={to}>
        {buttonText}
      </Link>
    </>
  )
}
