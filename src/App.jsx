import { useState, useEffect } from 'react'
import SplashCursor from './components/SplashCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { internshipsList, leadershipList } from './data/portfolioData'

function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false)
  const hasInternships = Boolean(internshipsList && internshipsList.length > 0)
  const hasLeadership = Boolean(leadershipList && leadershipList.length > 0)

  // Safety fallback: ensure isPreloaderDone becomes true after max 2800ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderDone(true)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />
      <Preloader onComplete={() => setIsPreloaderDone(true)} />
      <Navbar />
      <Hero isPreloaderDone={isPreloaderDone} />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      {hasInternships && <Internships />}
      {hasLeadership && <Leadership />}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
