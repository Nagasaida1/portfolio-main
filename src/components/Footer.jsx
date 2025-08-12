import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Nagasaida1",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nagasaidavelpula/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:nagasaidavelpula1704@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neural-navy border-t border-neural-cyan/20">
      {/* Main Footer Content */}
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neural-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg sm:text-xl">NS</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white truncate">Velpula Naga Saida</h3>
                  <p className="text-neural-cyan text-xs sm:text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Passionate full stack developer from Hyderabad, India. Building scalable web applications 
                with modern technologies and delivering exceptional user experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-neural-cyan flex-shrink-0" />
                  <span>Narasaraopeta, India</span>
                </div>
                <div className="flex items-center space-x-2 min-w-0">
                  <Phone size={14} className="text-neural-green flex-shrink-0" />
                  <a href="tel:+917981625190" className="hover:text-neural-green transition-colors duration-300 truncate">
                    +91 7981625190
                  </a>
                </div>
                <div className="flex items-center space-x-2 min-w-0">
                  <Mail size={14} className="text-neural-cyan flex-shrink-0" />
                  <a href="mailto:nagasaidavelpula1704@gmail.com" className="hover:text-neural-cyan transition-colors duration-300 truncate">
                    nagasaidavelpula1704@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-neural-cyan transition-colors duration-300 text-xs sm:text-sm btn-touch text-left w-full"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social & Newsletter */}
          <div className="sm:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 neural-card rounded-lg text-gray-400 hover:text-neural-cyan hover:border-neural-cyan/40 transition-all duration-300 btn-touch"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
              
              {/* Status */}
              <div className="neural-card rounded-lg p-3 sm:p-4 border-neural-green/30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-neural-green rounded-full animate-pulse"></div>
                  <span className="text-neural-green font-medium text-xs sm:text-sm">Available for Work</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Open to new opportunities and exciting projects
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neural-cyan/20 bg-neural-dark">
        <div className="container-custom py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
            >
              <span>© {currentYear} Velpula Naga Saida. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={scrollToTop}
                className="p-2 neural-card rounded-lg text-gray-400 hover:text-neural-cyan hover:border-neural-cyan/40 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border border-neural-cyan rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-neural-green rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-neural-purple rounded-full"></div>
      </div>
    </footer>
  )
}

export default Footer