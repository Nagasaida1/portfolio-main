import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

// 📧 EmailJS Contact Form Integration
// This component sends form submissions directly to nagasaidavelpula1704@gmail.com
// Setup required: See EMAIL_SETUP_GUIDE.md for complete instructions
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Globe, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    type: '', // 'success', 'error', ''
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nagasaidavelpula1704@gmail.com",
      link: "mailto:nagasaidavelpula1704@gmail.com",
      color: "neural-cyan"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7981625190",
      link: "tel:+917981625190",
      color: "neural-green"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Narasaraopet, India",
      link: "https://maps.app.goo.gl/VeuE13oJwr2pfAsFA",
      color: "neural-purple"
    },

  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Nagasaida1",
      color: "hover:text-neural-cyan"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nagasaidavelpula/",
      color: "hover:text-neural-green"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/917981625190",
      color: "hover:text-neural-green"
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    // EmailJS Configuration - Using environment variables for security
    const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6bp7s1c'
    const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_g8odsnz'
    const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'gw7mpK3ak9C-mxYZk'

    // Email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Velpula Naga Saida',
      to_email: 'nagasaidavelpula1704@gmail.com',
      reply_to: formData.email,
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAIL_PUBLIC_KEY)
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams
      )

      console.log('Email sent successfully:', result.text)
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at nagasaidavelpula1704@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getColorClass = (color) => {
    switch (color) {
      case 'neural-cyan': return 'text-neural-cyan bg-neural-cyan/10 border-neural-cyan/30'
      case 'neural-green': return 'text-neural-green bg-neural-green/10 border-neural-green/30'
      case 'neural-purple': return 'text-neural-purple bg-neural-purple/10 border-neural-purple/30'
      default: return 'text-neural-cyan bg-neural-cyan/10 border-neural-cyan/30'
    }
  }

  return (
    <section id="contact" className="section-padding bg-neural-dark">
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-neural-gradient mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  I'm always excited to work on new projects and collaborate with fellow developers, 
                  designers, and entrepreneurs. Whether you have a project in mind, need technical consultation, 
                  or just want to say hello, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 neural-card rounded-lg sm:rounded-xl hover:border-opacity-60 transition-all duration-300 group"
                    whileHover={{ scale: 1.01, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${getColorClass(info.color)}`}>
                      <info.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base text-white font-semibold group-hover:text-neural-cyan transition-colors duration-300 truncate">
                        {info.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 truncate">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-3 neural-card rounded-lg text-gray-400 ${social.color} transition-all duration-300 btn-touch`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} className="sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="neural-card rounded-lg sm:rounded-xl p-4 sm:p-6 border-neural-green/30"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-neural-green rounded-full animate-pulse"></div>
                  <h4 className="text-base sm:text-lg font-semibold text-neural-green">Available for Work</h4>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Currently open to new opportunities and exciting projects. 
                  Let's build something great together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-first lg:order-none">
              <div className="neural-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-neural-navy border border-neural-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-neural-cyan focus:outline-none focus:ring-2 focus:ring-neural-cyan/20 transition-all duration-300"
                        placeholder="Naga Saida"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-neural-navy border border-neural-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-neural-cyan focus:outline-none focus:ring-2 focus:ring-neural-cyan/20 transition-all duration-300"
                        placeholder="nagasaida@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neural-navy border border-neural-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-neural-cyan focus:outline-none focus:ring-2 focus:ring-neural-cyan/20 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-neural-navy border border-neural-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-neural-cyan focus:outline-none focus:ring-2 focus:ring-neural-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Form Status */}
                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center space-x-2 ${
                        formStatus.type === 'success' 
                          ? 'bg-neural-green/20 text-neural-green border border-neural-green/30' 
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neural-button py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="neural-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's turn your ideas into reality. I'm here to help you build amazing web applications 
                that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:nagasaidavelpula1704@gmail.com"
                  className="neural-button px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/917981625190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-neural-green text-neural-green rounded-lg hover:bg-neural-green hover:text-neural-dark transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact