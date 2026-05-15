"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
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
]

const categories = ["All", "Programming", "Frontend", "Backend", "Database", "Data", "Analytics", "Tools"]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative p-4 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
            >
              <div className="text-center">
                <p className="font-medium text-primary group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
