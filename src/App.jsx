import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
