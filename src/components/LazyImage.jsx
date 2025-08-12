import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/api/placeholder/400/300',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Placeholder */}
      <motion.div
        className="absolute inset-0 bg-neural-blue/20 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 border-2 border-neural-cyan border-t-transparent rounded-full animate-spin" />
      </motion.div>

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </div>
  )
}

export default LazyImage