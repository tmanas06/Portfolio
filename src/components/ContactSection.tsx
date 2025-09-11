import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Sparkles, Zap } from 'lucide-react'

export function ContactSection() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '2210030003cse@gmail.com',
      href: 'mailto:2210030003cse@gmail.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9398264880',
      href: 'tel:+919398264880',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: '#',
      color: 'from-green-500 to-emerald-600'
    }
  ]

  const socialLinks = [
  { icon: Github, href: 'https://github.com/tmanas06', label: 'GitHub', color: 'hover:text-cyan-400' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/t-manas-chakravarty-91958224b/', label: 'LinkedIn', color: 'hover:text-purple-400' },
  { icon: Twitter, href: 'https://x.com/tmanas2004', label: 'Twitter', color: 'hover:text-pink-400' }
  ]

  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ y }}
    >
      {/* Dynamic gradient background with mouse tracking */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/20 to-purple-900/10 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.08) 0%, rgba(0, 0, 0, 0.9) 40%, rgba(147, 51, 234, 0.05) 100%)`
        }}
      >
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 animate-pulse" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-40 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400/15 to-blue-600/15 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-500/10"
          style={{ filter: 'blur(1px)' }}
        />
        
        <motion.div
          animate={{ 
            x: [0, 70, 0], 
            y: [0, -90, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-40 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-600/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/10"
          style={{ filter: 'blur(1px)' }}
        />
      </div>

      {/* Enhanced animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ 
              duration: 4, 
              delay: i * 0.3, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${15 + i * 10}%`,
              top: `${5 + i * 15}%`,
              width: '300px',
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${
                i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a855f7' : '#ec4899'
              }, transparent)`,
              transform: `rotate(${i * 45}deg)`,
              boxShadow: `0 0 20px ${i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a855f7' : '#ec4899'}40`
            }}
          />
        ))}
      </div>

      {/* Glowing particles */}
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
            delay: Math.random() * 4,
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
                Let's Connect
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse" />
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-3xl overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 blur-xl -z-10 animate-pulse rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Send size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Send Message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                      <motion.input
                        whileFocus={{ 
                          scale: 1.02, 
                          boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
                          borderColor: '#22d3ee'
                        }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                      <motion.input
                        whileFocus={{ 
                          scale: 1.02, 
                          boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                          borderColor: '#a855f7'
                        }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
                    <motion.input
                      whileFocus={{ 
                        scale: 1.02, 
                        boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
                        borderColor: '#22d3ee'
                      }}
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                      placeholder="Project Subject"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                    <motion.textarea
                      whileFocus={{ 
                        scale: 1.02, 
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                        borderColor: '#a855f7'
                      }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring", bounce: 0.3 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 40px rgba(34, 211, 238, 0.5)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                    viewport={{ once: true }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 30, rotateX: -15, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.5, type: "spring", bounce: 0.4 }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: 8,
                    rotateX: 3,
                    boxShadow: '0 25px 50px rgba(34, 211, 238, 0.3)',
                    y: -5
                  }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl hover:border-white/40 transition-all duration-300 group overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-10 blur-xl -z-10 animate-pulse rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotateY: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
                      <info.icon size={28} className="text-white relative z-10" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                        {info.label}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl overflow-hidden group"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap size={20} className="text-purple-400" />
                  <h4 className="text-white font-medium">Follow Me</h4>
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.9,
                        type: "spring",
                        bounce: 0.5
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotateY: 180,
                        rotateX: 10,
                        boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)',
                        y: -5
                      }}
                      viewport={{ once: true }}
                      className={`p-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-gray-300 ${social.color} hover:border-white/40 transition-all duration-300`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-green-500/15 to-emerald-500/15 backdrop-blur-md border-2 border-green-500/30 rounded-2xl overflow-hidden group"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10 flex items-center space-x-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-green-500 rounded-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </motion.div>
                <div>
                  <h4 className="text-white font-medium mb-1">Available for Projects</h4>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    Currently accepting new freelance opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced floating 3D elements */}
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-32 w-20 h-20 border-2 border-cyan-400/30 rounded-lg backdrop-blur-sm opacity-40"
          style={{ 
            transform: 'translateZ(100px)',
            boxShadow: '0 0 50px rgba(34, 211, 238, 0.3), inset 0 0 50px rgba(34, 211, 238, 0.08)'
          }}
        />
        
        <motion.div
          animate={{
            rotateY: [360, 0],
            rotateZ: [0, 360],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-32 w-16 h-16 border-2 border-purple-400/30 rounded-full backdrop-blur-sm opacity-40"
          style={{ 
            transform: 'translateZ(-60px)',
            boxShadow: '0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 40px rgba(147, 51, 234, 0.08)'
          }}
        />
        
        <motion.div
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -120, 120, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-pink-400/20 rounded-lg backdrop-blur-sm opacity-30"
          style={{ filter: 'blur(1px)' }}
        />
      </div>
    </motion.section>
  )
}