import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { LiveChat } from "@/components/live-chat"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden overflow-hidden w-full max-w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <LiveChat />
    </main>
  )
}
