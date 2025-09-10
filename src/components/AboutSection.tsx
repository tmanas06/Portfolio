import React from 'react'
import { motion } from 'motion/react'
import { Code, Palette, Rocket, Users } from 'lucide-react'

export function AboutSection() {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Users, label: 'Hackathons Won', value: '4' },
    { icon: Palette, label: 'Certifications', value: '5' },
    { icon: Rocket, label: 'Internships', value: '5' }
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Blockchain Developer & Cybersecurity Specialist
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Final-year B.Tech (CSE Hons.) student specializing in Cybersecurity and Blockchain, with practical experience in building scalable full-stack applications. 
              Skilled in modern frameworks, smart contracts, and API integrations. Passionate about solving real-world problems through secure, efficient, and innovative software solutions.
            </p>
            
            <p className="text-gray-300 leading-relaxed mt-4">
              Currently pursuing my degree at KL University Hyderabad with a CGPA of 9.44, I have gained extensive experience through internships at leading companies including Coforge, KPMG, Timechain Labs, and Threat Prism. 
              My expertise spans blockchain development, cybersecurity, and full-stack development with a focus on Web3 technologies.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Blockchain: Ethereum, Solana, Polygon, Smart Contracts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-gray-300">Development: JavaScript, TypeScript, Python, React.js, Node.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span className="text-gray-300">Cybersecurity: Ethical Hacking, Vulnerability Assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-gray-300">Education: B.Tech CSE Hons. - KL University (CGPA: 9.44)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - 3D Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: '0 20px 40px rgba(34, 211, 238, 0.2)'
                }}
                viewport={{ once: true }}
                className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4"
                  >
                    <stat.icon size={24} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating 3D Elements */}
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-20 h-20 border border-cyan-500/20 rounded-lg opacity-30"
          style={{ transform: 'translateZ(50px)' }}
        />
        
        <motion.div
          animate={{
            rotateY: [360, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-16 h-16 border border-purple-500/20 rounded-full opacity-30"
          style={{ transform: 'translateZ(-30px)' }}
        />
      </div>
    </section>
  )
}