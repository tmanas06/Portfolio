import { useEffect, useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { TabbedContent } from './components/TabbedContent'
import { Footer } from './components/Footer'

export default function App() {
  const tabbedContentRef = useRef<{ switchToTab: (tabValue: string) => void }>(null)

  const handleTabSwitch = (tabValue: string) => {
    if (tabbedContentRef.current) {
      tabbedContentRef.current.switchToTab(tabValue)
    }
  }

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

  const createStarfield = () => {
    const starfield = document.createElement('div')
    starfield.className = 'starfield'
    starfield.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    `

    // Create fewer stars for better performance
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div')
      star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: ${Math.random() > 0.5 ? '#22d3ee' : '#a855f7'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0.6;
      `
      starfield.appendChild(star)
    }

    document.body.appendChild(starfield)
  }

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