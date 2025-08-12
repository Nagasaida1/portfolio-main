import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Eye, MessageCircle, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Python Developer',
    'Frontend Developer',
    'Django Developer',
    'Web App Creator'
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Reduced motion variants for accessibility
  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neural-dark via-neural-navy to-neural-blue opacity-50" />
      
      {/* Floating Elements - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neural-cyan rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image - Mobile & Tablet Only */}
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8 lg:hidden"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto">
                <motion.img
                  src="/profile.jpg"
                  alt="Velpula Naga Saida - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover border-2 sm:border-3 border-neural-cyan shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                  style={{ 
                    objectPosition: 'center center',
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden'
                  }}
                />
                {/* Professional glow effect */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-neural-cyan/25 to-neural-green/25 blur-sm -z-10"></div>
              </div>
            </motion.div>

            {/*  Main Heading */}
                  <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="block text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-1 sm:mb-2">
                      Hello, I'm
                    </span>
                    <span className="block text-gradient neural-text-glow bg-gradient-to-r from-neural-cyan via-neural-green to-neural-cyan bg-clip-text text-transparent">
                      Velpula Naga Saida
                    </span>
                    </h1>
                  </motion.div>

                  {/* Animated Title */}
            <motion.div variants={itemVariants} className="min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem]">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neural-cyan">
                <span className="inline-block min-w-[1ch]">{displayText}</span>
                <span className="animate-pulse text-neural-green ml-1">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-none lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
                Turning ideas into real-world applications using{' '}
                <span className="text-neural-cyan font-semibold">Python</span>,{' '}
                <span className="text-neural-green font-semibold">Django</span>,{' '}
                <span className="text-neural-cyan font-semibold">React, MERN STACK </span>, and modern technologies.
                <span className="block mt-2">
                  Passionate about building scalable, efficient web applications that make a difference.
                </span>
              </p>
            </motion.div>


            {/*  Professional CTA Buttons  */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:justify-start justify-center items-center"
                  >
                    <motion.button
                    className="w-full sm:w-auto neural-button px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neural-cyan focus:ring-offset-2 focus:ring-offset-neural-dark"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/file/d/1yxuJFetqm-GOTMVgq05yBXkus4aGnGLL/view?usp=sharing', '_blank')}
                    aria-label="Download my resume"
                    >
                    <Download size={14} className="sm:w-4 sm:h-4" />
                    <span>Download Resume</span>
                    </motion.button>

                    <motion.button
                    className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 border-neural-cyan text-neural-cyan hover:bg-neural-cyan hover:text-neural-dark transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neural-cyan focus:ring-offset-2 focus:ring-offset-neural-dark"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('projects')}
                    aria-label="View my projects"
                    >
                    <Eye size={14} className="sm:w-4 sm:h-4" />
                    <span>View Projects</span>
                    </motion.button>

                    <motion.button
                    className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 border-neural-green text-neural-green hover:bg-neural-green hover:text-neural-dark transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neural-green focus:ring-offset-2 focus:ring-offset-neural-dark"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('contact')}
                    aria-label="Contact me"
                    >
                    <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                    <span>Contact Me</span>
                    </motion.button>
                  </motion.div>

                  {/* Professional Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:justify-start justify-center items-center text-gray-400"
            >
              <a
                href="mailto:nagasaidavelpula1704@gmail.com"
                className="flex items-center space-x-2 hover:text-neural-cyan transition-all duration-300 text-xs sm:text-sm p-2 rounded-lg hover:bg-neural-cyan/10 focus:outline-none focus:ring-2 focus:ring-neural-cyan focus:ring-offset-2 focus:ring-offset-neural-dark"
                aria-label="Send me an email"
              >
                <span className="break-all sm:break-normal">nagasaidavelpula1704@gmail.com</span>
              </a>
              <span className="hidden sm:block text-neural-cyan/50">•</span>
              <a
                href="tel:+917981625190"
                className="flex items-center space-x-2 hover:text-neural-cyan transition-all duration-300 text-xs sm:text-sm p-2 rounded-lg hover:bg-neural-cyan/10 focus:outline-none focus:ring-2 focus:ring-neural-cyan focus:ring-offset-2 focus:ring-offset-neural-dark"
                aria-label="Call me"
              >
                <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+91 7981625190</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Profile Image with Animations */}
          <motion.div
            className="order-1 lg:order-2 hidden lg:block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Main Profile Image Container */}
              <div className="relative w-72 h-72 xl:w-80 xl:h-80">
                {/* Floating Image */}
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src="/profile.jpg"
                    alt="Velpula Naga Saida - Full Stack Developer Portfolio"
                    className="w-full h-full rounded-full object-cover border-4 border-neural-cyan shadow-2xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    loading="lazy"
                  />
                  {/* Professional gradient overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neural-cyan/10 via-transparent to-neural-green/10"></div>
                  {/* Professional glow effect */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-neural-cyan/20 to-neural-green/20 blur-lg -z-10"></div>
                </motion.div>

                {/* Rotating Border Rings */}
                <motion.div
                  className="absolute -inset-3 border-2 border-neural-cyan/25 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.div
                  className="absolute -inset-6 border border-neural-green/15 rounded-full"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Professional accent dots */}
                <motion.div
                  className="absolute -inset-8 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-2 h-2 bg-neural-cyan/40 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-140px)`,
                      }}
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-16 lg:mt-20"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center space-y-2 text-neural-cyan hover:text-neural-green transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neural-cyan focus:ring-offset-2 focus:ring-offset-neural-dark rounded-lg p-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to about section"
          >
            <span className="text-xs sm:text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity duration-300">
              Scroll to explore
            </span>
            <ChevronDown size={24} className="sm:w-8 sm:h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero