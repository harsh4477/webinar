import './App.css'
import Header from './component/header'
import Webinar from './component/webinar'
import Upcoming from './component/upcoming'

function App() {

  return (
    <div className='relative bg-gray-50 p-4 h-screen overflow-auto'>
      <Header/>
      <Webinar/>
      <Upcoming/>
    </div>
  )
}

export default App
