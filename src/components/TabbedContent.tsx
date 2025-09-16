import React, { forwardRef, useImperativeHandle, useState, lazy, Suspense } from 'react'
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

export const TabbedContent = forwardRef<{ switchToTab: (tabValue: string) => void }>((props, ref) => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('about')

  useImperativeHandle(ref, () => ({
    switchToTab: (tabValue: string) => {
      setActiveTab(tabValue)
    }
  }))

  const tabItems = [
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
  ]

  // Loading component for better UX
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto">
          <TabsList 
            className={`w-full justify-start h-auto p-1 mb-8 rounded-2xl min-w-max ${
              theme === 'light' 
                ? 'bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg' 
                : 'bg-black/50 backdrop-blur-md border border-white/20 shadow-2xl'
            }`}
          >
            {tabItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 font-medium whitespace-nowrap ${
                  theme === 'light'
                    ? 'data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    : 'data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon size={18} className="sm:w-5 sm:h-5" />
                <span className="hidden min-[480px]:inline text-sm sm:text-base">{item.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Component />
                </motion.div>
              </Suspense>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
})
