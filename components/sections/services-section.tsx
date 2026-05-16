"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { BarChart3, Briefcase, Database, Code2, Settings, Star, X, Send, User, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

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

// Testimonials data
interface Testimonial {
  id: number
  rating: number
  feedback: string
  clientName: string
  company?: string
  service: string
  date: string
}

// Sample testimonials
const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    rating: 4,
    feedback: "Very fast and professional work. Delivered exactly what we needed ahead of schedule.",
    clientName: "John D.",
    company: "Marketing Manager",
    service: "IT Analytics",
    date: "2025-10-05",
  },
  {
    id: 2,
    rating: 3,
    feedback: "The data pipeline solution transformed our business operations. Highly recommended!",
    clientName: "Sarah C.",
    company: "Data Director",
    service: "Data Development",
    date: "2025-07-02",
  },
  {
    id: 3,
    rating: 4,
    feedback: "Great web development work. Very responsive and easy to work with.",
    clientName: "Mike R.",
    company: "Product Owner",
    service: "Web Development",
    date: "2026-04-02",
  },
]

// Feedback Form Component
function FeedbackForm({ onClose, onSuccess }: { onClose: () => void; onSuccess: (testimonial: Testimonial) => void }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [clientName, setClientName] = useState("")
  const [company, setCompany] = useState("")
  const [selectedService, setSelectedService] = useState(services[0].title)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    if (rating > 0 && feedback.trim() && clientName.trim()) {
      setIsSubmitting(true)
      
      const newTestimonial: Testimonial = {
        id: Date.now(),
        rating,
        feedback,
        clientName,
        company: company || undefined,
        service: selectedService,
        date: new Date().toISOString().split('T')[0],
      }
      
      setTimeout(() => {
        onSuccess(newTestimonial)
        setIsSubmitting(false)
        onClose()
        setRating(0)
        setFeedback("")
        setClientName("")
        setCompany("")
      }, 1000)
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md max-h-[90vh] overflow-y-auto">
        <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between sticky top-0">
            <h3 className="text-lg font-semibold text-primary-foreground">Share Your Experience</h3>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-2 block">Which service did you use?</label>
              <select
  value={selectedService}
  onChange={(e) => setSelectedService(e.target.value)}
  className="
    w-full px-4 py-2
    bg-primary/5
    border border-primary/20
    rounded-lg
    text-sm
    text-black dark:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
>
  {services.map((service) => (
    <option
      key={service.title}
      value={service.title}
      className="bg-white text-black"
    >
      {service.title}
    </option>
  ))}
</select>
            </div>

            <div className="text-center mb-4">
              <label className="text-sm font-medium text-foreground mb-2 block">Your Rating *</label>
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

            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-2 block">Your Feedback *</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={4}
                className="w-full px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-foreground mb-2 block">Your Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g., John D."
                  className="w-full pl-10 pr-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-2 block">Company (Optional)</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g., Marketing Manager"
                className="w-full px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={rating === 0 || !feedback.trim() || !clientName.trim() || isSubmitting}
              className="w-full gap-2 bg-primary hover:bg-primary/80"
            >
              {isSubmitting ? <>Submitting...</> : <><Send className="h-4 w-4" /> Submit Feedback</>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary/5 backdrop-blur-sm rounded-xl border border-primary/20 p-5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
          />
        ))}
      </div>
      <Quote className="h-4 w-4 text-primary/50 mb-2" />
      <p className="text-sm text-foreground mb-3 italic">"{testimonial.feedback}"</p>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-primary/10">
        <div>
          <p className="text-sm font-semibold text-primary">— {testimonial.clientName}</p>
          {testimonial.company && <p className="text-xs text-muted-foreground">{testimonial.company}</p>}
        </div>
        <span className="text-xs text-muted-foreground">{testimonial.service}</span>
      </div>
    </motion.div>
  )
}

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
      className={`flex flex-col md:flex-row gap-6 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}
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
        <p className="text-muted-foreground text-lg text-pretty">{service.description}</p>
      </motion.div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials([newTestimonial, ...testimonials])
  }

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
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />

          <div className="flex justify-center">
        <motion.button
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 gap-2 px-4 py-2 rounded-md flex items-center"
          style={{ cursor: "pointer" }}
          >
          <Star className="h-4 w-4" />
          Leave Feedback
        </motion.button>
          </div>
        </motion.div>

        {/* Services List */}
        <div className="space-y-12 mb-20">
          {services.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Clean Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-primary/10"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">What Our Clients Say</h3>
            <p className="text-muted-foreground">Real feedback from real clients</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {isFormOpen && <FeedbackForm onClose={() => setIsFormOpen(false)} onSuccess={handleAddTestimonial} />}
    </section>
  )
}