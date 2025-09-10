import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { Code, Palette, Rocket, Users, Sparkles, Zap, Shield, Target } from 'lucide-react'

export function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+', color: 'from-cyan-500 to-blue-600' },
    { icon: Users, label: 'Hackathons Won', value: '4', color: 'from-purple-500 to-pink-600' },
    { icon: Palette, label: 'Certifications', value: '5', color: 'from-green-500 to-emerald-600' },
    { icon: Rocket, label: 'Internships', value: '5', color: 'from-orange-500 to-red-600' }
  ]

  const skills = [
    { icon: Shield, label: 'Blockchain', items: 'Ethereum, Solana, Polygon, Smart Contracts', color: 'text-cyan-400' },
    { icon: Code, label: 'Development', items: 'JavaScript, TypeScript, Python, React.js, Node.js', color: 'text-purple-400' },
    { icon: Target, label: 'Cybersecurity', items: 'Ethical Hacking, Vulnerability Assessment', color: 'text-pink-400' },
    { icon: Zap, label: 'Education', items: 'B.Tech CSE Hons. - KL University (CGPA: 9.44)', color: 'text-green-400' }
  ]

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ y }}
    >
      {/* Dynamic gradient background with mouse tracking */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-cyan-900/10 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.08) 0%, rgba(0, 0, 0, 0.9) 40%, rgba(6, 182, 212, 0.05) 100%)`
        }}
      >
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 animate-pulse" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 80, 0], 
            y: [0, -60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/15 to-purple-600/15 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-500/10"
          style={{ filter: 'blur(1px)' }}
        />
        
        <motion.div
          animate={{ 
            x: [0, -60, 0], 
            y: [0, 80, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-600/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/10"
          style={{ filter: 'blur(1px)' }}
        />
      </div>

      {/* Glowing particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -80]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                About Me
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse" />
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"
            />
            <Sparkles className="absolute -top-4 -right-8 text-cyan-400 animate-pulse" size={24} />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced title with icon */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Blockchain Developer & Cybersecurity Specialist
              </h3>
            </motion.div>
            
            {/* Enhanced description with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Final-year <span className="text-cyan-400 font-medium">B.Tech (CSE Hons.)</span> student specializing in 
                <span className="text-purple-400 font-medium"> Cybersecurity</span> and 
                <span className="text-cyan-400 font-medium"> Blockchain</span>, with practical experience in building scalable full-stack applications. 
                Skilled in modern frameworks, smart contracts, and API integrations. Passionate about solving real-world problems through secure, efficient, and innovative software solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently pursuing my degree at <span className="text-purple-400 font-medium">KL University Hyderabad</span> with a CGPA of <span className="text-cyan-400 font-medium">9.44</span>, I have gained extensive experience through internships at leading companies including <span className="text-purple-400 font-medium">Coforge, KPMG, Timechain Labs</span>, and <span className="text-cyan-400 font-medium">Threat Prism</span>. My expertise spans blockchain development, cybersecurity, and full-stack development with a focus on Web3 technologies.
              </p>
            </motion.div>

            {/* Enhanced skills with glassmorphism cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring", bounce: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: '0 15px 35px rgba(34, 211, 238, 0.2)'
                  }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <skill.icon size={20} className={skill.color} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${skill.color} mb-2 group-hover:scale-105 transition-transform`}>
                        {skill.label}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.items}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Enhanced 3D Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateX: -45, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.15, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 15,
                  rotateX: 5,
                  boxShadow: '0 25px 50px rgba(34, 211, 238, 0.3)',
                  y: -10
                }}
                viewport={{ once: true }}
                className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl overflow-hidden group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 blur-xl -z-10 animate-pulse`} />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
                    <stat.icon size={28} className="text-white relative z-10" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.15, type: "spring", bounce: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced floating 3D elements */}
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-24 h-24 border-2 border-cyan-400/30 rounded-lg backdrop-blur-sm opacity-40"
          style={{ 
            transform: 'translateZ(80px)',
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 40px rgba(34, 211, 238, 0.05)'
          }}
        />
        
        <motion.div
          animate={{
            rotateY: [360, 0],
            rotateZ: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-20 h-20 border-2 border-purple-400/30 rounded-full backdrop-blur-sm opacity-40"
          style={{ 
            transform: 'translateZ(-50px)',
            boxShadow: '0 0 35px rgba(147, 51, 234, 0.2), inset 0 0 35px rgba(147, 51, 234, 0.05)'
          }}
        />
        
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-pink-400/20 rounded-lg backdrop-blur-sm opacity-30"
          style={{ filter: 'blur(1px)' }}
        />
      </div>
    </motion.section>
  )
}