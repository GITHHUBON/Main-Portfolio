"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Briefcase, MapPin, FolderCheck, Award, Lightbulb, Quote } from "lucide-react"

const callouts = [
  { icon: Briefcase, text: "2 yrs" },
  { icon: MapPin, text: "Metro Manila" },
  { icon: FolderCheck, text: "3+ projects" },
  { icon: Award, text: "3 certs" },
  { icon: Lightbulb, text: "Innovation" },
]

const focusAreas = [
  "IT Analytics",
  "Business Analytics",
  "Analytics & Development",
  "Data Development",
  "Web Development",
  "Application Administration",
]

export function AboutSection() {
  const ref = useRef(null)
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  
  // Scroll animations for callouts only - with proper container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    container: containerRef
  })
  
  // Callout animations - moves RIGHT and scales down
  const calloutX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 50])
  const calloutScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])
  const calloutOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [1, 1, 0.7])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      <div ref={containerRef} className="container mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-32"
          >
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              {"Hi, I'm Bon — an analytics and development enthusiast focused on turning data into actionable insights and building practical, user-centered web solutions."}
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              I combine analysis with development to create tools and applications that solve real-world problems and support business growth. My work is driven by curiosity, continuous learning, and a goal to deliver solutions that are both technically sound and impactful.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
              <div className="grid grid-cols-3 gap-3">
                {focusAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-3 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 text-center cursor-default hover:bg-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right content - Speech Bubble & Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex flex-col items-center"
          >
            {/* Speech Bubble Container */}
            <motion.div 
              className="relative w-full max-w-xs mb-8"
              style={{
                x: calloutX,
                scale: calloutScale,
                opacity: calloutOpacity
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              {/* Speech Bubble */}
              <div className="relative bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-xl p-3 border border-border shadow-lg">
                {/* Quote icon */}
                <Quote className="absolute top-1 left-1 h-2 w-2 text-primary/20" />
                <Quote className="absolute bottom-1 right-1 h-2 w-2 text-primary/20 rotate-180" />
                
                {/* Callouts inside speech bubble - Skills section style */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {callouts.map((callout, index) => (
                    <motion.div
                      key={callout.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: 0.8 + index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default">
                        <callout.icon className="h-3 w-3 text-primary" />
                        <span className="text-xs font-medium text-primary whitespace-nowrap">
                          {callout.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Speech bubble tail */}
                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-card border-b border-r border-border rotate-45" />
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -inset-4 rounded-full bg-primary/15 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="/photo-logo.png"
                  alt="Bon - Analytics & Development"
                  className="object-cover object-center w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center"
                  initial={{ y: 60 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white font-semibold text-base">Bon</p>
                  <p className="text-white/70 text-xs">Analytics & Development</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}