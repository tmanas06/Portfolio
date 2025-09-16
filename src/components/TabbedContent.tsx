import React, { forwardRef, useImperativeHandle, useState, lazy, Suspense, memo, useMemo, useCallback } from 'react'
import { motion } from 'motion/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import { useTheme } from '../contexts/ThemeContext'
import { User, Code, Briefcase, FolderOpen, Mail, MessageSquare } from 'lucide-react'

// Lazy load sections for better performance
const AboutSection = lazy(() => import('./AboutSection').then(module => ({ default: module.AboutSection })))
const SkillsSection = lazy(() => import('./SkillsSection').then(module => ({ default: module.SkillsSection })))
const ExperienceSection = lazy(() => import('./ExperienceSection').then(module => ({ default: module.ExperienceSection })))
const ProjectsSection = lazy(() => import('./ProjectsSection').then(module => ({ default: module.ProjectsSection })))
const ContactSection = lazy(() => import('./ContactSection').then(module => ({ default: module.ContactSection })))
const MessagesSection = lazy(() => import('./MessagesSection').then(module => ({ default: module.MessagesSection })))

export const TabbedContent = memo(forwardRef<{ switchToTab: (tabValue: string) => void }>((props, ref) => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('about')

  const switchToTab = useCallback((tabValue: string) => {
    setActiveTab(tabValue)
  }, [])

  useImperativeHandle(ref, () => ({
    switchToTab
  }), [switchToTab])

  const tabItems = useMemo(() => [
    { 
      value: 'about', 
      label: 'About', 
      icon: User,
      component: AboutSection
    },
    { 
      value: 'skills', 
      label: 'Skills', 
      icon: Code,
      component: SkillsSection
    },
    { 
      value: 'experience', 
      label: 'Experience', 
      icon: Briefcase,
      component: ExperienceSection
    },
    { 
      value: 'projects', 
      label: 'Projects', 
      icon: FolderOpen,
      component: ProjectsSection
    },
    { 
      value: 'contact', 
      label: 'Contact', 
      icon: Mail,
      component: ContactSection
    },
    { 
      value: 'messages', 
      label: 'Messages', 
      icon: MessageSquare,
      component: MessagesSection
    }
  ], [])

  // Memoized loading component
  const LoadingSpinner = memo(() => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
    </div>
  ))

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated background gradient */}
            <motion.div
              className={`absolute inset-0 rounded-2xl ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-cyan-100/50' 
                  : 'bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30'
              }`}
              animate={{
                background: [
                  theme === 'light' 
                    ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                    : 'linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
                  theme === 'light' 
                    ? 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))'
                    : 'linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))',
                  theme === 'light' 
                    ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))'
                    : 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating particles in menu background */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    theme === 'light' 
                      ? 'bg-purple-400' 
                      : 'bg-cyan-400'
                  }`}
                  animate={{
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 20 - 10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                />
              ))}
            </div>
            
            <TabsList 
              className={`w-full justify-start h-auto p-1 mb-8 rounded-2xl min-w-max relative z-10 ${
                theme === 'light' 
                  ? 'bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-xl' 
                  : 'bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl'
              }`}
            >
            {tabItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium whitespace-nowrap relative overflow-hidden group ${
                  theme === 'light'
                    ? 'data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    : 'data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                {/* Glow effect for active tab */}
                <motion.div
                  className={`absolute inset-0 rounded-xl ${
                    activeTab === item.value
                      ? theme === 'light'
                        ? 'bg-gradient-to-r from-purple-400/20 to-blue-400/20'
                        : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20'
                      : 'bg-transparent'
                  }`}
                  animate={{
                    opacity: activeTab === item.value ? [0.5, 0.8, 0.5] : 0,
                    scale: activeTab === item.value ? [1, 1.05, 1] : 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeTab === item.value ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
                
                <item.icon size={18} className="sm:w-5 sm:h-5 relative z-10" />
                <span className="hidden min-[480px]:inline text-sm sm:text-base relative z-10">{item.label}</span>
              </TabsTrigger>
            ))}
            </TabsList>
          </motion.div>
        </div>

        {tabItems.map((item) => {
          const Component = item.component
          return (
            <TabsContent
              key={item.value}
              value={item.value}
              className="mt-0"
            >
              <Suspense fallback={<LoadingSpinner />}>
                <div className="w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
                  <Component />
                </div>
              </Suspense>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}))
