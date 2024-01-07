import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './routes/Container'
import Admin from './components/admin/Admin'
import Login from './components/Login'
import './App.css'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='login' element={<Login />}/>
          <Route path='/' element={<Container />}>
            <Route index element={<Admin />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
