"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, Briefcase, Database, Code2, Settings } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "IT Analytics",
    description: "Transform raw data into actionable IT insights. Monitor systems, analyze performance metrics, and drive data-informed decisions for your technology infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Business Analytics",
    description: "Unlock business potential through comprehensive analytics. From market trends to operational efficiency, get insights that drive growth and profitability.",
  },
  {
    icon: Database,
    title: "Data Development",
    description: "Build robust data pipelines and warehouses. ETL development, database optimization, and data architecture designed for scalability and reliability.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Create modern, responsive web applications. From landing pages to full-stack solutions, built with cutting-edge technologies and best practices.",
  },
  {
    icon: Settings,
    title: "Application Administration",
    description: "Expert management of business applications. AppSheet, AppsScript, and enterprise tools configured and maintained for optimal performance.",
  },
]

function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-50px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col md:flex-row gap-6 items-center ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div 
        className="w-full md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: isEven ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -80 : 80 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
          className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-colors"
        >
          <service.icon className="h-10 w-10 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div 
        className={`w-full md:w-2/3 text-center ${isEven ? "md:text-left" : "md:text-right"}`}
        initial={{ opacity: 0, x: isEven ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 80 : -80 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <motion.h3 
          className="text-2xl font-semibold mb-3 text-primary"
          whileHover={{ x: isEven ? 5 : -5 }}
          transition={{ duration: 0.2 }}
        >
          {service.title}
        </motion.h3>
        <p className="text-muted-foreground text-lg text-pretty">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
