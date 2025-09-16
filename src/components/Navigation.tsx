import React, { useState, useEffect, memo, useCallback, useMemo } from 'react'
import { motion } from 'motion/react'
import { Menu, X, Code } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from '../contexts/ThemeContext'

interface NavigationProps {
  onTabSwitch?: (tabValue: string) => void
}

export const Navigation = memo(function Navigation({ onTabSwitch }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = useMemo(() => [
    { href: '#home', label: 'Home' },
    { href: '#tabs', label: 'About', tabValue: 'about' },
    { href: '#tabs', label: 'Skills', tabValue: 'skills' },
    { href: '#tabs', label: 'Experience', tabValue: 'experience' },
    { href: '#tabs', label: 'Projects', tabValue: 'projects' },
    { href: '#tabs', label: 'Contact', tabValue: 'contact' },
    { href: '#tabs', label: 'Messages', tabValue: 'messages' }
  ], [])

  const scrollToSection = useCallback((href: string, tabValue?: string) => {
    if (href === '#home') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '#tabs') {
      const tabsElement = document.querySelector('[data-slot="tabs"]')
      if (tabsElement) {
        tabsElement.scrollIntoView({ behavior: 'smooth' })
        if (tabValue && onTabSwitch) {
          setTimeout(() => onTabSwitch(tabValue), 500)
        }
      }
    }
    setIsMobileMenuOpen(false)
  }, [onTabSwitch])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${theme === 'light' ? 'bg-white/90' : 'bg-black/80'} backdrop-blur-md border-b ${theme === 'light' ? 'border-gray-200' : 'border-white/10'}` 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
              <Code size={20} className="text-white" />
            </div>
            <span className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href, item.tabValue)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${theme === 'light' ? 'text-gray-700 hover:text-purple-600' : 'text-gray-300 hover:text-white'} transition-colors duration-300 font-medium text-lg`}
              >
                {item.label}
              </motion.button>
            ))}
            {/* Theme Toggle with enhanced visibility */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              <motion.div
                key={theme}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                className="text-xl"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href, item.tabValue)}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}
            {/* Theme Toggle in Mobile Menu */}
            <div className="px-4 py-3 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
})