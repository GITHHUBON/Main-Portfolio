"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  TrendingUp, 
  ChevronDown, 
  Star, 
  BarChart3, 
  Briefcase, 
  Database, 
  Code2, 
  Settings,
  Send
} from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

// Feedback Modal Component
function FeedbackModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (rating > 0 && feedback.trim()) {
      console.log({ rating, feedback })
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
        setRating(0)
        setFeedback("")
      }, 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md">
        <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary-foreground">Share Your Feedback</h3>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="p-6">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm mb-3">How would you rate your experience?</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 transition-all ${
                            (hoverRating || rating) >= star
                              ? "fill-yellow-500 text-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      You selected {rating} star{rating !== 1 ? "s" : ""}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground text-sm mb-3">Your feedback (optional)</p>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what you think about our services..."
                    rows={4}
                    className="w-full px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={rating === 0}
                  className="w-full gap-2 bg-primary hover:bg-primary/80"
                >
                  <Send className="h-4 w-4" />
                  Submit Feedback
                </Button>
              </>
            ) : (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Star className="h-8 w-8 text-green-500 fill-green-500" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2">Thank You!</h4>
                <p className="text-muted-foreground text-sm">Your feedback has been submitted successfully.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")
  const [isMounted, setIsMounted] = useState(false)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = [...navLinks].reverse()
      for (const link of sections) {
        const element = document.querySelector(link.href)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(link.href)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setActiveSection(href)
      setIsMobileMenuOpen(false)
    }
  }

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <span className="text-foreground">AI</span>
              <span className="text-primary">Bon</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-muted-foreground font-medium">
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-foreground tracking-tight">AI</span>
                  <motion.span 
                    className="text-xl font-bold text-primary ml-0.5"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(139, 92, 246, 0)",
                        "0 0 5px rgba(139, 92, 246, 0.5)",
                        "0 0 0px rgba(139, 92, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    | Bon
                  </motion.span>
                </div>
                
                <div className="hidden sm:block ml-2 px-1.5 py-0.5 bg-primary/10 rounded text-[9px] font-medium text-primary border border-primary/20">
                  AI Dev
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => {
                // For Services link, add dropdown
                if (link.label === "Services") {
                  return (
                    <DropdownMenu key={link.href}>
                      <DropdownMenuTrigger asChild>
                        <button className="relative group flex items-center gap-1">
                          <span className={`text-sm font-medium transition-colors ${
                            activeSection === link.href 
                              ? "text-primary" 
                              : "text-muted-foreground hover:text-primary"
                          }`}>
                            Services
                          </span>
                          <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                          <motion.span 
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: activeSection === link.href ? 1 : 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-64 bg-background/95 backdrop-blur-sm border-primary/20 p-2">
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <a href="#services" onClick={(e) => handleNavClick(e as any, "#services")} className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span>All Services</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <a href="#services" onClick={(e) => handleNavClick(e as any, "#services")} className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-primary" />
                            <span>IT Analytics</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <a href="#services" onClick={(e) => handleNavClick(e as any, "#services")} className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-primary" />
                            <span>Data Development</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <a href="#services" onClick={(e) => handleNavClick(e as any, "#services")} className="flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-primary" />
                            <span>Web Development</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <a href="#services" onClick={(e) => handleNavClick(e as any, "#services")} className="flex items-center gap-2">
                            <Settings className="h-4 w-4 text-primary" />
                            <span>Application Admin</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-primary/10" />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }
                
                // Regular nav links
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="relative group block"
                    >
                      <span className={`text-sm font-medium transition-colors ${
                        activeSection === link.href 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-primary"
                      }`}>
                        {link.label}
                      </span>
                      
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeSection === link.href ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <span className="absolute inset-0 bg-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-95 group-hover:scale-100" />
                    </a>
                  </motion.div>
                )
              })}
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="relative"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-1 pt-4 pb-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative py-3 px-4 rounded-lg transition-all ${
                        activeSection === link.href 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <span className="font-medium text-sm">{link.label}</span>
                      
                      {activeSection === link.href && (
                        <motion.div 
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                          layoutId="activeMobileIndicator"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.a>
                  ))}
                  
                  {/* Mobile Feedback Option */}
                  <button
                    onClick={() => {
                      setIsFeedbackOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="relative py-3 px-4 rounded-lg transition-all text-yellow-500 hover:bg-yellow-500/10 flex items-center gap-2"
                  >
                    <Star className="h-4 w-4 fill-yellow-500" />
                    <span className="font-medium text-sm">Rate Your Experience</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Feedback Modal */}
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </>
  )
}