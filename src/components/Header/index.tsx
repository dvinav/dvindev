import Nav from './Nav'

const Header = () => {
  return (
    <header className="border-2 border-red-500 h-14 flex dark:text-slate-50 text-slate-900 font-medium tracking-wider">
      <div className="border-2 border-blue-500 flex-1" />
      <div className="border-2 border-green-500 flex-1 flex items-center justify-items-end">
        <Nav />
      </div>
    </header>
  )
}

export default Header
