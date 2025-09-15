import React from 'react'
import { motion } from 'motion/react'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-yellow-400 p-1 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-full h-full rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative"
        >
          {theme === 'dark' ? (
            // Sun icon (anime style)
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
                <div className="absolute inset-1 rounded-full bg-yellow-300"></div>
              </div>
              {/* Sun rays */}
              <div className="absolute -top-1 left-1/2 w-0.5 h-2 bg-yellow-400 transform -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute -bottom-1 left-1/2 w-0.5 h-2 bg-yellow-400 transform -translate-x-1/2 translate-y-1"></div>
              <div className="absolute -left-1 top-1/2 w-2 h-0.5 bg-yellow-400 transform -translate-y-1/2 -translate-x-1"></div>
              <div className="absolute -right-1 top-1/2 w-2 h-0.5 bg-yellow-400 transform -translate-y-1/2 translate-x-1"></div>
              <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-yellow-400 transform rotate-45"></div>
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-yellow-400 transform rotate-45"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-yellow-400 transform rotate-45"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-yellow-400 transform rotate-45"></div>
            </div>
          ) : (
            // Moon icon (anime style)
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 shadow-lg">
                <div className="absolute inset-1 rounded-full bg-slate-500"></div>
                {/* Moon face */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 w-1 h-0.5 bg-slate-300 rounded-full transform -translate-x-1/2"></div>
              </div>
              {/* Stars */}
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-0 -left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-yellow-400/20 blur-sm -z-10"></div>
    </motion.button>
  )
}
