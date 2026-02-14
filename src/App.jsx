import { useState, useEffect } from 'react'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Art from './components/Art'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Landing />
      <Navigation />
      <About />
      <Projects scrollY={scrollY} />
      <Achievements />
      <Art />
      <Contact />
    </div>
  )
}

export default App
