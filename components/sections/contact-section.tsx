"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Clock, Youtube, Facebook, Instagram, ChevronRight, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "github.bon@gmail.com",
    href: "mailto:github.bon@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Metro Manila, Philippines",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

const socialMedia = [
  { icon: Github, href: "https://github.com/GITHHUBON", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bon-sanchez-489ba532a/", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { 
    icon: () => (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    href: "https://tiktok.com",
    label: "TikTok",
  },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          {/* Contact Info Grid - Left aligned with right side content */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between py-3 border-b border-primary/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">{info.label}:</span>
                    </div>
                    <div className="text-right">
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-sm">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Availability & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Availability Badge */}
              <div className="flex flex-col items-end">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-primary/5 rounded-full border border-primary/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="font-medium text-primary text-sm">Available for Freelance</span>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with me on social media for updates and collaborations
                </p>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-3.5 w-3.5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center pt-8 border-t border-primary/10"
          >
            <p className="text-muted-foreground text-sm mb-2">
              Ready to transform your ideas into impactful digital solutions?
            </p>
            <p className="text-foreground font-medium text-lg">
              Let's discuss your project and create something exceptional together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}