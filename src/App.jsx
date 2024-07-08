import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Pages
import LandingPage from './pages/LandingPage/Landing'
import Portfolio from './pages/Portfolio/Portfolio'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={LandingPage}/>
      <Route path='/portfolio' Component={Portfolio}/>
    </Routes>
  )
}

export default App