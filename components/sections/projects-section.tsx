"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink, Github, ChevronDown, ChevronUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomTrigger } from "@/components/custom-trigger"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define the project type
type Project = {
  id: number | string
  title: string
  description: string
  year: number
  github: string
  demo: string
  tags: string[]
  isPlaceholder?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "ETL Development",
    description: "Developed robust ETL pipelines for data extraction, transformation, and loading. Automated data workflows using Apache Airflow and Python for efficient data processing and analytics.",
    year: 2025,
    github: "https://github.com/GITHHUBON",
    demo: "https://example.com",
    tags: ["Python", "Apache Airflow", "ETL", "PostgreSQL"],
  },
  {
    id: 2,
    title: "My Portfolio",
    description: "Personal portfolio website showcasing my skills, projects, and services. Built with modern web technologies and featuring responsive design, smooth animations, and integrated EmailJS for seamless contact form messaging",
    year: 2025,
    github: "https://github.com/GITHHUBON",
    demo: "https://bon-portfolio.netlify.app/",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "My Portfolio 1",
    description: "Personal portfolio website showcasing my skills, projects, and services. Built with modern web technologies featuring responsive design and smooth animations.",
    year: 2025,
    github: "https://github.com/GITHHUBON",
    demo: "https://mybonporfolio2.netlify.app/",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Monitoring & Analytics - AppSheet",
    description: "Built a comprehensive monitoring and analytics dashboard using AppSheet. Features real-time data visualization, automated reporting, and business intelligence insights.",
    year: 2024,
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["AppSheet", "Google Sheets", "Data Analytics", "Power BI"],
  },
]

const years = ["All Years", "2025", "2024"]
const ROWS = 2
const COLUMNS = 3
const PROJECTS_PER_PAGE = ROWS * COLUMNS // 6 projects

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [currentPage, setCurrentPage] = useState(1)
  const [showAllPages, setShowAllPages] = useState(false) // New: show all pages toggle

  const filteredProjects = projects.filter((project) => {
    if (selectedYear === "All Years") return true
    return project.year.toString() === selectedYear
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  
  // If showAllPages is true, show all projects without pagination
  const displayedProjects = showAllPages 
    ? filteredProjects 
    : filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  // Create placeholder projects to always fill the grid
  const getProjectsWithPlaceholders = (): Project[] => {
    const projectsWithPlaceholders = [...displayedProjects]
    const targetCount = showAllPages ? displayedProjects.length : PROJECTS_PER_PAGE
    const placeholderCount = targetCount - projectsWithPlaceholders.length
    
    for (let i = 0; i < placeholderCount; i++) {
      projectsWithPlaceholders.push({
        id: `placeholder-${Date.now()}-${i}`,
        title: "",
        description: "",
        year: 0,
        github: "",
        demo: "",
        tags: [],
        isPlaceholder: true
      })
    }
    return projectsWithPlaceholders
  }

  const projectsToShow = getProjectsWithPlaceholders()
  const hasProjects = filteredProjects.length > 0

  // Handle year filter change
  const handleYearChange = (year: string) => {
    setSelectedYear(year)
    setCurrentPage(1)
    setShowAllPages(false) // Reset show all when filtering
  }

  // Handle page change
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Toggle show all projects
  const toggleShowAll = () => {
    setShowAllPages(!showAllPages)
    if (!showAllPages) {
      // When showing all, scroll to top
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      // When showing less, reset to page 1
      setCurrentPage(1)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />

          {/* Filter and View Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Year Filter Dropdown */}
            {/* Year Filter Dropdown */}
 <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <div role="button" tabIndex={0} className="gap-2 min-w-[150px] bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors rounded-md px-4 py-2 inline-flex items-center justify-center cursor-pointer">
      <Calendar className="h-4 w-4 text-primary" />
      <span className="text-primary">{selectedYear}</span>
      <ChevronDown className="h-4 w-4 ml-auto text-primary" />
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="center" className="min-w-[150px] bg-background/95 backdrop-blur-sm border-primary/20">
    {years.map((year) => (
      <DropdownMenuItem
        key={year}
        onClick={() => handleYearChange(year)}
        className={`cursor-pointer transition-colors ${
          selectedYear === year 
            ? "bg-primary/20 text-primary" 
            : "hover:bg-primary/10 hover:text-primary"
        }`}
      >
        {year}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
 </DropdownMenu>

            {/* Show All / Show Less Button */}
            {totalPages > 1 && (
              <Button
                variant="outline"
                onClick={toggleShowAll}
                className="gap-2 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                {showAllPages ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show All ({filteredProjects.length} projects) <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="min-h-[600px]">
          <motion.div
            key={selectedYear + currentPage + showAllPages}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsToShow.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border transition-all duration-300 h-full ${
                  project.isPlaceholder 
                    ? "bg-primary/5 border-primary/10 opacity-0 invisible" 
                    : "group bg-primary/5 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                }`}
                whileHover={!project.isPlaceholder ? { y: -5 } : {}}
              >
                {!project.isPlaceholder && (
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                        {project.year}
                      </span>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all"
                          aria-label="View Live Demo"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/5 text-primary rounded-md text-xs font-medium border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Controls - Only show when NOT in "Show All" mode */}
        {hasProjects && totalPages > 1 && !showAllPages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <Button
              variant="outline"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="gap-2 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronUp className="h-4 w-4 rotate-90" />
              Previous
            </Button>
            
            <span className="text-muted-foreground text-sm">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="outline"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="gap-2 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
          </motion.div>
        )}

        {/* Results count when showing all */}
        {showAllPages && hasProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              Showing all {filteredProjects.length} projects
            </p>
          </motion.div>
        )}

        {/* No results message */}
        {!hasProjects && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <Calendar className="h-10 w-10 text-primary/50" />
            </div>
            <p className="text-muted-foreground text-lg">No projects found for {selectedYear}</p>
            <Button
              variant="link"
              onClick={() => handleYearChange("All Years")}
              className="mt-2 text-primary hover:text-primary/80"
            >
              Show all projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}