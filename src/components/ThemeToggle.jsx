import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true) // Default to dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-40 p-3 neural-card rounded-full hover:border-neural-cyan/40 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={20} className="text-neural-cyan" />
        ) : (
          <Moon size={20} className="text-neural-cyan" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle