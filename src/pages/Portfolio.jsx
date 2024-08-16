import React from 'react'
// Components
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}

export default Portfolio