'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { LucideMenu, LucideX } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md shadow-gold-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight text-transparent bg-clip-text gold-gradient hover:opacity-80 transition-opacity duration-300"
            style={{ fontFamily: 'Bodoni Moda, serif', fontWeight: 700, letterSpacing: '-0.5px' }}
          >
            Template Attorneys
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-sm uppercase tracking-wider relative group"
                style={{ 
                  fontFamily: 'Bodoni Moda, serif', 
                  fontWeight: 600, 
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold-500 p-2 hover:bg-gold-500/10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <LucideX className="h-6 w-6" />
            ) : (
              <LucideMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-black/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-in-out transform z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 pb-6">
          <div className="flex-1 px-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block w-full text-lg text-white hover:text-gold-400 transition-all duration-300 py-4 px-4 mb-2 rounded-lg bg-black/80 hover:bg-gold-900/20 active:bg-gold-900/30"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Bodoni Moda, serif',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  animation: mobileMenuOpen ? `slideIn 0.5s ease forwards ${index * 0.1}s` : 'none',
                  opacity: 0,
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="px-4 py-6 border-t border-gold-500/20 bg-black/80">
            <p className="text-sm text-white/80 text-center" style={{ fontFamily: 'Bodoni Moda, serif', fontWeight: 500 }}>
              © 2024 Template Attorneys
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}
