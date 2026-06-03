"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const skills = [
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "SQL (PostgreSQL)", category: "Database" },
  { name: "ETL Pipelines", category: "Data" },
  { name: "API Integration", category: "Backend" },
  { name: "Apache Airflow", category: "Data" },
  { name: "Data Warehousing", category: "Data" },
  { name: "Power BI", category: "Analytics" },
  { name: "Excel Advanced", category: "Analytics" },
  { name: "Google Sheets", category: "Tools" },
  { name: "AppSheet", category: "Tools" },
  { name: "AppsScript", category: "Tools" },
  { name: "Pandas", category: "Data" },
  { name: "Data Visualization", category: "Analytics" },
  { name: "ChatGPT", category: "AI Tools" },
  { name: "DeepSeek", category: "AI Tools" },
  { name: "Blackbox AI", category: "AI Tools" },
  { name: "GitHub", category: "Developer Tools" },
  { name: "Looker Studio", category: "Analytics & Reporting" },
]

// Auto-count unique categories
const uniqueCategories = [...new Set(skills.map(skill => skill.category))]
const categoriesCount = uniqueCategories.length

// Split skills into two rows
const midpoint = Math.ceil(skills.length / 2)
const row1Skills = skills.slice(0, midpoint)
const row2Skills = skills.slice(midpoint)

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    }
    
    // Get window width for animation calculation
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isInView])

  // Duplicate skills 3 times for smoother seamless looping
  const duplicatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills]
  const duplicatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills]

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground mt-4">{skills.length}+ Technologies and tools I work with</p>
        </motion.div>

        {/* Row 1 - scrolling right to left (slower) */}
        <div className="relative mb-10">
          {/* Left gradient blur */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10" />
          {/* Right gradient blur */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={shouldAnimate ? {
                x: [0, -windowWidth * 0.8]
              } : {}}
              transition={{
                x: {
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedRow1.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-row1-${index}`}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    transition: { duration: 0.2 } 
                  }}
                  className="group relative p-4 w-36 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default flex-shrink-0"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div className="text-center">
                    <p className="font-semibold text-primary group-hover:text-primary transition-colors text-sm">
                      {skill.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2 - scrolling left to right (opposite direction, slower) */}
        <div className="relative">
          {/* Left gradient blur */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10" />
          {/* Right gradient blur */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={shouldAnimate ? {
                x: [-windowWidth * 0.8, 0]
              } : {}}
              transition={{
                x: {
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedRow2.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-row2-${index}`}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    transition: { duration: 0.2 } 
                  }}
                  className="group relative p-4 w-36 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default flex-shrink-0"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div className="text-center">
                    <p className="font-semibold text-primary group-hover:text-primary transition-colors text-sm">
                      {skill.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats section - Auto-counted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16"
        >
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary">{skills.length}+</div>
            <div className="text-xs text-muted-foreground mt-1">Technologies</div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary">{categoriesCount}+</div>
            <div className="text-xs text-muted-foreground mt-1">Categories</div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary">2+</div>
            <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}