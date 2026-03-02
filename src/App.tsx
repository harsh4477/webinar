import './App.css'
import Header from './component/header'
import Webinar from './component/webinar'
import Upcoming from './component/upcoming'
import Speaker from './component/speaker'
import Background from './component/Background'
function App() {

  return (
    <div className='relative p-4 h-screen overflow-auto'>
      <Background />
      <Header />
      <Webinar />
      <Upcoming />
      <Speaker />
    </div>
  )
}

export default App
