import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Code, Database, Network } from 'lucide-react'

const Education = () => {
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

  const educationList = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science and Engineering (CSE)",
      institution: "Mandava Institute of Engineering and Technology",
      duration: "June 2021 – May 2024",
      score: "7.33",
      scoreType: "CGPA",
      location: "Jaggayyapeta,India",
      description: "Comprehensive study of computer science fundamentals, programming, and software engineering",
      coursework: [
        {
          name: "Data Structures and Algorithms",
          icon: Code,
          description: "Advanced problem-solving techniques and algorithmic thinking"
        },
        {
          name: "Object-Oriented Programming",
          icon: Code,
          description: "Design patterns and software engineering principles"
        },
        {
          name: "Database Management Systems",
          icon: Database,
          description: "Relational databases, SQL, and data modeling"
        },
        {
          name: "Operating Systems",
          icon: Network,
          description: "System architecture and process management"
        },
        {
          name: "Computer Networks",
          icon: Network,
          description: "Network protocols and distributed systems"
        },
        {
          name: "Distributed Systems",
          icon: Network,
          description: "Scalable system design and architecture"
        }
      ]
    },
    {
      id: 2,
      degree: "Diploma in Mechanical Engineering",
      institution: "Bapatla Polytechnic College",
      duration: "2019 – 2021",
      score: "68.06",
      scoreType: "Percentage",
      location: "Bapatla, India",
      description: "Technical education in mechanical engineering principles, design, and manufacturing",
      coursework: [
        {
          name: "Engineering Mechanics",
          icon: Network,
          description: "Fundamentals of statics and dynamics in engineering"
        },
        {
          name: "Manufacturing Processes",
          icon: Code,
          description: "Production techniques and industrial processes"
        },
        {
          name: "Machine Design",
          icon: Database,
          description: "Design principles for mechanical systems and components"
        },
        {
          name: "Thermodynamics",
          icon: Network,
          description: "Heat transfer and energy systems"
        }
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (10th Class)",
      institution: "Z.P.H School V.Reddy Palem",
      duration: "2018 – 2019",
      score: "8.5",
      scoreType: "GPA",
      location: "V.Reddy Palem, India",
      description: "Foundation education with focus on mathematics, sciences, and languages",
      coursework: [
        {
          name: "Mathematics",
          icon: Code,
          description: "Algebra, geometry, and basic calculus concepts"
        },
        {
          name: "Physical Sciences",
          icon: Network,
          description: "Physics and chemistry fundamentals"
        },
        {
          name: "English Language",
          icon: BookOpen,
          description: "Communication and language skills"
        },
        {
          name: "Social Studies",
          icon: Database,
          description: "History, geography, and civic studies"
        }
      ]
    }
  ]

  const achievements = [
    {
      title: "Academic Progression",
      description: "Successfully completed education across three levels with consistent performance",
      icon: Award,
      color: "neural-cyan"
    },
    {
      title: "Diverse Engineering Background",
      description: "Cross-disciplinary expertise from Mechanical to Computer Science Engineering",
      icon: Code,
      color: "neural-green"
    },
    {
      title: "Technical Excellence",
      description: "Strong foundation in both mechanical systems and software development",
      icon: BookOpen,
      color: "neural-purple"
    },
    {
      title: "Continuous Learning",
      description: "6+ years of dedicated academic pursuit and skill development",
      icon: GraduationCap,
      color: "neural-cyan"
    }
  ]

  const skills_learned = [
    "Problem Solving & Algorithmic Thinking",
    "Software Design & Architecture",
    "Database Design & Management",
    "System Analysis & Design",
    "Team Collaboration & Leadership",
    "Research & Documentation"
  ]

  const getColorClass = (color) => {
    switch (color) {
      case 'neural-cyan': return 'text-neural-cyan bg-neural-cyan/10 border-neural-cyan/30'
      case 'neural-green': return 'text-neural-green bg-neural-green/10 border-neural-green/30'
      case 'neural-purple': return 'text-neural-purple bg-neural-purple/10 border-neural-purple/30'
      default: return 'text-neural-cyan bg-neural-cyan/10 border-neural-cyan/30'
    }
  }

  return (
    <section id="education" className="section-padding bg-neural-mesh">
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
              <span className="text-gradient">Education</span> & Learning
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neural-gradient mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Academic foundation and continuous learning journey in computer science and technology
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8">
              {educationList.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="neural-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.005, y: -1 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-5">
                    <GraduationCap 
                      size={index === 0 ? 64 : 56} 
                      className="text-neural-cyan sm:w-24 sm:h-24 md:w-32 md:h-32" 
                    />
                  </div>


                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                      <div className="flex items-start space-x-3 sm:space-x-4 mb-4 lg:mb-0 flex-1">
                        <div className="p-2 sm:p-3 md:p-4 bg-neural-gradient rounded-lg sm:rounded-xl flex-shrink-0">
                          <GraduationCap size={24} className="text-white sm:w-7 sm:h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                            {edu.degree}
                          </h3>
                          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-neural-cyan mb-2 leading-tight">
                            {edu.institution}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
                            {edu.description}
                          </p>
                          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} className="flex-shrink-0" />
                              <span className="truncate">{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} className="flex-shrink-0" />
                              <span className="truncate">{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center lg:text-right flex-shrink-0 mt-4 lg:mt-0">
                        <div className={`inline-block p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                          edu.level === 'Undergraduate' ? 'bg-neural-green/20 border-neural-green/30' :
                          edu.level === 'Diploma' ? 'bg-neural-cyan/20 border-neural-cyan/30' :
                          'bg-neural-purple/20 border-neural-purple/30'
                        }`}>
                          <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 ${
                            edu.level === 'Undergraduate' ? 'text-neural-green' :
                            edu.level === 'Diploma' ? 'text-neural-cyan' :
                            'text-neural-purple'
                          }`}>
                            {edu.score}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">{edu.scoreType}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* B.Tech Coursework */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center flex-wrap">
              <BookOpen className="mr-2 sm:mr-3 text-neural-cyan flex-shrink-0" size={24} />
              <span>Core Computer Science Coursework</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {educationList[0].coursework.map((course, index) => (
                <motion.div
                  key={index}
                  className="neural-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-neural-cyan/40 transition-all duration-300"
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-neural-cyan/20 rounded-lg border border-neural-cyan/30 flex-shrink-0">
                      <course.icon size={20} className="text-neural-cyan sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">{course.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{course.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center flex-wrap">
              <Award className="mr-2 sm:mr-3 text-neural-green flex-shrink-0" size={24} />
              <span>Educational Achievements</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="neural-card rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-opacity-60 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <div className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 ${getColorClass(achievement.color)}`}>
                    <achievement.icon size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">{achievement.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Developed */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
              Skills Developed During Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {skills_learned.map((skill, index) => (
                <motion.div
                  key={index}
                  className="neural-card rounded-lg p-3 sm:p-4 text-center hover:border-neural-green/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <div className="text-neural-green font-medium text-sm sm:text-base leading-relaxed">{skill}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants}>
            <div className="neural-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Educational Journey & Learning Philosophy
              </h3>
              <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 italic leading-relaxed mb-4 sm:mb-6 max-w-4xl mx-auto">
                "My educational journey spans from foundational learning to specialized technical expertise. 
                Starting with a strong academic foundation, progressing through mechanical engineering, and 
                culminating in computer science, each phase has contributed to developing critical thinking, 
                problem-solving abilities, and adaptability to new technologies."
              </blockquote>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-neural-green mb-1 sm:mb-2">3</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Qualifications</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-neural-cyan mb-1 sm:mb-2">2</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Engineering Fields</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-neural-green mb-1 sm:mb-2">7.33</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Latest CGPA</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education