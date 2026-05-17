"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Facebook, Instagram, Star } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { projects } from "@/lib/data"

const socialLinks = [
  { href: "https://www.linkedin.com/in/bon-sanchez-489ba532a/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/GITHHUBON", icon: Github, label: "GitHub" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
]

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count.toLocaleString()}</span>
}

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= rating
              ? "fill-yellow-500 text-yellow-500"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  )
}

// Live Green Analytics Line Component
function LiveAnalyticsBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q50,30 100,50"
            fill="none"
            stroke="url(#greenGradient)"
            strokeWidth="2"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute w-full h-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="30%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#4ade80" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M0,60 Q100,20 200,60 T400,60 T600,60 T800,60"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <motion.path
          d="M0,40 Q100,80 200,40 T400,40 T600,40 T800,40"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, delay: 0.5 }}
        />

        <motion.path
          d="M0,30 L200,30 L400,30 L600,30 L800,30"
          fill="none"
          stroke="#86efac"
          strokeWidth="1"
          strokeDasharray="4 12"
          initial={{ x: -800 }}
          animate={{ x: 800 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 3 + 1
          const duration = Math.random() * 3 + 2
          const delay = Math.random() * 5
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: i % 2 === 0 ? "#22c55e" : "#4ade80",
                left: `${startX}%`,
                top: `${startY}%`,
                boxShadow: `0 0 ${size * 2}px #22c55e`,
              }}
              animate={{
                y: [0, -30, 0, 30, 0],
                x: [0, 20, 0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      <svg className="absolute w-full h-full opacity-10" preserveAspectRatio="none">
        {[0, 25, 50, 75, 100].map(y => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="#22c55e"
            strokeWidth="0.5"
            strokeDasharray="4 6"
          />
        ))}
        {[0, 20, 40, 60, 80, 100].map(x => (
          <line
            key={`v-${x}`}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke="#22c55e"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"
        animate={{
          top: ["0%", "100%", "0%"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ filter: "blur(2px)" }}
      />

      {[10, 25, 40, 55, 70, 85].map((x, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${x}%`,
            top: `${35 + Math.sin(x) * 15}%`,
            backgroundColor: "#22c55e",
            boxShadow: "0 0 10px #22c55e",
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      
      {/* Live Green Analytics Background */}
      <LiveAnalyticsBackground />

      {/* Content */}
      <div className="container mx-auto py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block">
                Analytics & Development
              </span>
              <span className="block mt-2">
                Building{" "}
                <motion.span
                  className="text-violet-500 inline-block"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 10px rgba(139, 92, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AI Solutions
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            IT Analytics & Development | Building data-driven systems and web solutions that blend design, function, and performance.
          </motion.p>

          {/* Analytics Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-10"
          >
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    <AnimatedCounter target={projects.length} />
                  </div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    <AnimatedCounter target={5} />+
                  </div>
                  <p className="text-sm text-muted-foreground">Dashboards</p>
                </div>
                <div className="flex flex-col items-center">
  <div className="mb-2">
    <StarRating rating={4} />
  </div>

  <p className="text-sm font-medium bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
    Highest Rating
  </p>
</div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-green-500 hover:text-green-500 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => {
          const nextSection = document.querySelector('section:not(#home)')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-green-500/50 flex justify-center pt-2 hover:border-green-500 transition-colors">
          <motion.div 
            className="w-1 h-2 rounded-full bg-green-500"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}