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

// Split skills into two rows
const midpoint = Math.ceil(skills.length / 2)
const row1Skills = skills.slice(0, midpoint)
const row2Skills = skills.slice(midpoint)

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Row 1 - scrolling right to left */}
        <div className="relative mb-8">
          {/* Left blur */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          {/* Right blur */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={shouldAnimate ? {
                x: [0, -window.innerWidth * 1.5]
              } : {}}
              transition={{
                x: {
                  duration: 30,
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
                  whileHover={{ scale: 1.05, y: -5, z: 10, transition: { duration: 0.2 } }}
                  className="group relative p-4 w-36 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default flex-shrink-0"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div className="text-center">
                    <p className="font-medium text-primary group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2 - scrolling left to right (opposite direction) */}
        <div className="relative">
          {/* Left blur */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          {/* Right blur */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={shouldAnimate ? {
                x: [-window.innerWidth * 1.5, 0]
              } : {}}
              transition={{
                x: {
                  duration: 30,
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
                  whileHover={{ scale: 1.05, y: -5, z: 10, transition: { duration: 0.2 } }}
                  className="group relative p-4 w-36 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default flex-shrink-0"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <div className="text-center">
                    <p className="font-medium text-primary group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
        </motion.p>
      </div>
    </section>
  )
}