import React, { Suspense, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NeuralBackground from './components/NeuralBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-neural-dark overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-neural-dark" />}>
          <NeuralBackground />
        </Suspense>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-neural-dark"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 border-4 border-neural-cyan border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.h2
                className="text-xl font-semibold text-neural-cyan"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Initializing Neural Network...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App