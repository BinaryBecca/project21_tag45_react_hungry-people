import { NavLink } from "react-router"

export default function Nav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? "border-t border-b h-full p-[.5rem]" : "p-[.5rem] cursor-pointer"}`
  return (
    <>
      <nav className="container mx-auto flex flex-row justify-between px-[8rem] py-[2rem] text-white">
        <NavLink to="/" className={linkClass}>
          HOME
        </NavLink>
        <NavLink to="team" className={linkClass}>
          TEAM
        </NavLink>
        <img className="max-w-[8rem] object-contain" src="/nav_icon.png" alt="Steering wheel" />
        <NavLink to="menu" className={linkClass}>
          MENU
        </NavLink>
        <NavLink to="booking" className={linkClass}>
          BOOKING
        </NavLink>
      </nav>
    </>
  )
}
