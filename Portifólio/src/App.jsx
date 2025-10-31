import { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Main from './components/Main'
import Projects from './components/Projects'
import Habilidades from './components/Habilidades'
import Contatos from './components/Contatos'
import Footer from './components/Footer'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroBanner />
      <Main />
      <Projects />
      <Habilidades />
      <Contatos />
      <Footer />
    </>
  )
}

export default App



