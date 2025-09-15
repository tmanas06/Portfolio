import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Mail, Reply, Trash2, User, Calendar, MessageSquare, Send, CheckCircle } from 'lucide-react'

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: number
  replied: boolean
  reply?: string
}

export function MessagesSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [replyText, setReplyText] = useState('')
  const [isReplying, setIsReplying] = useState(false)
  const [filter, setFilter] = useState<'all' | 'unreplied' | 'replied'>('all')
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('portfolio-messages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  const saveMessages = (newMessages: Message[]) => {
    setMessages(newMessages)
    localStorage.setItem('portfolio-messages', JSON.stringify(newMessages))
  }

  const handleReply = async () => {
    if (!selectedMessage || !replyText.trim()) return

    setIsReplying(true)
    
    // Simulate sending reply
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const updatedMessages = messages.map(msg => 
      msg.id === selectedMessage.id 
        ? { ...msg, replied: true, reply: replyText.trim() }
        : msg
    )
    
    saveMessages(updatedMessages)
    setSelectedMessage({ ...selectedMessage, replied: true, reply: replyText.trim() })
    setReplyText('')
    setIsReplying(false)
  }

  const handleDelete = (messageId: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId)
    saveMessages(updatedMessages)
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null)
    }
  }

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unreplied') return !msg.replied
    if (filter === 'replied') return msg.replied
    return true
  })

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <motion.section 
      id="messages" 
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ y }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-cyan-900/10" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Messages
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Manage and reply to messages from your portfolio visitors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              {/* Filter Buttons */}
              <div className="flex space-x-2 mb-6">
                {[
                  { key: 'all', label: 'All', count: messages.length },
                  { key: 'unreplied', label: 'Unreplied', count: messages.filter(m => !m.replied).length },
                  { key: 'replied', label: 'Replied', count: messages.filter(m => m.replied).length }
                ].map((filterOption) => (
                  <button
                    key={filterOption.key}
                    onClick={() => setFilter(filterOption.key as any)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === filterOption.key
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {filterOption.label} ({filterOption.count})
                  </button>
                ))}
              </div>

              {/* Messages List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No messages found</p>
                  </div>
                ) : (
                  filteredMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        selectedMessage?.id === message.id
                          ? 'bg-cyan-500/20 border-2 border-cyan-500/50'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-white truncate">{message.subject}</h3>
                        {message.replied && (
                          <CheckCircle size={16} className="text-green-400 flex-shrink-0 ml-2" />
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-2 line-clamp-2">{message.message}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center">
                          <User size={12} className="mr-1" />
                          {message.name}
                        </span>
                        <span className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          {formatDate(message.timestamp).split(',')[0]}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Message Detail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {selectedMessage ? (
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                {/* Message Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedMessage.subject}</h3>
                    <div className="flex items-center space-x-4 text-gray-300">
                      <span className="flex items-center">
                        <User size={16} className="mr-2" />
                        {selectedMessage.name}
                      </span>
                      <span className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        {selectedMessage.email}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {formatDate(selectedMessage.timestamp)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Message Content */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Message:</h4>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>

                {/* Reply Section */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Reply size={20} className="mr-2" />
                    Reply
                  </h4>
                  
                  {selectedMessage.replied ? (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle size={16} className="text-green-400 mr-2" />
                        <span className="text-green-400 font-medium">Replied</span>
                      </div>
                      <p className="text-gray-300 whitespace-pre-wrap">{selectedMessage.reply}</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply here..."
                        className="w-full h-32 p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                      />
                      <div className="flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleReply}
                          disabled={!replyText.trim() || isReplying}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                          {isReplying ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              <span>Send Reply</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
                <MessageSquare size={64} className="mx-auto mb-4 text-gray-400 opacity-50" />
                <h3 className="text-xl font-semibold text-white mb-2">Select a Message</h3>
                <p className="text-gray-400">Choose a message from the list to view details and reply</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
