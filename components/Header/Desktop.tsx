import Nav from './Nav'
import Title from './Title'

const Desktop = () => (
  <>
    <div className="flex-1 hidden lg:block">
      <Title />
    </div>
    <div className="flex-1 flex items-center justify-items-end hidden lg:block">
      <Nav />
    </div>
  </>
)

export default Desktop
