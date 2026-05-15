"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative py-10 px-4 bg-primary/5 backdrop-blur-sm border-t border-primary/20"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 gap-8 text-center mb-10"
        >

          {/* Left */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.freeprivacypolicy.com/live/e2453ac3-e60e-4e15-8ae5-6c30ca965f33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>

            <a
              href="https://www.termsfeed.com/live/0ec04e37-51ab-4c7c-b2c6-bc5c5dc19a46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms Conditions
            </a>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/GITHHUBON"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/bon-sanchez-489ba532a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Linkedin
            </a>

            <a
              href="mailto:github.bon@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

        </motion.div>

        {/* Divider */}

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground">
              © 2026 AI Bon · Building AI Solutions
            </p>
          </motion.div>
      </div>
    </motion.footer>
  )
}