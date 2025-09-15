import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { ExternalLink, Github, Code, Shield, Zap } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'

export function ProjectsSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const projects = [
    {
      title: 'DeepRevenueSharingSystem (MVP)',
      description: 'Implemented UI for a decentralized profit-sharing platform, boosting payout efficiency. Enabled custom analytics dashboards and automated distribution with smart contract integration.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      technologies: ['React', 'Solidity', 'Web3.js', 'Chart.js', 'Ethers.js'],
      category: 'Blockchain',
      status: 'Live',
      github: 'https://github.com/tmanas06/DeepRevenueSharingSystem',
      demo: 'https://deep-revenue-sharing.vercel.app'
    },
    {
      title: 'MonadGame',
      description: 'Built a real-time, optimized on-chain interactive gaming dApp on the Monad Blockchain featuring 3 swipe-based mini-games and 1 predictive gameplay mode with seamless Web3 integration.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      technologies: ['React', 'Monad Blockchain', 'Web3', 'Solidity', 'TypeScript'],
      category: 'Blockchain',
      status: 'Live',
      github: 'https://github.com/tmanas06/MonadGame',
      demo: 'https://monad-game.vercel.app'
    },
    {
      title: 'Stellar Blend Launchpad',
      description: 'Engineered a project launchpad DApp, streamlining project onboarding by 40% with automated liquidity provisioning. Improved UX with intuitive transaction flow and vesting schedules.',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=600&h=400&fit=crop',
      technologies: ['React', 'Solidity', 'Web3', 'IPFS', 'Tailwind CSS'],
      category: 'DeFi',
      status: 'Live',
      github: 'https://github.com/tmanas06/StellarBlendLaunchpad',
      demo: 'https://stellar-blend-launchpad.vercel.app'
    },
    {
      title: 'Crypto Market Analysis',
      description: 'Built a Python-based analytics engine for real-time crypto trends. Automated SMS/email notifications on market shifts for proactive trading with advanced data visualization.',
      image: 'https://images.unsplash.com/photo-1639322537228-f912e770e8c9?w=600&h=400&fit=crop',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'APIs'],
      category: 'Analytics',
      status: 'Live',
      github: 'https://github.com/tmanas06/CryptoMarketAnalysis',
      demo: 'https://crypto-analysis-dashboard.vercel.app'
    },
    {
      title: 'HomeRental DApp',
      description: 'Delivered a decentralized rental platform with escrow and verification, reducing contract disputes by 30%. Features smart contract-based rental agreements and automated payments.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'Solidity', 'Web3', 'IPFS', 'Ethers.js'],
      category: 'Blockchain',
      status: 'Live',
      github: 'https://github.com/tmanas06/HomeRentalDApp',
      demo: 'https://home-rental-dapp.vercel.app'
    },
    {
      title: 'Revenue Analytics Dashboard',
      description: 'Built a scalable React dashboard visualizing state-wise revenue data (FY17–FY26 BE) through extensive budget research and data extraction with 99.9% accuracy. Integrated export features (Excel) for policymakers.',
      image: 'https://images.unsplash.com/photo-1639322537228-f7121772abcf?w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'Excel Export', 'Data Analysis', 'API Integration'],
      category: 'Analytics',
      status: 'Live',
      github: 'https://github.com/tmanas06/RevenueAnalyticsDashboard',
      demo: 'https://revenue-analytics-dashboard.vercel.app'
    },
    {
      title: 'Flight Ticketing DApp',
      description: 'Implemented a decentralized flight booking platform with wallet integration and smart contract-based refunds, booking success and NFT implementation on testnet achieving 99.9% success rate.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      technologies: ['React', 'Solidity', 'Web3', 'NFTs', 'Smart Contracts'],
      category: 'Blockchain',
      status: 'Live',
      github: 'https://github.com/tmanas06/FlightTicketingDApp',
      demo: 'https://flight-ticketing-dapp.vercel.app'
    },
    {
      title: 'Web3JobSite',
      description: 'A comprehensive job platform built for the Web3 ecosystem, connecting blockchain developers, DeFi experts, and crypto professionals with innovative companies in the decentralized space.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      technologies: ['TypeScript', 'React', 'Web3', 'Node.js', 'MongoDB'],
      category: 'Web3',
      status: 'Live',
      github: 'https://github.com/tmanas06/web3JobSite',
      demo: 'https://web3jobsite.vercel.app'
    },
    {
      title: 'Bubble Shooter',
      description: 'Mini dApp on Farcaster featuring an interactive bubble shooter game with Web3 integration. Built with TypeScript and deployed on the Farcaster protocol for seamless social gaming experience.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      technologies: ['TypeScript', 'Farcaster', 'Web3', 'Canvas API', 'React'],
      category: 'Gaming',
      status: 'Live',
      github: 'https://github.com/tmanas06/Bubble_Shooter',
      demo: 'https://bubble-shooter-farcaster.vercel.app'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blockchain': return 'from-cyan-500 to-blue-600'
      case 'Cybersecurity': return 'from-red-500 to-orange-600'
      case 'DeFi': return 'from-purple-500 to-pink-600'
      case 'Analytics': return 'from-green-500 to-emerald-600'
      case 'Web3': return 'from-indigo-500 to-purple-600'
      case 'Gaming': return 'from-pink-500 to-rose-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'In Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
        }
        
        return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ y }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-cyan-900/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
      <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A showcase of my most impactful projects spanning blockchain, cybersecurity, and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                  fallback={project.image}
                      alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {project.category}
                  </span>
                </div>
                </div>

              {/* Project Content */}
                <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                </h3>
                
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-all duration-300"
                      >
                    <Github size={16} className="mr-2" />
                    Code
                      </motion.a>
                  
                  {project.demo && (
                      <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-xl text-white text-sm font-medium transition-all duration-300"
                      >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                      </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <Code className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new projects and exploring innovative solutions. Check back regularly for updates!
            </p>
          <motion.a
              href="https://github.com/tmanas06"
            target="_blank"
            rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
              <Github size={20} className="mr-2" />
            View All Projects
          </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}