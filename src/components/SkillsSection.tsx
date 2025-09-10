import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Globe, 
  Server,
  GitBranch,
  Zap
} from 'lucide-react'

export function SkillsSection() {
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
  const floatingOrbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 150 + 80,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
    gradient: i % 3 === 0 ? 'from-cyan-400/20 to-purple-600/20' : 
             i % 3 === 1 ? 'from-purple-500/20 to-pink-600/20' : 
             'from-blue-400/20 to-cyan-600/20'
  }))

  // Generate glowing particles
  const glowingParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 1.5,
    gradient: i % 3 === 0 ? 'from-cyan-400 to-purple-600' : 
             i % 3 === 1 ? 'from-purple-500 to-pink-600' : 
             'from-blue-400 to-cyan-600'
  }))

  // Generate 3D geometric shapes
  const geometricShapes = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    rotationX: Math.random() * 360,
    rotationY: Math.random() * 360,
    rotationZ: Math.random() * 360,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 3,
    shape: i % 3 === 0 ? 'cube' : i % 3 === 1 ? 'pyramid' : 'diamond',
    gradient: i % 3 === 0 ? 'border-cyan-400/30' : 
             i % 3 === 1 ? 'border-purple-500/30' : 
             'border-blue-400/30'
  }))
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-cyan-400 to-blue-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'Java', 'Solidity']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Server,
      color: 'from-green-400 to-emerald-500',
      skills: ['Angular.js', 'React.js', 'Node.js', 'Web3.js', 'Ethers.js']
    },
    {
      title: 'Blockchains',
      icon: Database,
      color: 'from-purple-400 to-pink-500',
      skills: ['Ethereum', 'Solana', 'Polygon', 'BSV Blockchain']
    },
    {
      title: 'Databases & Tools',
      icon: Smartphone,
      color: 'from-orange-400 to-red-500',
      skills: ['MongoDB', 'Pinata', 'Git', 'GitHub', 'Linux', 'Google Cloud']
    },
    {
      title: 'Cybersecurity',
      icon: Palette,
      color: 'from-pink-400 to-rose-500',
      skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Security Auditing']
    },
    {
      title: 'Additional Skills',
      icon: GitBranch,
      color: 'from-indigo-400 to-purple-500',
      skills: ['API Integration', 'Automation', 'Smart Contracts', 'DeFi']
    }
  ]

  const technologies = [
    'JavaScript', 'TypeScript', 'Python', 'Solidity', 'React.js', 'Node.js',
    'Ethereum', 'Solana', 'Polygon', 'Web3.js', 'Ethers.js', 'MongoDB'
  ]

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Mouse-tracking radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
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
            x: [0, Math.random() * 80 - 40, Math.random() * 160 - 80, 0],
            y: [0, Math.random() * 80 - 40, Math.random() * 160 - 80, 0],
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
            y: [0, -Math.random() * 80 - 40]
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
      
      {/* Floating Tech Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }}
            className="absolute text-white/10 text-sm font-mono pointer-events-none"
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
              viewport={{ once: true }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card */}
              <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-4 shadow-lg`}
                  >
                    <category.icon size={28} className="text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: skillIndex * 0.2
                          }}
                          className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Light */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-20 -translate-y-16 translate-x-16`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Indicators */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 opacity-20"
        >
          <Zap size={40} className="text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 opacity-20"
        >
          <Globe size={35} className="text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}