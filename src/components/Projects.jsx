import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, TrendingUp, Users, Zap, Database, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const projects = [
    {
      id: 1,
      title: "UrgentSales Real Estate App",
      category: "fullstack",
      description: "A comprehensive real estate web application that manages property listings and user interactions with advanced search and filtering capabilities.",
      longDescription: "UrgentSales.in is a full-featured real estate platform built to handle complex property management workflows. The application features a React frontend with Vite for optimal performance, a robust Node.js backend with 50+ APIs, and a PostgreSQL database with 25+ tables for comprehensive data management.",
      image: "/urgentsales.png",
      technologies: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "TypeScript", "GitHub"],
      features: [
        "Property listing management",
        "Advanced search and filtering",
        "User authentication and profiles",
        "Real-time notifications",
        "Responsive design"
      ],
      achievements: [
        "Managed 200+ property listings",
        "Reduced bounce rate by 25%",
        "Improved site speed by 20%"
      ],
      metrics: {
        users: "200+",
        performance: "25%",
        speed: "20%"
      },
      links: {
        live: "https://urgentsales.in",
        github: "#"
      },
      status: "Live",
      year: "2025"
    },
    {
      id: 2,
      title: "RNR Product 3D Showcase",
      category: "frontend",
      description: "An innovative 3D product showcase website featuring interactive product visualization with Three.js and modern animations.",
      longDescription: "A cutting-edge 3D product showcase platform that revolutionizes how products are presented online. Built with React, Tailwind CSS, and Three.js, it features 15+ reusable components, 10+ custom animations, and interactive 3D product views that enhance user engagement.",
      image: "/rnrsystems.png",
      technologies: ["React", "Tailwind CSS", "Three.js", "Node.js", "Framer Motion", "GSAP", "Nodemailer"],
      features: [
        "Interactive 3D product views",
        "Smooth animations and transitions",
        "Responsive design across devices",
        "Contact form integration",
        "Performance optimized"
      ],
      achievements: [
        "Boosted load speed by 30%",
        "Created 15+ reusable components",
        "Implemented 10+ custom animations"
      ],
      metrics: {
        performance: "30%",
        components: "15+",
        animations: "10+"
      },
      links: {
        live: "https://rnrsystems.in",
        github: "#"
      },
      status: "Live",
      year: "2025"
    },
    {
      id: 3,
      title: "Expense Tracker",
      category: "fullstack",
      description: "A comprehensive expense tracking application built with Django and Python, featuring advanced analytics and secure data management.",
      longDescription: "A full-featured expense tracking application that helps users manage their finances effectively. Built with Django, Python, and MySQL, it provides comprehensive expense categorization, reporting, and analytics with enhanced security features.",
      image: "/project-placeholder.svg",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Expense categorization",
        "Financial analytics and reports",
        "Secure user authentication",
        "Data visualization",
        "Export functionality"
      ],
      achievements: [
        "Improved user engagement by 45%",
        "Enhanced security by 50%",
        "Reduced response time by 20%"
      ],
      metrics: {
        engagement: "45%",
        security: "50%",
        performance: "20%"
      },
      links: {
        live: "#",
        github: "https://github.com/Nagasaida1/Expense-Tracker"
      },
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      title: "YouTube Downloader",
      category: "backend",
      description: "A high-performance YouTube video downloader with HD support, built using Python and FastAPI for optimal speed and reliability.",
      longDescription: "A powerful YouTube video downloader application that supports HD video downloads with optimized performance. Built with Python and FastAPI, it features cross-browser compatibility and efficient server resource management.",
      image: "/project-placeholder.svg",
      technologies: ["Python", "FastAPI", "HTML", "CSS", "JavaScript"],
      features: [
        "HD video download support",
        "Cross-browser compatibility",
        "Fast download speeds",
        "User-friendly interface",
        "Multiple format support"
      ],
      achievements: [
        "Accelerated download speed by 25%",
        "Reduced server load by 30%",
        "Improved user experience by 20%"
      ],
      metrics: {
        speed: "25%",
        efficiency: "30%",
        experience: "20%"
      },
      links: {
        live: "#",
        github: "https://github.com/Nagasaida1/YouTube-video-downloader"
      },
      status: "Completed",
      year: "2024"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-neural-green/20 text-neural-green border-neural-green/30'
      case 'Completed': return 'bg-neural-cyan/20 text-neural-cyan border-neural-cyan/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="projects" className="section-padding bg-neural-dark">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neural-gradient mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-neural-gradient text-white shadow-lg'
                    : 'bg-neural-card border border-neural-cyan/30 text-gray-300 hover:border-neural-cyan/50'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">{category.name} ({category.count})</span>
                <span className="sm:hidden">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="project-card rounded-xl sm:rounded-2xl overflow-hidden group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-64 bg-neural-blue overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-neural-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.links.live !== "#" && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-neural-cyan rounded-full text-white hover:bg-neural-green transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      {project.links.github !== "#" && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-neural-green rounded-full text-white hover:bg-neural-cyan transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-neural-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-neural-blue/30 text-neural-cyan text-xs rounded-full border border-neural-cyan/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-neural-cyan">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                        <Eye size={16} className="mr-2 text-neural-green" />
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-start">
                            <span className="text-neural-green mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.links.live !== "#" && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 neural-button py-2 px-4 rounded-lg text-center text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Live
                        </motion.a>
                      )}
                      {project.links.github !== "#" && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 border border-neural-cyan text-neural-cyan rounded-lg hover:bg-neural-cyan hover:text-neural-dark transition-all duration-300 text-sm font-medium flex items-center justify-center ${project.links.live === "#" ? "flex-1" : ""}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={16} className="mr-2" />
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Projects Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="neural-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Project Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <TrendingUp size={32} className="text-neural-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neural-cyan mb-1">45%</div>
                  <div className="text-sm text-gray-400">Avg. Performance Boost</div>
                </div>
                <div>
                  <Users size={32} className="text-neural-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neural-green mb-1">200+</div>
                  <div className="text-sm text-gray-400">Users Served</div>
                </div>
                <div>
                  <Zap size={32} className="text-neural-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neural-cyan mb-1">50+</div>
                  <div className="text-sm text-gray-400">APIs Built</div>
                </div>
                <div>
                  <Database size={32} className="text-neural-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neural-green mb-1">4</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Each project represents a unique challenge solved with modern technologies and best practices. 
                From real estate platforms to 3D showcases, I focus on delivering measurable results and exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects