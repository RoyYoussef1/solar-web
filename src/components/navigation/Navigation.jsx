import React, { useState } from 'react'
import './Navigation.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

// Import your logo icon
import LogoIcon from '../../assets/logo.png'

//Components
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Projects from '../../pages/projects/Projects'
import Button from '../button/Button'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };
  return (
    <BrowserRouter>
      <div className='navigation-section'>
          <div className='navigation-wrapper'>
            <div className='navigation-container'>
                <div className='logo-container'>
                    <NavLink to='/'><img src={LogoIcon} alt="Logo" className='logo-icon' /></NavLink>
                </div>
                <div className='navigation-links'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-nav' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-nav' : '')}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-nav' : '')}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-nav' : '')}>Projects</NavLink>
                    </li>
                </div>
                <Button buttonLabel={'Get a Quote'} buttonURL={'/contact'}></Button>
            </div>
          </div>
      </div>
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
            <ul>
                <li>
                    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
                </li>
            </ul>
        </div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
