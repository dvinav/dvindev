import Title from './Title'
import LocaleMenu from 'components/LocaleMenu'

const Mobile = () => (
  <>
    <div className="basis-full lg:hidden">
      <Title />
    </div>
    <div className="flex-1 flex items-center justify-items-end lg:hidden">
      <LocaleMenu />
    </div>
  </>
)

export default Mobile
