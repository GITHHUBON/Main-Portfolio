"use client"

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, BarChart3, Briefcase, Database, Code2, Settings, Zap, Award, Clock, Users, FileText, AppWindow, Server, Globe, Shield } from 'lucide-react'

// Service data
const servicesData: Record<string, any> = {
  'it-analytics': {
    title: 'IT Analytics',
    icon: BarChart3,
    description: 'Transform raw data into actionable IT insights. Monitor systems, analyze performance metrics, and drive data-informed decisions for your technology infrastructure.',
    specialize: 'IT Analytics specializes in data analysis, reporting, and providing actionable insights for IT infrastructure. We help organizations make data-driven decisions through comprehensive reporting and analytics solutions.',
    focus: 'Focus on reporting and data analysis',
    benefits: [
      'Comprehensive data reporting and visualization',
      'Actionable insights for IT decision making',
      'Real-time performance monitoring',
      'Data-driven infrastructure optimization',
      'Custom dashboard development'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'Looker Studio'],
    specializations: [
      'Data Analysis & Reporting',
      'IT Performance Metrics',
      'System Health Monitoring',
      'Data Visualization',
      'KPI Tracking & Dashboards',
      'Trend Analysis',
      'Capacity Planning Reports',
      'Cost Optimization Analytics'
    ]
  },
  'business-analytics': {
    title: 'Business Analytics',
    icon: Briefcase,
    description: 'Unlock business potential through comprehensive analytics. From market trends to operational efficiency, get insights that drive growth and profitability.',
    specialize: 'Business Analytics specializes in data analysis, reporting, and application management. We help businesses optimize operations through insightful analytics and efficient application handling.',
    focus: 'Focus on analytics, reporting, and application management',
    benefits: [
      'Data-driven business insights',
      'Automated reporting systems',
      'Application performance optimization',
      'Operational efficiency improvement',
      'Strategic decision support'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'AppSheet', 'Google Analytics'],
    specializations: [
      'Business Data Analysis',
      'Automated Reporting',
      'Application Management',
      'Performance Metrics',
      'Dashboard Development',
      'User Behavior Analytics',
      'Sales & Marketing Analytics',
      'Operational Reporting'
    ]
  },
  'data-development': {
    title: 'Data Development',
    icon: Database,
    description: 'Build robust data pipelines and warehouses. ETL development, database optimization, and data architecture designed for scalability and reliability.',
    specialize: 'Data Development specializes in ETL development using modern tools and technologies. We build scalable data pipelines that process and transform data efficiently.',
    focus: 'Focus on ETL development using Airflow, Python, SQL, API, and PostgreSQL',
    benefits: [
      'Automated ETL pipelines with Apache Airflow',
      'Efficient data processing with Python',
      'Optimized SQL queries and database design',
      'Seamless API integrations',
      'Scalable PostgreSQL databases'
    ],
    technologies: ['Apache Airflow', 'Python', 'SQL', 'REST APIs', 'PostgreSQL', 'Docker'],
    specializations: [
      'ETL Pipeline Development',
      'Apache Airflow Workflows',
      'Python Data Processing',
      'SQL Optimization',
      'API Integration & Development',
      'PostgreSQL Database Design',
      'Data Warehouse Architecture',
      'Data Migration & Transformation'
    ]
  },
  'web-development': {
    title: 'Web Development',
    icon: Code2,
    description: 'Create modern, responsive web applications. From landing pages to full-stack solutions, built with cutting-edge technologies and best practices.',
    specialize: 'Web Development specializes in frontend development using modern frameworks. We create beautiful, responsive, and performant web applications.',
    focus: 'Focus on frontend development using Vue.js, Next.js, Tailwind CSS, HTML, CSS, and JavaScript',
    benefits: [
      'Modern frontend with Vue.js & Next.js',
      'Responsive design with Tailwind CSS',
      'Clean HTML5 & CSS3 code',
      'Interactive JavaScript applications',
      'Optimized performance & SEO'
    ],
    technologies: ['Vue.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    specializations: [
      'Vue.js Application Development',
      'Next.js & React Development',
      'Tailwind CSS Styling',
      'Responsive Web Design',
      'HTML5 Semantic Markup',
      'CSS3 Animations & Effects',
      'Vanilla JavaScript',
      'Frontend Performance Optimization'
    ]
  },
  'application-administration': {
    title: 'Application Administration',
    icon: Settings,
    description: 'Expert management of business applications. AppSheet, AppsScript, and enterprise tools configured and maintained for optimal performance.',
    specialize: 'Application Administration specializes in handling and managing business applications. We ensure your applications run smoothly and efficiently.',
    focus: 'Focus on handling and managing applications',
    benefits: [
      'Proactive maintenance and updates',
      'User access management',
      'Performance optimization',
      'Issue resolution & support'
    ],
    technologies: ['AppSheet', 'Google AppsScript', 'Admin Dashboards', 'Monitoring Tools', 'Log Management'],
    specializations: [
      'Application Monitoring',
      'User Access Management',
      'Performance Tuning',
      'Security Administration',
      'Backup & Recovery',
      'Update & Patch Management',
      'Issue Troubleshooting',
      'Application Integration'
    ]
  }
}

// Use "any" for params to avoid type issues
export default function ServiceDetailPage({ params }: { params: any }) {
  const slug = params.slug
  const service = servicesData[slug]
  
  if (!service) {
    notFound()
  }
  
  const Icon = service.icon
  
  // Get focus icon based on service type
  const getFocusIcon = () => {
    if (slug.includes('analytics')) return FileText
    if (slug === 'data-development') return Server
    if (slug === 'web-development') return Globe
    if (slug === 'application-administration') return Shield
    return AppWindow
  }
  
  const FocusIcon = getFocusIcon()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Back Button */}
        <Link href="/#services">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Icon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Focus Section */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl border border-primary/20 p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-xl">
                <FocusIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Primary Focus</h2>
                <p className="text-lg text-primary font-semibold">{service.focus}</p>
              </div>
            </div>
          </div>

          {/* Specialization Section */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">What {service.title} Specializes In</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {service.specialize}
            </p>
          </div>

          {/* Key Specializations Grid */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">Core Specializations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.specializations.map((spec: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits and Technologies Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-8 mb-8">
            <Clock className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-4">Why Choose Our {service.title} Service?</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                Specialized expertise in {service.focus.toLowerCase()}
              </p>
              <p className="text-muted-foreground flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                Proven track record with successful implementations
              </p>
              <p className="text-muted-foreground flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                Tailored solutions for your specific needs
              </p>
              <p className="text-muted-foreground flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                Dedicated support and maintenance
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link href="/#contact">
              <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started with {service.title}
              </button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation. No obligation. Let's discuss your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}