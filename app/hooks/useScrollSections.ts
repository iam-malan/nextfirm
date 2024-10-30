import { useState, useEffect, useRef, useCallback } from 'react'

interface ScrollHookResult {
  currentSection: number;
  direction: number;
  goToSection: (index: number) => void;
  isTransitioning: boolean;
}

export const useScrollSections = (totalSections: number): ScrollHookResult => {
  const [currentSection, setCurrentSection] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStart = useRef({ x: 0, y: 0 })
  const scrollTimeout = useRef<NodeJS.Timeout>()
  const TRANSITION_DURATION = 800 // ms

  const handleTransitionStart = useCallback((newDirection: number, targetSection: number) => {
    setIsTransitioning(true)
    setDirection(newDirection)
    setCurrentSection(targetSection)

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }

    scrollTimeout.current = setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }, [])

  const handleScroll = useCallback((delta: number) => {
    if (isTransitioning) return

    const nextSection = currentSection + delta
    if (nextSection >= 0 && nextSection < totalSections) {
      handleTransitionStart(delta, nextSection)
    }
  }, [currentSection, isTransitioning, totalSections, handleTransitionStart])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = Math.sign(e.deltaY)
      handleScroll(delta)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault()
          handleScroll(1)
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          handleScroll(-1)
          break
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning) return

      const touchEnd = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }

      const deltaY = touchStart.current.y - touchEnd.y
      const deltaX = touchStart.current.x - touchEnd.x

      // Use the larger delta to determine scroll direction
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        if (Math.abs(deltaY) > 50) {
          handleScroll(deltaY > 0 ? 1 : -1)
          touchStart.current = { x: 0, y: 0 }
        }
      } else {
        if (Math.abs(deltaX) > 50) {
          handleScroll(deltaX > 0 ? 1 : -1)
          touchStart.current = { x: 0, y: 0 }
        }
      }
    }

    const cleanup = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      setIsTransitioning(false)
    }

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('blur', cleanup)

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('blur', cleanup)
      cleanup()
    }
  }, [handleScroll, isTransitioning])

  const goToSection = useCallback((index: number) => {
    if (isTransitioning || index === currentSection) return
    const delta = index > currentSection ? 1 : -1
    handleTransitionStart(delta, index)
  }, [currentSection, isTransitioning, handleTransitionStart])

  return {
    currentSection,
    direction,
    goToSection,
    isTransitioning
  }
}
