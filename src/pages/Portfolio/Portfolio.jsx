import React from 'react'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import Education from '../../components/Education/Education'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Experience from '../../components/Experience/Experience'
import Contact from '../../components/Contact/Contact'

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