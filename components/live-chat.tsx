"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickReplies = [
  { label: "About me", action: "about" },
  { label: "Skills", action: "skills" },
  { label: "Projects", action: "projects" },
  { label: "Services", action: "services" },
  { label: "Contact", action: "contact" },
  { label: "Social Media", action: "social" },
]

interface Message {
  id: number
  text: string
  isUser: boolean
  isLink?: boolean
  link?: string
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm Bon. How can I help you today?",
      isUser: false,
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text,
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      let response = ""
      let isLink = false
      let link = ""

      const lowerText = text.toLowerCase()
      
      if (lowerText.includes("about")) {
        response = "I'm Bon, an analytics and development enthusiast based in Metro Manila. I specialize in turning data into actionable insights and building practical web solutions. Check out the About Me section for more details!"
      } else if (lowerText.includes("skill")) {
        response = "I specialize in Python, JavaScript, Next.js, Vue.js, SQL, Power BI, Apache Airflow, and more. Scroll to the Skills section to see the full list of technologies I work with!"
      } else if (lowerText.includes("project")) {
        response = "I've worked on ETL Development, this portfolio website, and a Monitoring & Analytics dashboard using AppSheet. Check the Projects section for detailed case studies!"
      } else if (lowerText.includes("service")) {
        response = "I offer IT Analytics, Business Analytics, Data Development, Web Development, and Application Administration services. I can help you with data-driven solutions and web applications."
      } else if (lowerText.includes("contact")) {
        response = "You can reach me at:\n\n📧 Email: bon@aianalytics.dev\n📱 Phone: +639210264084\n\nI'm currently available for freelance opportunities and collaborations! Feel free to reach out anytime."
      } else if (lowerText.includes("social") || lowerText.includes("facebook") || lowerText.includes("media")) {
        response = "Here are my contact and social media links:"
        isLink = true
        link = "social"
      } else {
        response = "Thanks for your message! 👋\n\nHere's how to reach me:\n• 📧 Email: bon@aianalytics.dev\n• 📱 Phone: +639210264084\n• 💼 LinkedIn: linkedin.com/in/bon\n• 📱 Facebook: facebook.com/bon.ai\n\nOr click on the quick replies above to learn more about my services!"
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        isLink,
        link,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 800)
  }

  const handleQuickReply = (action: string) => {
    const messageMap: { [key: string]: string } = {
      about: "Tell me about yourself",
      skills: "What are your skills?",
      projects: "Show me your projects",
      services: "What services do you offer?",
      contact: "How can I contact you?",
      social: "Show me social media",
    }
    handleSend(messageMap[action] || action)
  }

  return (
    <>
      {/* Chat Button - Transparent Rectangular */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-5 py-3 bg-background/80 backdrop-blur-md border border-primary/30 text-foreground rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-background/90 hover:border-primary/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: ["0 0 0 0 rgba(139, 92, 246, 0.2)", "0 0 0 15px rgba(139, 92, 246, 0)", "0 0 0 0 rgba(139, 92, 246, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <>
            <X className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Close</span>
          </>
        ) : (
          <>
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Message AI Bon
            </span>
          </>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isMinimized ? "h-auto" : "h-[500px]"
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Profile Photo */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary-foreground/20 flex items-center justify-center border-2 border-white/30">
                    <img
                      src="/photo-logo.png"
                      alt="AI Bon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">AI Bon</h3>
                    <p className="text-xs text-primary-foreground/80">Online • Usually replies instantly</p>
                  </div>
                </div>
                
                {/* Minimize Button */}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4 text-white" /> : <Minimize2 className="h-4 w-4 text-white" />}
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-72 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-background/95">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                          message.isUser
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-secondary text-secondary-foreground rounded-bl-md"
                        }`}
                      >
                        {message.isLink && message.link === "social" ? (
                          <div className="space-y-2">
                            <p className="mb-2">{message.text}</p>
                            <div className="space-y-1.5">
                              <a
                                href="mailto:bon@aianalytics.dev"
                                className="flex items-center gap-2 text-sm hover:underline block p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                📧 bon@aianalytics.dev
                              </a>
                              <a
                                href="tel:+639210264084"
                                className="flex items-center gap-2 text-sm hover:underline block p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                📱 +639210264084
                              </a>
                              <a
                                href="https://www.facebook.com/bon.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:underline block p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                📘 Facebook: /bon.ai
                              </a>
                              <a
                                href="https://linkedin.com/in/bon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:underline block p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                💼 LinkedIn: /in/bon
                              </a>
                              <a
                                href="https://github.com/bon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:underline block p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                🐙 GitHub: /bon
                              </a>
                            </div>
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{message.text}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2 border-t border-border bg-background/50">
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply.label}
                        onClick={() => handleQuickReply(reply.action)}
                        className="px-3 py-1 text-xs bg-primary/10 hover:bg-primary hover:text-white rounded-full transition-all duration-200 border border-primary/20 hover:border-primary"
                      >
                        {reply.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border bg-background">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSend(input)
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 bg-secondary rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <Button type="submit" size="icon" className="rounded-full bg-primary hover:bg-primary/80">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}