import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show navigation only after scrolling past landing page
      setIsVisible(scrollY > windowHeight * 0.7)

      // Determine active section
      // Check sections in order, prioritizing contact since it's nested inside art
      let current = null
      
      // First, check if contact is in view (with priority)
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        const contactRect = contactElement.getBoundingClientRect()
        // Check if contact section is prominently in view
        const contactCenter = contactRect.top + contactRect.height / 2
        if (contactRect.top <= 300 && contactRect.bottom >= 100 && contactCenter <= window.innerHeight) {
          current = 'contact'
        }
      }
      
      // If contact is not in view, check other sections (excluding art if contact might be in view)
      if (!current) {
        const sections = ['about', 'projects', 'achievements']
        current = sections.find(section => {
          const element = document.getElementById(section)
          if (!element) return false
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        })
        
        // Only check art if no other section is active and contact is not in view
        if (!current) {
          const artElement = document.getElementById('art')
          if (artElement) {
            const artRect = artElement.getBoundingClientRect()
            // Only set art as active if contact is clearly not in view
            const contactElement = document.getElementById('contact')
            if (contactElement) {
              const contactRect = contactElement.getBoundingClientRect()
              // If contact is below the viewport or art section is more prominently in view
              if (contactRect.top > window.innerHeight || artRect.top <= 200) {
                if (artRect.top <= 200 && artRect.bottom >= 200) {
                  current = 'art'
                }
              }
            } else {
              if (artRect.top <= 200 && artRect.bottom >= 200) {
                current = 'art'
              }
            }
          }
        }
      }
      
      setActiveSection(current || 'about')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // Immediately set the active section when clicking
    setActiveSection(sectionId)
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
      <div className="nav-left-bar"></div>
      <div className="nav-container">
        <button
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => scrollToSection('about')}
        >
          <span className="nav-indicator"></span>
          About Me
        </button>
        <button
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => scrollToSection('projects')}
        >
          <span className="nav-indicator"></span>
          Projects
        </button>
        <button
          className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
          onClick={() => scrollToSection('achievements')}
        >
          <span className="nav-indicator"></span>
          Achievements
        </button>
        <button
          className={`nav-link ${activeSection === 'art' ? 'active' : ''}`}
          onClick={() => scrollToSection('art')}
        >
          <span className="nav-indicator"></span>
          Art
        </button>
        <button
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => scrollToSection('contact')}
        >
          <span className="nav-indicator"></span>
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navigation
