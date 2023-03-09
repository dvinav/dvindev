import NavLink from 'components/NavLink'

const NavBar = () => {
  return (
    <div className="text-sm h-28 rtl:text-lg ltr:tracking-wider w-full flex items-center lg:hidden fixed bottom-0">
      <ul className="h-full flex uppercase items-center w-full flex flex-1 basis-full gap-x-6 rtl:gap-x-8 justify-center">
        <NavLink>home</NavLink>
        <NavLink>about</NavLink>
        <NavLink>contact</NavLink>
      </ul>
    </div>
  )
}

export default NavBar
