import { useEffect, useRef, memo, useCallback } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { TabbedContent } from './components/TabbedContent'
import { Footer } from './components/Footer'

export default function App() {
  const tabbedContentRef = useRef<{ switchToTab: (tabValue: string) => void }>(null)

  const handleTabSwitch = useCallback((tabValue: string) => {
    if (tabbedContentRef.current) {
      tabbedContentRef.current.switchToTab(tabValue)
    }
  }, [])

  useEffect(() => {
    // Add dark class to html element for dark mode
    document.documentElement.classList.add('dark')
    
    // Set smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Create starfield background
    createStarfield()
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const createStarfield = useCallback(() => {
    // Use CSS instead of DOM manipulation for better performance
    const style = document.createElement('style')
    style.textContent = `
      .starfield {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        background-image: 
          radial-gradient(1px 1px at 20px 30px, #22d3ee, transparent),
          radial-gradient(1px 1px at 40px 70px, #a855f7, transparent),
          radial-gradient(1px 1px at 90px 40px, #22d3ee, transparent),
          radial-gradient(1px 1px at 130px 80px, #a855f7, transparent),
          radial-gradient(1px 1px at 160px 30px, #22d3ee, transparent);
        background-repeat: repeat;
        background-size: 200px 100px;
        opacity: 0.6;
      }
    `
    document.head.appendChild(style)
    
    const starfield = document.createElement('div')
    starfield.className = 'starfield'
    document.body.appendChild(starfield)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-pattern text-white overflow-x-hidden transition-all duration-500">
        <Navigation onTabSwitch={handleTabSwitch} />
        <main>
          <HeroSection />
          <TabbedContent ref={tabbedContentRef} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}