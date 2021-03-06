import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    document.title = 'MiraPort'
    Aos.init({ duration: 1000 })
  })

  return (
    <div className={styles.App}>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
