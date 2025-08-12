import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Lightbulb, Target, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const skills = [
    {
      icon: Code,
      title: "Strategic Thinking",
      description: "Approaching complex problems with analytical mindset and innovative solutions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results"
    },
    {
      icon: Target,
      title: "Goal-Oriented Mindset",
      description: "Focused on achieving measurable outcomes and continuous improvement"
    }
  ]

  const achievements = [
    { number: "200+", label: "Property Listings", description: "Successfully managed in UrgentSales.in" },
    { number: "25%", label: "Bounce Rate", description: "Reduction achieved through optimization" },
    { number: "30%", label: "Speed Improvement", description: "Enhanced performance across projects" },
    { number: "50+", label: "APIs Developed", description: "Robust backend solutions created" }
  ]

  return (
    <section id="about" className="section-padding bg-neural-mesh">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neural-gradient mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Passionate full stack developer from Hyderabad, India, dedicated to creating impactful digital solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="neural-card rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center flex-wrap">
                  <Globe className="mr-2 sm:mr-3 text-neural-cyan flex-shrink-0" size={24} />
                  <span>My Journey</span>
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    I'm a passionate full stack developer from <span className="text-neural-cyan font-semibold">Narasaraopet, India</span>. 
                    With a strong foundation in <span className="text-neural-green font-semibold">Python</span>, 
                    <span className="text-neural-cyan font-semibold"> Django</span>, 
                    <span className="text-neural-green font-semibold"> React.js</span>, 
                    <span className="text-neural-cyan font-semibold"> REST APIs</span>, and database systems like 
                    <span className="text-neural-green font-semibold"> MYSQL,SQL</span> and 
                    <span className="text-neural-cyan font-semibold"> MongoDB,PostgreSQL</span>, I build scalable and efficient web applications.
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    I love working on both frontend and backend technologies to bring impactful projects to life. 
                    My experience at <span className="text-neural-cyan font-semibold">RNR Systems India</span> has allowed me to work on 
                    cutting-edge projects like UrgentSales.in and 3D product showcases, where I've consistently delivered 
                    results that exceed expectations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center flex-wrap">
                <Lightbulb className="mr-2 sm:mr-3 text-neural-green flex-shrink-0" size={24} />
                <span>Core Strengths</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="neural-card rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-neural-cyan/40 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neural-gradient rounded-lg flex items-center justify-center">
                          <skill.icon size={20} className="text-white sm:w-6 sm:h-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{skill.title}</h4>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center flex-wrap">
              <Database className="mr-2 sm:mr-3 text-neural-cyan flex-shrink-0" size={24} />
              <span>Key Achievements</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="neural-card rounded-xl p-4 sm:p-6 text-center hover:border-neural-green/40 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{achievement.number}</div>
                  <div className="text-base sm:text-lg font-semibold text-white mb-1">{achievement.label}</div>
                  <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="neural-card rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">My Philosophy</h3>
              <blockquote className="text-xl text-gray-300 italic leading-relaxed">
                "Technology is not just about writing code; it's about solving real-world problems and creating 
                meaningful experiences. Every line of code I write is driven by the desire to make a positive impact 
                and push the boundaries of what's possible."
              </blockquote>
              <div className="mt-6">
                <div className="w-16 h-1 bg-neural-gradient mx-auto"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About