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
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>

            <a
              href="/terms"
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Github
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Linkedin
            </a>

            <a
              href="mailto:bon@aianalytics.dev"
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