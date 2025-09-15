import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { MessagesSection } from './components/MessagesSection'
import { Footer } from './components/Footer'

export default function App() {
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

    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div')
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: ${Math.random() > 0.5 ? '#22d3ee' : '#a855f7'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.8 + 0.2};
        animation: twinkle ${Math.random() * 3 + 2}s infinite;
      `
      starfield.appendChild(star)
    }

    // Add CSS keyframes for twinkling animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `
    document.head.appendChild(style)
    document.body.appendChild(starfield)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-pattern text-white overflow-x-hidden transition-all duration-500">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <MessagesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}