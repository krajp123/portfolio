import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['home', 'Home'], ['education', 'Education'], ['experience', 'Experience'], ['projects', 'Projects'], ['certificates', 'Certificates'], ['about', 'About'], ['contact', 'Contact']]

export default function Navbar() {
  const [active, setActive] = useState(() => window.location.hash.slice(1) || 'home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const sections = links.map(([id]) => ({
      id,
      element: document.getElementById(id),
    })).filter(s => s.element)

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActive(sectionId)
          window.history.pushState({}, '', `#${sectionId}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach(s => observer.observe(s.element))

    return () => observer.disconnect()
  }, [])

  const handleNavigation = (event, id) => {
    event.preventDefault()
    setActive(id)
    setIsOpen(false)
    window.history.pushState({}, '', `#${id}`)
    const target = document.getElementById(id)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavigation(e, 'home')}>
          <span className="logo-mark">K</span>
        </a>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-links-container">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link ${active === id ? 'active' : ''}`}
                onClick={(e) => handleNavigation(e, id)}
              >
                {label}
                {active === id && <span className="active-indicator" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}