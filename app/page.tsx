'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Hooks
import { useScrollSections } from './hooks/useScrollSections'

// Components
import { Navigation } from './components/Navigation'
import { PrivacyBanner } from './components/PrivacyBanner'
import { EnterSite } from './components/EnterSite'

// Sections
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Team } from './sections/Team'
import { Contact } from './sections/Contact'

const sections = [
  'hero',
  'about',
  'services',
  'team',
  'contact'
]

export default function Homepage() {
  const [showEnterSite, setShowEnterSite] = useState(true)
  const [showPrivacyBanner, setShowPrivacyBanner] = useState(true)
  const { currentSection, direction, goToSection } = useScrollSections(sections.length)

  const handleEnterSite = () => {
    setShowEnterSite(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence>
        {showEnterSite ? (
          <EnterSite onEnter={handleEnterSite} />
        ) : (
          <>
            <Navigation
              currentSection={currentSection}
              sections={sections}
              setCurrentSection={goToSection}
              setDirection={direction => goToSection(currentSection + direction)}
            />

            <main className="h-screen">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                {currentSection === 0 && <Hero direction={direction} />}
                {currentSection === 1 && <About direction={direction} />}
                {currentSection === 2 && <Services direction={direction} />}
                {currentSection === 3 && <Team direction={direction} />}
                {currentSection === 4 && <Contact direction={direction} />}
              </AnimatePresence>
            </main>

            {showPrivacyBanner && (
              <PrivacyBanner onAccept={() => setShowPrivacyBanner(false)} />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
