import NavLink from './NavLink'

const Nav = () => {
  return (
    <div className="h-full flex-1 uppercase flex items-center">
      <div className="basis-full"></div>
      <ul className="basis-auto w-full flex gap-x-20">
        <NavLink>home</NavLink>
        <NavLink>skills</NavLink>
        <NavLink>contact</NavLink>
        <NavLink>about</NavLink>
      </ul>
    </div>
  )
}

export default Nav
