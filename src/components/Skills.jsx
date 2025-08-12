import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      color: "neural-cyan",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML", level: 95, icon: "🌐" },
        { name: "CSS", level: 90, icon: "🎨" }
      ]
    },
    {
      title: "Frontend Technologies",
      color: "neural-green",
      skills: [
        { name: "React.js", level: 92, icon: "⚛️" },
        { name: "Bootstrap", level: 88, icon: "🅱️" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Three.js", level: 75, icon: "🎮" },
        { name: "Framer Motion", level: 80, icon: "🎭" }
      ]
    },
    {
      title: "Backend & APIs",
      color: "neural-purple",
      skills: [
        { name: "Django", level: 93, icon: "🎯" },
        { name: "Node.js", level: 87, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "REST API", level: 90, icon: "🔗" },
        { name: "FastAPI", level: 82, icon: "⚡" }
      ]
    },
    {
      title: "Databases",
      color: "neural-cyan",
      skills: [
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL", level: 90, icon: "🗄️" }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "neural-green",
      skills: [
        { name: "Git", level: 92, icon: "📝" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "Postman", level: 88, icon: "📮" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "PyCharm", level: 85, icon: "🐍" }
      ]
    }
  ]

  const getColorClass = (color) => {
    switch (color) {
      case 'neural-cyan': return 'text-neural-cyan border-neural-cyan'
      case 'neural-green': return 'text-neural-green border-neural-green'
      case 'neural-purple': return 'text-neural-purple border-neural-purple'
      default: return 'text-neural-cyan border-neural-cyan'
    }
  }

  const getGradientClass = (color) => {
    switch (color) {
      case 'neural-cyan': return 'from-neural-cyan to-neural-blue'
      case 'neural-green': return 'from-neural-green to-neural-cyan'
      case 'neural-purple': return 'from-neural-purple to-neural-cyan'
      default: return 'from-neural-cyan to-neural-blue'
    }
  }

  return (
    <section id="skills" className="section-padding bg-neural-dark">
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neural-gradient mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="neural-card rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-opacity-60 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${getColorClass(category.color)}`}>
                    {category.title}
                  </h3>
                  <div className={`w-10 sm:w-12 h-1 bg-gradient-to-r ${getGradientClass(category.color)} rounded-full`}></div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <span className="text-sm sm:text-lg flex-shrink-0">{skill.icon}</span>
                          <span className="text-sm sm:text-base text-white font-medium truncate">{skill.name}</span>
                        </div>
                        <span className={`text-xs sm:text-sm font-semibold ${getColorClass(category.color)} ml-2 flex-shrink-0`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-neural-navy rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getGradientClass(category.color)} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Hostinger", icon: "🌐" },
                { name: "Jupyter", icon: "📊" },
                { name: "SMTP", icon: "📧" },
                { name: "Nodemailer", icon: "✉️" },
                { name: "GSAP", icon: "🎬" },
                { name: "Vite", icon: "⚡" }
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="neural-card rounded-lg p-4 text-center hover:border-neural-cyan/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  variants={itemVariants}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <div className="text-sm text-gray-300 font-medium">{tool.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="neural-card rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies 
                to stay at the forefront of web development. My commitment to learning ensures that I can always bring 
                the most effective and modern solutions to every project.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills