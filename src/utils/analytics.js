// Performance monitoring and analytics utilities

export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href,
    })
  }
}

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackUserInteraction = (action, element) => {
  trackEvent('user_interaction', {
    action,
    element,
    timestamp: new Date().toISOString(),
  })
}

// Performance metrics
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0]
    const paint = performance.getEntriesByType('paint')
    
    const metrics = {
      // Core Web Vitals
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    }
    
    console.log('Performance Metrics:', metrics)
    return metrics
  }
}

// Intersection Observer for scroll tracking
export const createScrollTracker = (callback) => {
  const sections = document.querySelectorAll('section[id]')
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target.id)
        }
      })
    },
    { threshold: 0.5 }
  )
  
  sections.forEach((section) => observer.observe(section))
  
  return () => observer.disconnect()
}