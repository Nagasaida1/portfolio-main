import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neural-navy/50 z-50">
        <motion.div
          className="h-full bg-neural-gradient"
          style={{ scaleX: scrollProgress }}
          initial={{ scaleX: 0 }}
          transformOrigin="left"
        />
      </div>

      {/* Circular Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="relative w-12 h-12">
          {/* Background Circle */}
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-neural-navy"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Progress Circle */}
          <svg className="absolute inset-0 w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <motion.path
              className="text-neural-cyan"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{
                strokeDasharray: `${scrollProgress * 100}, 100`,
              }}
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: `${scrollProgress * 100}, 100` }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-neural-cyan">
              {Math.round(scrollProgress * 100)}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScrollProgress