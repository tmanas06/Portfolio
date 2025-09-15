import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useTheme } from '../contexts/ThemeContext'
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Code, Database } from 'lucide-react'

export function ExperienceSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Coforge',
      type: 'Internship',
      duration: 'Aug 2025 - Present',
      location: 'Greater Noida, India',
      status: 'Current',
      description: 'Working as a Software Developer Intern, contributing to enterprise-level software solutions and gaining hands-on experience in modern development practices.',
      skills: ['Software Development', 'Enterprise Solutions', 'Agile Development'],
      icon: Code,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'President',
      company: 'WallStreet DAO Club, KLH',
      type: 'Leadership',
      duration: 'Jun 2024 - Present',
      location: 'Hyderabad, India',
      status: 'Current',
      description: 'Leading blockchain education initiatives, organizing tech events, and building a strong developer community focused on Web3 technologies.',
      skills: ['Leadership', 'Event Management', 'Community Building', 'Blockchain Education'],
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Intern',
      company: 'KPMG India',
      type: 'Internship',
      duration: 'May 2025 - Jul 2025',
      location: 'New Delhi, India',
      status: 'Completed',
      description: 'Gained valuable experience in professional services, working on data analysis and business intelligence projects.',
      skills: ['Data Analysis', 'Business Intelligence', 'Professional Services'],
      icon: Database,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Squad Member',
      company: 'Snowflake',
      type: 'Part-time',
      duration: 'Oct 2024 - May 2025',
      location: 'Hyderabad, India',
      status: 'Completed',
      description: 'Part of the Snowflake Squad 2024, working on cloud data platform solutions and earning developer badges.',
      skills: ['Cloud Computing', 'Data Platforms', 'Snowflake', 'Part-time Development'],
      icon: Award,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Skilled Blockchain Developer',
      company: 'Timechain Labs',
      type: 'Internship',
      duration: 'Jul 2024 - May 2025',
      location: 'Remote',
      status: 'Completed',
      description: 'Developed blockchain solutions and smart contracts, contributing to various Web3 projects and gaining expertise in blockchain technologies.',
      skills: ['Blockchain Development', 'Smart Contracts', 'Web3', 'Full-Stack Development'],
      icon: Code,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Evangelist',
      company: 'Oraichain Labs',
      type: 'Internship',
      duration: 'May 2024 - Oct 2024',
      location: 'Remote',
      status: 'Completed',
      description: 'Worked as a technical evangelist, contributing to open-source projects and creating technical documentation for blockchain solutions.',
      skills: ['Technical Writing', 'Open Source', 'Project Documentation', 'Blockchain'],
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Full Stack Developer',
      company: 'Wallet Hunter',
      type: 'Internship',
      duration: 'May 2024 - Jun 2024',
      location: 'Remote',
      status: 'Completed',
      description: 'Developed full-stack applications for crypto wallet solutions, participating in Token 2049 and ETH Dubai events.',
      skills: ['Full-Stack Development', 'Crypto Wallets', 'React', 'Node.js'],
      icon: Code,
      color: 'from-yellow-500 to-orange-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'from-cyan-500 to-blue-600'
      case 'Leadership': return 'from-purple-500 to-pink-600'
      case 'Part-time': return 'from-orange-500 to-red-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <motion.section 
      ref={ref}
      id="experience" 
      className={`relative min-h-screen py-20 px-4 overflow-hidden transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50' 
          : 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/10'
      }`}
      style={{ y }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: theme === 'light' 
              ? `radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 30%, rgba(251, 191, 36, 0.05) 60%, rgba(255, 255, 255, 0.9) 100%)`
              : `radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(251, 191, 36, 0.05) 60%, rgba(0, 0, 0, 0.9) 100%)`
          }}
        />
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r ${
            theme === 'light' 
              ? 'from-purple-600 via-blue-600 to-yellow-500' 
              : 'from-cyan-400 to-purple-600'
          } bg-clip-text text-transparent`}>
            Experience
          </h2>
          <p className={`text-xl max-w-3xl mx-auto font-medium ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            My professional journey spanning <span className="font-bold text-purple-500">2+ years</span> of experience across blockchain, software development, and leadership roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-1 ${
            theme === 'light' 
              ? 'bg-gradient-to-b from-purple-300 via-blue-300 to-yellow-300' 
              : 'bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400'
          } rounded-full`} />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full ${
                  theme === 'light' 
                    ? 'bg-white border-4 border-purple-200' 
                    : 'bg-black border-4 border-cyan-400'
                } flex items-center justify-center shadow-lg`}>
                  <exp.icon size={24} className={`${
                    theme === 'light' ? 'text-purple-600' : 'text-cyan-400'
                  }`} />
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 ${
                    theme === 'light' 
                      ? 'bg-white/80 backdrop-blur-sm border border-purple-200' 
                      : 'bg-white/5 backdrop-blur-sm border border-white/10'
                  } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        theme === 'light' ? 'text-gray-800' : 'text-white'
                      }`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className={`text-lg font-semibold ${
                          theme === 'light' ? 'text-purple-600' : 'text-cyan-400'
                        }`}>
                          {exp.company}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(exp.status)}`}>
                          {exp.status}
                        </span>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} text-white text-sm font-semibold`}>
                      {exp.type}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
                      <span className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
                      <span className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className={`text-lg leading-relaxed mb-6 ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === 'light' 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'bg-cyan-500/20 text-cyan-400'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className={`text-center p-8 rounded-2xl ${
            theme === 'light' 
              ? 'bg-white/60 backdrop-blur-sm border border-purple-200' 
              : 'bg-white/5 backdrop-blur-sm border border-white/10'
          }`}>
            <h3 className={`text-4xl font-bold mb-2 ${
              theme === 'light' ? 'text-purple-600' : 'text-cyan-400'
            }`}>
              2+ Years
            </h3>
            <p className={`text-lg ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Total Experience
            </p>
          </div>
          
          <div className={`text-center p-8 rounded-2xl ${
            theme === 'light' 
              ? 'bg-white/60 backdrop-blur-sm border border-blue-200' 
              : 'bg-white/5 backdrop-blur-sm border border-white/10'
          }`}>
            <h3 className={`text-4xl font-bold mb-2 ${
              theme === 'light' ? 'text-blue-600' : 'text-purple-400'
            }`}>
              7+ Roles
            </h3>
            <p className={`text-lg ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Professional Positions
            </p>
          </div>
          
          <div className={`text-center p-8 rounded-2xl ${
            theme === 'light' 
              ? 'bg-white/60 backdrop-blur-sm border border-yellow-200' 
              : 'bg-white/5 backdrop-blur-sm border border-white/10'
          }`}>
            <h3 className={`text-4xl font-bold mb-2 ${
              theme === 'light' ? 'text-yellow-600' : 'text-pink-400'
            }`}>
              5+ Companies
            </h3>
            <p className={`text-lg ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Organizations Worked With
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
