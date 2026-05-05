// Navbar.jsx
// Top navigation bar — sticky, mobile-responsive with a hamburger menu.

import { useState, useEffect } from 'react'

// Navigation links — labels map to section IDs on the page
const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'What We Offer', href: '#offer' },
  { label: 'Expectations', href: '#expectations' },
  { label: 'Referrals',   href: '#referrals' },
  { label: 'Apply',       href: '#apply' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  // Add a subtle shadow when the user scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">

        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2 no-underline" onClick={handleLinkClick}>
          {/* Simple SVG leaf icon as brand mark */}
          <span className="w-8 h-8 flex items-center justify-center bg-sage-500 rounded-lg">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6 2 3 7 3 12c0 3 1.5 5.5 4 7" strokeLinecap="round"/>
              <path d="M12 2c6 0 9 5 9 10 0 3-1.5 5.5-4 7" strokeLinecap="round"/>
              <path d="M12 2v20" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="font-display font-semibold text-navy-900 text-lg leading-tight">
            LS Sober Living
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <a href="#apply" className="hidden lg:inline btn-primary text-sm py-2.5 px-5">
          Apply Now
        </a>

        {/* Hamburger button (mobile) */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-sand-100 transition"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-navy-800 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy-800 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy-800 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-sand-100 shadow-lg">
          <nav className="section-container flex flex-col py-4 gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block py-2.5 px-3 rounded-lg text-navy-800 font-semibold hover:bg-sand-100 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={handleLinkClick}
              className="btn-primary text-center mt-3"
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
