import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Heart, Code, Coffee, Github, Linkedin, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate floating orbs data
  const floatingOrbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 200 + 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    gradient: i % 3 === 0 ? 'from-cyan-400/20 to-purple-600/20' : 
             i % 3 === 1 ? 'from-purple-500/20 to-pink-600/20' : 
             'from-blue-400/20 to-cyan-600/20'
  }))

  // Generate glowing particles
  const glowingParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    gradient: i % 3 === 0 ? 'from-cyan-400 to-purple-600' : 
             i % 3 === 1 ? 'from-purple-500 to-pink-600' : 
             'from-blue-400 to-cyan-600'
  }))

  // Generate 3D geometric shapes
  const geometricShapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 30,
    rotationX: Math.random() * 360,
    rotationY: Math.random() * 360,
    rotationZ: Math.random() * 360,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
    shape: i % 3 === 0 ? 'cube' : i % 3 === 1 ? 'pyramid' : 'diamond',
    gradient: i % 3 === 0 ? 'border-cyan-400/30' : 
             i % 3 === 1 ? 'border-purple-500/30' : 
             'border-blue-400/30'
  }))

  return (
    <footer className="relative py-20 px-4 border-t border-white/10 bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden">
      {/* Mouse-tracking radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`
        }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
      
      {/* Floating Orbs with Glassmorphism */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.gradient} backdrop-blur-3xl border border-white/10 shadow-2xl`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 200 - 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity={0.3}>
        <defs>
          <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="circuitGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        
        {/* Horizontal circuit lines */}
        <motion.path
          d="M0,50 Q300,30 600,50 T1200,50"
          stroke="url(#circuitGradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,150 Q300,130 600,150 T1200,150"
          stroke="url(#circuitGradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Vertical circuit lines */}
        <motion.path
          d="M100,0 Q80,100 100,200 T100,400"
          stroke="url(#circuitGradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M1100,0 Q1080,100 1100,200 T1100,400"
          stroke="url(#circuitGradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </svg>
      
      {/* Glowing Particles */}
      {glowingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-r ${particle.gradient}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.size * 2}px rgba(34, 211, 238, 0.3)`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -Math.random() * 100 - 50]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Floating 3D Geometric Shapes */}
      {geometricShapes.map((shape) => {
        const shapeStyle = {
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          width: shape.size,
          height: shape.size,
          border: `2px solid ${shape.gradient.replace('border-', '').replace('/30', '')}`,
          background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
          backdropFilter: 'blur(10px)'
        }
        
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={shapeStyle}
            animate={{
              rotateX: [shape.rotationX, shape.rotationX + 360],
              rotateY: [shape.rotationY, shape.rotationY + 360],
              rotateZ: [shape.rotationZ, shape.rotationZ + 360],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {shape.shape === 'cube' && (
              <div className="w-full h-full transform-style-3d">
                <div className="absolute inset-0 border-2 border-cyan-400/30" />
                <div className="absolute inset-0 border-2 border-purple-500/30 transform rotate-90" />
              </div>
            )}
            {shape.shape === 'pyramid' && (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-400/10" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            )}
            {shape.shape === 'diamond' && (
              <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-600/10" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            )}
          </motion.div>
        )
      })}

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="space-y-4 p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              T Manas Chakravarty
            </motion.h3>
            <p className="text-gray-300 leading-relaxed drop-shadow-sm">
              Final-year B.Tech (CSE Hons.) student specializing in Cybersecurity and Blockchain. 
              Building secure, efficient, and innovative software solutions with smart contracts and modern frameworks.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/tmanas06', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/t-manas-chakravarty-91958224b/', label: 'LinkedIn' },
                { icon: ExternalLink, href: 'https://tmanas06.github.io/Portfolio/', label: 'Portfolio' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  viewport={{ once: true }}
                  className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-cyan-400/70 transition-all backdrop-blur-sm shadow-lg hover:shadow-cyan-500/25"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="space-y-4 p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
          >
            <h4 className="text-white font-medium bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent drop-shadow-md">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 8, color: '#22d3ee', scale: 1.05 }}
                  className="block text-gray-300 hover:text-cyan-400 transition-all text-left py-1 px-2 rounded-lg hover:bg-white/5"
                  viewport={{ once: true }}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="space-y-4 p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
          >
            <h4 className="text-white font-medium bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent drop-shadow-md">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05 + 0.3,
                    type: "spring",
                    bounce: 0.5
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 cursor-default backdrop-blur-sm shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 bg-gradient-to-r from-white/2 to-white/1 backdrop-blur-xl rounded-2xl p-6 -mx-6 shadow-2xl"
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-300 text-sm drop-shadow-sm">
            {/* <span>© {currentYear} T Manas Chakravarty. All rights reserved.</span> */}
          </div>

          {/* Made with love */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-gray-300 text-sm drop-shadow-sm"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <Code size={16} className="text-cyan-400" />
            <span>&</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee size={16} className="text-amber-500" />
            </motion.div>
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 text-cyan-300 text-sm rounded-full border border-cyan-500/40 hover:border-cyan-400/70 transition-all backdrop-blur-sm shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            Back to Top ↑
          </motion.button>
        </motion.div>

      {/* Enhanced Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [0, -150, -300],
            x: [0, Math.random() * 200 - 100, Math.random() * 400 - 200],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut"
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '10px',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
          }}
        />
      ))}
      
      {/* Additional floating orbs for extra immersion */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`extra-orb-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-600/10 backdrop-blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            filter: 'blur(60px)'
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 400 - 200, 0],
            scale: [0.5, 1.5, 0.8, 0.5]
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            delay: i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      </motion.div>
    </footer>
  )
}