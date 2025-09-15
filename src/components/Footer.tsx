import React from 'react'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, Twitter, Code, Shield, Zap, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact', 'Messages']
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tmanas06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/t-manas-chakravarty-91958224b/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:2210030003cse@gmail.com', label: 'Email' },
    { icon: Twitter, href: 'https://x.com/tmanas2004', label: 'Twitter' }
  ]

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`#${section.toLowerCase()}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">T Manas Chakravarty</h3>
                <p className="text-gray-400 text-lg">Blockchain Developer & Cybersecurity Specialist</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-md">
              Passionate about building secure, innovative solutions at the intersection of 
              blockchain technology and cybersecurity. Always learning, always building.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-base">2210030003cse@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield size={16} className="text-purple-400" />
                <span className="text-gray-300 text-base">Available for Work</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap size={16} className="text-yellow-400" />
                <span className="text-gray-300 text-base">Hyderabad, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} T Manas Chakravarty. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and modern web technologies.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with React & TypeScript</span>
              <span>•</span>
              <span>Powered by Vite</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}