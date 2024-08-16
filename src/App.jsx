import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Portfolio}/>
      <Route path='/resume' Component={Resume} />
    </Routes>
  )
}

export default App