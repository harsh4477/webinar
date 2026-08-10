import './App.css'
import Header from './component/header'
import Webinar from './component/webinar'
import Speaker from './component/speaker'
import Background from './component/Background'

function App() {
  return (
    <div className='relative p-4 h-screen overflow-auto'>
      <Background />
      <Header />
      
      {/* Primary Page H1 Heading for SEO */}
      <h1 className="sr-only">Webinar Library & Market Insights for Global Investors</h1>
      
      <main id="main-content" className="space-y-8">
        <Webinar />
        {/* <Upcoming /> */}
        <Speaker />
      </main>

      <footer className="relative z-10 text-center py-6 border-t border-white/10 mt-12 text-sm text-gray-200">
        <p>&copy; {new Date().getFullYear()} Wealthyvia Ventures. All rights reserved. Webinar Library & Market Playbooks.</p>
      </footer>
    </div>
  )
}

export default App
