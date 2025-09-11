import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ChevronDown, Github, Linkedin, Mail, Twitter, Sparkles, Zap, Code } from 'lucide-react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ y, opacity }}
    >
      {/* Background Layer - Z-0 */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient background with mouse tracking */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(6, 182, 212, 0.1) 100%)`
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      {/* Floating Elements Layer - Z-1 */}
      <div className="absolute inset-0 z-1">
        {/* Floating orbs with glassmorphism */}
        <motion.div
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-500/20"
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 80, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-32 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-600/15 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/20"
        />
        
        <motion.div
          animate={{ 
            x: [0, 60, -60, 0], 
            y: [0, 60, -60, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/10 to-blue-600/10 backdrop-blur-md border border-white/10"
        />

        {/* Animated geometric shapes */}
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/40 rounded-full backdrop-blur-sm"
          style={{ 
            transform: 'translateZ(100px)',
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.1)'
          }}
        />
        
        <motion.div
          animate={{ rotateX: [360, 0], rotateZ: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400/40 backdrop-blur-sm"
          style={{ 
            transform: 'translateZ(-50px)',
            boxShadow: '0 0 25px rgba(147, 51, 234, 0.3), inset 0 0 25px rgba(147, 51, 234, 0.1)'
          }}
        />
      </div>

      {/* Glowing particles Layer - Z-2 */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Layer - Z-10 */}
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced profile image with glassmorphism and glow */}
          <motion.div
            initial={{ scale: 0, rotateY: 180, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative w-40 h-40 mx-auto mb-8 group"
            whileHover={{ scale: 1.05 }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-black p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-md p-2">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm p-2">
                    <img
                      src={"/profile.jpg"}
                      alt="Profile photo of T Manas Chakravarty"
                      className="w-full h-full rounded-full object-cover transition-all duration-300 group-hover:scale-105 bg-gray-800"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/default-profile.png";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating tech icons */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/30 z-10"
            >
              <Code size={16} className="text-cyan-400" />
            </motion.div>
            
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-purple-400/30 z-10"
            >
              <Sparkles size={16} className="text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Enhanced title with multiple effects */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px #fff', color: '#fff' }}>
                T Manas Chakravarty
              </span>
            </span>
          </motion.h1>

          {/* Enhanced subtitle with icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 mb-8"
          >
            <div className="flex items-center space-x-3">
              <Zap className="text-cyan-400 animate-pulse" size={20} />
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 font-semibold bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent text-center">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent" style={{ WebkitTextStroke: '0.5px #fff', color: '#fff' }}>
                  Blockchain Developer & Cybersecurity Specialist
                </span>
              </p>
              <Zap className="text-purple-400 animate-pulse" size={20} />
            </div>
          </motion.div>

          {/* Enhanced description with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative mb-12"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                Final-year <span className="text-cyan-300 font-semibold">B.Tech (CSE Hons.)</span> student specializing in 
                <span className="text-purple-300 font-semibold"> Cybersecurity</span> and 
                <span className="text-cyan-300 font-semibold"> Blockchain</span>. 
                Building secure, efficient, and innovative software solutions with smart contracts and modern frameworks.
              </p>
            </div>
          </motion.div>

          {/* Enhanced social links with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/tmanas06', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/t-manas-chakravarty-91958224b/', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: 'mailto:2210030003cse@gmail.com', label: 'Email', color: 'from-red-500 to-red-700' },
              { icon: Twitter, href: 'https://x.com/tmanas2004', label: 'Twitter', color: 'from-sky-500 to-sky-700' },
              { icon: null, href: 'https://techieresearch.blogspot.com/', label: 'Blog', color: 'from-purple-600 to-pink-600' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  rotateY: social.icon ? 360 : 0,
                  boxShadow: '0 10px 30px rgba(34, 211, 238, 0.4)',
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${social.color} bg-opacity-10 backdrop-blur-md border border-white/20 text-white hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center group ${social.icon ? 'w-12 h-12 sm:w-14 sm:h-14' : 'px-4 sm:px-6'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {social.icon ? (
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                ) : (
                  <span className="text-sm sm:text-lg font-bold group-hover:scale-105 transition-transform">Blog</span>
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 40px rgba(34, 211, 238, 0.4)',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Sparkles size={20} />
                <span>Explore My Work</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 40px rgba(147, 51, 234, 0.3)',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Mail size={20} />
                <span>Get In Touch</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>

          {/* Enhanced scroll indicator with glow */}
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown 
              size={32} 
              className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" 
            />
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}
