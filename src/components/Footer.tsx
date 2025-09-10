import React from 'react'
import { motion } from 'motion/react'
import { Heart, Code, Coffee, Github, Linkedin, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-white/10 bg-gradient-to-b from-black to-purple-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            >
              T Manas Chakravarty
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
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
                  className="p-2 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-medium">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 5, color: '#22d3ee' }}
                  viewport={{ once: true }}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-medium">Technologies</h4>
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
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20 cursor-default"
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            {/* <span>© {currentYear} T Manas Chakravarty. All rights reserved.</span> */}
          </div>

          {/* Made with love */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-gray-400 text-sm"
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
            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [0, -100, -200],
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeOut"
          }}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            bottom: '20px'
          }}
        />
      ))}
    </footer>
  )
}