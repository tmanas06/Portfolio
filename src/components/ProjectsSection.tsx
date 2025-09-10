import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate floating orbs data
  const floatingOrbs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 120 + 60,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 2,
    gradient: i % 3 === 0 ? 'from-cyan-400/20 to-purple-600/20' : 
             i % 3 === 1 ? 'from-purple-500/20 to-pink-600/20' : 
             'from-blue-400/20 to-cyan-600/20'
  }))

  // Generate glowing particles
  const glowingParticles = Array.from({ length: 10 }, (_, i) => ({
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
  const geometricShapes = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 35 + 15,
    rotationX: Math.random() * 360,
    rotationY: Math.random() * 360,
    rotationZ: Math.random() * 360,
    duration: Math.random() * 18 + 12,
    delay: Math.random() * 2,
    shape: i % 3 === 0 ? 'cube' : i % 3 === 1 ? 'pyramid' : 'diamond',
    gradient: i % 3 === 0 ? 'border-cyan-400/30' : 
             i % 3 === 1 ? 'border-purple-500/30' : 
             'border-blue-400/30'
  }))
  const projects = [
    {
      title: 'Deep Revenue Sharing System (MVP)',
      description: 'Implemented UI for a decentralized profit-sharing platform, boosting payout efficiency. Enabled custom analytics dashboards and automated distribution.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW5jeSUyMGZpbmFuY2UlMjBjaGFydHxlbnwwfHx8fDE3NTc1MDk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React.js', 'Smart Contracts', 'Web3.js', 'Analytics'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Monad Game',
      description: 'Built a real-time, Optimized on-chain interactive gaming dApp on the Monad Blockchain featuring 3 swipe-based mini-games and 1 predictive gameplay mode.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDB8fHx8MTc1NzUwOTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Monad Blockchain', 'Smart Contracts', 'React.js', 'Web3'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Stellar Blend Launchpad',
      description: 'Engineered a project launchpad DApp, streamlining project onboarding by 40% with automated liquidity provisioning. Improved UX with intuitive transaction flow and vesting schedules.',
      image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmd8ZW58MXx8fHwxNzU3NTA5NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React.js', 'Smart Contracts', 'Liquidity Pools', 'DeFi'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Crypto Market Analysis',
      description: 'Built a Python-based analytics engine for real-time crypto trends. Automated SMS/email notifications on market shifts for proactive trading.',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwY2hhcnQlMjBhbmFseXNpc3xlbnwwfHx8fDE3NTc1MDk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Python', 'Data Analysis', 'Automation', 'API Integration'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Home Rental DApp',
      description: 'Delivered a decentralized rental platform with escrow and verification, reducing contract disputes by 30%.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3NTA5NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Smart Contracts', 'React.js', 'Web3.js', 'Escrow'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Revenue Analytics Dashboard',
      description: 'Built a scalable React dashboard visualizing state-wise revenue data (FY17–FY26 BE), through extensive budget research and data extraction with 99.9% accuracy.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NTc1MDk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React.js', 'Data Visualization', 'Excel Export', 'Analytics'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
            filter: 'blur(35px)'
          }}
          animate={{
            x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60, 0],
            y: [0, Math.random() * 60 - 30, Math.random() * 120 - 60, 0],
            scale: [1, 1.15, 0.85, 1]
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
            boxShadow: `0 0 ${particle.size * 3}px ${particle.size * 1.5}px rgba(34, 211, 238, 0.3)`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -Math.random() * 60 - 30]
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
          backdropFilter: 'blur(8px)'
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
              scale: [1, 1.15, 0.85, 1]
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
      
      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2210%22%20height%3D%2210%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2010%200%20L%200%200%200%2010%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22%20opacity%3D%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-20"
        animate={{
          x: [0, 10, 0],
          y: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
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
            Featured Projects
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto drop-shadow-sm">
            Innovative solutions built with cutting-edge technology
          </p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mt-6"
            animate={{
              scaleX: [1, 1.2, 1],
              boxShadow: ['0 0 10px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(147, 51, 234, 0.5)', '0 0 10px rgba(34, 211, 238, 0.5)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: project.featured ? 2 : 1,
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
              }}
              viewport={{ once: true }}
              className={`relative group ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold rounded-full"
                  >
                    FEATURED
                  </motion.div>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover ${project.featured ? 'h-64 md:h-80' : 'h-56'}`}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center space-x-4"
                    >
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 backdrop-blur-sm"
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 backdrop-blur-sm"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-xl font-bold text-white mb-3"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-gray-300 mb-4 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + techIndex * 0.05 + 0.5,
                          type: "spring",
                          bounce: 0.5
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span className="text-sm">Learn More</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 -z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/tmanas06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}