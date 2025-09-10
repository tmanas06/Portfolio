import React from 'react'
import { motion } from 'motion/react'
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 rounded-full"
        style={{ transform: 'translateZ(100px)' }}
      />
      
      <motion.div
        animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/30"
        style={{ transform: 'translateZ(-50px)' }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-black p-2">
            <ImageWithFallback
               src="/profile.jpg"
               alt="Profile"
               className="w-full h-full rounded-full object-cover"
            />

            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
        >
          T Manas Chakravarty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Blockchain Developer & Cybersecurity Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Final-year B.Tech (CSE Hons.) student specializing in Cybersecurity and Blockchain. 
          Building secure, efficient, and innovative software solutions with smart contracts and modern frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: 'https://github.com/tmanas06', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/t-manas-chakravarty-91958224b/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:2210030003cse@gmail.com', label: 'Email' },
            { icon: Twitter, href: 'https://x.com/tmanas2004', label: 'Twitter' },
            { icon: null, href: 'https://techieresearch.blogspot.com/', label: 'Blog' }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
              whileHover={{ 
                scale: 1.2, 
                rotateY: social.icon ? 180 : 0,
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center ${social.icon ? '' : 'px-4'}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {social.icon ? <social.icon size={24} /> : <span className="text-lg font-bold">Blog</span>}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-x-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            Explore My Work
          </motion.button>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 51, 234, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  )
}
