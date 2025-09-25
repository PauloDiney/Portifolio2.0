import { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <><Header />
      <HeroBanner />

    </>
  )
}

export default App



