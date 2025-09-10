import React from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Neural Network Dashboard',
      description: 'A real-time AI monitoring dashboard with advanced data visualization and machine learning insights.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwY2lyY3VpdHxlbnwwfHx8fDE3NTc1MDk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'TensorFlow'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Quantum Commerce Platform',
      description: 'Next-generation e-commerce platform with AR try-on features and blockchain payments.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMHN0b3JlfGVufDB8fHx8MTc1NzUwOTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Next.js', 'Three.js', 'Stripe', 'PostgreSQL', 'WebRTC'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Cyberpunk Social Hub',
      description: 'Decentralized social media platform with end-to-end encryption and Web3 integration.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBkYXJrJTIwdGVjaHxlbnwwfHx8fDE3NTc1MDk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React Native', 'Solidity', 'IPFS', 'GraphQL', 'Web3.js'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Holographic Task Manager',
      description: 'Immersive 3D task management application with voice controls and gesture recognition.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXQlMjB2clxlbnwwfHx8fDE3NTc1MDk0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Vue.js', 'Three.js', 'WebXR', 'Express', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23grid)"/%3E%3C/svg%3E')`
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mt-6" />
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
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}