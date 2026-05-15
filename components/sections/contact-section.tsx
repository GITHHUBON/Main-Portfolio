"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Clock, Youtube, Facebook, Instagram, ChevronRight, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bon@aianalytics.dev",
    href: "mailto:bon@aianalytics.dev",
    description: "Send me an email anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Metro Manila, Philippines",
    href: null,
    description: "Available for remote work worldwide",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    description: "Usually faster on weekdays",
  },
]

const socialMedia = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/5",
  },
  {
    icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube",
    color: "hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/5",
  },
  {
    icon: () => (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    href: "https://tiktok.com",
    label: "TikTok",
    color: "hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/5",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    color: "hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/5",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/5",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Top Row: Availability Badge (Left) + Social Media (Right) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Availability Badge - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full md:w-auto"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <div className="text-left">
                  <p className="font-medium text-primary">Available for Freelance</p>
                  <p className="text-xs text-muted-foreground">
                    Open to opportunities and collaborations
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media - Right side with improved text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full md:w-auto text-center md:text-right"
            >
              <p className="text-sm text-muted-foreground mb-3">
                Connect with me on social media for updates and collaborations
              </p>
              <div className="flex items-center justify-center md:justify-end gap-2">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-full bg-primary/5 border border-primary/20 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Info Cards - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-12"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group bg-primary/5 backdrop-blur-sm rounded-xl border border-primary/20 p-6 hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                        >
                          {info.value}
                          <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <>
                          <p className="text-foreground text-sm font-medium">{info.value}</p>
                          <p className="text-muted-foreground text-xs mt-1">{info.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-center pt-8 pb-4"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-muted-foreground text-sm mb-2">
                Ready to transform your ideas into impactful digital solutions?
              </p>
              <p className="text-foreground font-medium text-lg">
               Let's discuss your project and create something exceptional together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}