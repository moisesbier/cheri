import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">🇫🇷</span>
            <span className="logo-text">Maurício Schneider</span>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Início</a></li>
            <li><a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>Sobre</a></li>
            <li><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos') }}>Serviços</a></li>
            <li><a href="#depoimentos" onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos') }}>Depoimentos</a></li>
            <li>
              <a 
                href="https://wa.me/5551984587688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-agendar"
              >
                Agendar
              </a>
            </li>
          </ul>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

