import React, { memo, useCallback, useMemo } from 'react'
import { motion } from 'motion/react'
import { ChevronDown, Github, Linkedin, Mail, Twitter, Sparkles, Code } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const HeroSection = memo(function HeroSection() {
  const { theme } = useTheme()

  const scrollToTabs = useCallback(() => {
    const element = document.querySelector('[data-slot="tabs"]')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const socialLinks = useMemo(() => [
    { icon: Github, href: 'https://github.com/tmanas06', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/t-manas-chakravarty-91958224b/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Mail, href: 'mailto:2210030003cse@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
    { icon: Twitter, href: 'https://x.com/tmanas2004', label: 'Twitter', color: 'hover:bg-sky-500' }
  ], [])

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50' 
          : 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/10'
      }`}
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 ${
            theme === 'light' 
              ? 'bg-gradient-to-br from-purple-100/30 via-blue-100/20 to-yellow-100/20' 
              : 'bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/10'
          }`}
        />
      </div>

      {/* Removed floating elements for better performance */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <Code className={`${theme === 'light' ? 'text-purple-600' : 'text-cyan-400'} mr-3`} size={28} />
            <h2 className={`text-3xl md:text-5xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Blockchain Developer & Cybersecurity Specialist
            </h2>
            <Sparkles className={`${theme === 'light' ? 'text-yellow-500' : 'text-purple-400'} ml-3`} size={28} />
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-60" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGEd3L0j5NXlw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710756562217?e=1760572800&v=beta&t=1SktKI8uYN7gmR5xL7egclwtpESiwDjuHN6dkSci8TU"
                alt="T Manas Chakravarty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name below profile picture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <h1 className={`text-4xl md:text-5xl font-bold ${
              theme === 'light' 
                ? 'text-gray-800' 
                : 'text-white'
            }`}>
              T Manas Chakravarty
            </h1>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Final-year <span className={`${theme === 'light' ? 'text-purple-600' : 'text-cyan-400'} font-semibold`}>B.Tech (CSE Hons.)</span> student specializing in
            <span className={`${theme === 'light' ? 'text-blue-600' : 'text-purple-400'} font-semibold`}> Cybersecurity</span> and
            <span className={`${theme === 'light' ? 'text-yellow-600' : 'text-cyan-400'} font-semibold`}> Blockchain</span>. Building secure, efficient, and innovative software solutions.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTabs}
            className={`px-8 py-4 rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
            }`}
          >
            <Sparkles size={20} />
            Explore My Work
          </motion.button>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 backdrop-blur-sm rounded-2xl font-semibold text-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              theme === 'light'
                ? 'bg-white/80 border border-purple-200 text-gray-800 hover:bg-white hover:border-purple-300'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToTabs}
          className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  )
})