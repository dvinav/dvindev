import Title from './Title'
import LocaleMenu from 'components/LocaleMenu'

const Mobile = () => (
  <header className="h-14 flex text-base rtl:text-lg ltr:tracking-wider px-10 mt-4 lg:hidden content-center">
    <div className="basis-full">
      <Title />
    </div>
    <div className="flex-1 flex items-center justify-items-end ">
      <LocaleMenu />
    </div>
  </header>
)

export default Mobile
