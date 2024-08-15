import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Pages
import LandingPage from './pages/LandingPage/Landing'
import Portfolio from './pages/Portfolio/Portfolio'

const App = () => {
  return (
    <Routes>
      <Route path='/landing' Component={LandingPage}/>
      <Route path='/' Component={Portfolio}/>
    </Routes>
  )
}

export default App