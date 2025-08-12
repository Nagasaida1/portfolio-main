import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, TrendingUp, Code, Database, Zap, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const experiences = [
    {
      title: "Web Developer",
      company: "RNR Systems",
      companyLogo: "/rnrlogo.jpg",
      location: "Hyderabad, India",
      period: "March 2025 – Present",
      type: "Full-time",
      projects: [
        {
          name: "UrgentSales.in – Real Estate Web Application",
          companyLogo: "/urgentlog.png",
          description: "Urgentsales.in needed a working web app to manage real estate listings and user actions.",
          responsibilities: [
            "Developed the full system to let users view, search, and manage property listings",
            "Used React with Vite for the frontend, Node.js and Express.js for 50+ backend APIs",
            "Implemented PostgreSQL with 25+ tables, and TypeScript with GitHub for version control"
          ],
          achievements: [
            "Handled 200+ listings successfully",
            "Cut bounce rate by 25%",
            "Optimized the site 20% faster using lazy loading and better API handling"
          ],
          technologies: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "TypeScript", "GitHub"],
          icon: Database,
          color: "neural-cyan"
        },
        {
          name: "RNR Systems – 3D Product Showcase Website",
          companyLogo: "/rnrlogo.jpg",
          description: "Engineered a cutting-edge 3D product showcase website for RNR Systems.",
          responsibilities: [
            "Built using React, Tailwind CSS, Three.js, and Node.js",
            "Created 15+ components with Context API",
            "Added 10+ animations using Framer Motion and GSAP",
            "Implemented 5+ product sections with hover effects and contact form using Nodemailer and SMTP"
          ],
          achievements: [
            "Boosted load speed by 30%",
            "Ensured full responsiveness across devices using Tailwind CSS",
            "Enhanced user engagement with interactive 3D elements"
          ],
          technologies: ["React", "Tailwind CSS", "Three.js", "Node.js", "Framer Motion", "GSAP", "Nodemailer"],
          icon: Code,
          color: "neural-green"
        }
      ]
    }
  ]

  const getColorClass = (color) => {
    switch (color) {
      case 'neural-cyan': return 'text-neural-cyan border-neural-cyan bg-neural-cyan/10'
      case 'neural-green': return 'text-neural-green border-neural-green bg-neural-green/10'
      default: return 'text-neural-cyan border-neural-cyan bg-neural-cyan/10'
    }
  }

  return (
    <section id="experience" className="section-padding bg-neural-mesh">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neural-gradient mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Professional journey building scalable web applications and delivering exceptional results
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neural-cyan via-neural-green to-neural-purple"></div>

            {experiences.map((experience, expIndex) => (
              <motion.div
                key={expIndex}
                variants={itemVariants}
                className="relative mb-12 sm:mb-16"
              >
                {/* Timeline Node */}
                <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-neural-gradient rounded-full border-2 sm:border-4 border-neural-dark z-10"></div>

                {/* Experience Card */}
                <div className="ml-8 sm:ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 items-start">
                  <div className={`${expIndex % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <motion.div
                      className="neural-card rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8"
                      whileHover={{ scale: 1.01, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col md:items-start mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">{experience.title}</h3>
                        
                        {/* Company Info with Logo */}
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-lg p-2 flex items-center justify-center shadow-lg">
                            <img 
                              src={experience.companyLogo} 
                              alt={`${experience.company} Logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-neural-cyan">{experience.company}</h4>
                            <p className="text-xs text-gray-400">Technology Solutions</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} className="flex-shrink-0" />
                            <span className="truncate">{experience.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} className="flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="px-2 py-1 bg-neural-green/20 text-neural-green rounded-full text-xs">
                            {experience.type}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Projects */}
                  <div className={`space-y-8 ${expIndex % 2 === 0 ? 'md:order-2' : ''}`}>
                    {experience.projects.map((project, projIndex) => (
                      <motion.div
                        key={projIndex}
                        className="neural-card rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                        variants={itemVariants}
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          {/* Project Icon */}
                          <div className="w-12 h-12 bg-white/90 rounded-md p-0.5 flex items-center justify-center">
                                <img 
                                  src={project.companyLogo} 
                                  alt="Company Logo"
                                  className="w-full h-full object-contain"
                                  loading="lazy"
                                />
                              </div>
                          
                          <div className="flex-1">
                            {/* Project Name with Company Logo */}
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-lg font-bold text-white flex items-center">
                                {project.name}
                                <ExternalLink size={16} className="ml-2 text-neural-cyan opacity-60" />
                              </h4>
                              
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-neural-cyan mb-2">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-neural-blue/30 text-neural-cyan text-xs rounded-full border border-neural-cyan/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-white mb-2 flex items-center">
                            <Code size={16} className="mr-2 text-neural-green" />
                            Key Responsibilities:
                          </h5>
                          <ul className="space-y-1">
                            {project.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="text-gray-400 text-sm flex items-start">
                                <span className="text-neural-green mr-2 mt-1">•</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2 flex items-center">
                            <TrendingUp size={16} className="mr-2 text-neural-cyan" />
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                                <Zap size={12} className="text-neural-cyan mr-2 mt-1 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="neural-card rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Impact & Achievements</h3>
              
              {/* Company Logos Section */}
              

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-neural-cyan mb-2">50+</div>
                  <div className="text-gray-400">APIs Developed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neural-green mb-2">25+</div>
                  <div className="text-gray-400">Database Tables</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neural-cyan mb-2">200+</div>
                  <div className="text-gray-400">Property Listings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neural-green mb-2">30%</div>
                  <div className="text-gray-400">Performance Boost</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                My professional journey at <span className="text-neural-cyan font-semibold">RNR Systems</span> has been transformative, 
                working on cutting-edge projects like the <span className="text-neural-green font-semibold">UrgentSales.in</span> real estate platform 
                and innovative 3D showcase websites. These experiences have honed my expertise in full-stack development and delivered 
                measurable business impact through enhanced user experience and optimized performance.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience