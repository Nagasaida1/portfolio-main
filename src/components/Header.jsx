import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nagasaida1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nagasaidavelpula/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nagasaidavelpula1704@gmail.com', label: 'Email' },
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-neural-dark/90 backdrop-blur-md border-b border-neural-cyan/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Professional Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('#home')}
          >
            {/* Professional Logo Icon */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-neural-cyan via-neural-electric to-neural-green p-0.5 shadow-lg">
              <div className="w-full h-full rounded-xl bg-neural-dark/90 flex items-center justify-center relative overflow-hidden">
                <span className="text-white font-extrabold text-lg tracking-tight relative z-10">NS</span>
                {/* Neural pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neural-cyan/10 to-neural-green/10"></div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neural-cyan/20 to-transparent opacity-50"></div>
              </div>
            </div>
            
            {/* Professional Text */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white tracking-tight">
                <span className="text-neural-cyan">Naga</span> 
                <span className="text-white ml-1">Saida</span>
              </h1>
              <p className="text-xs text-gray-400 font-medium tracking-wide">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-neural-cyan transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links & Resume Button */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neural-cyan transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
            
            <motion.button
              className="neural-button px-4 py-2 rounded-lg flex items-center space-x-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1yxuJFetqm-GOTMVgq05yBXkus4aGnGLL/view?usp=sharing', '_blank')}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-neural-dark/95 backdrop-blur-md border-b border-neural-cyan/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-gray-300 hover:text-neural-cyan transition-colors duration-300 font-medium py-2"
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neural-cyan/20">
                    <div className="flex items-center space-x-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-neural-cyan transition-colors duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          <social.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                    
                    <motion.button
                      className="neural-button px-4 py-2 rounded-lg flex items-center space-x-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('https://drive.google.com/file/d/1yxuJFetqm-GOTMVgq05yBXkus4aGnGLL/view?usp=sharing', '_blank')}
                    >
                      <Download size={16} />
                      <span>Resume</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header