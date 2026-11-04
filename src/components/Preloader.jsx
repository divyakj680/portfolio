import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true)

  // Remove preloader after 2000ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleExitComplete = () => {
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center select-none"
        >
          {/* Inner Text Container */}
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
            {/* Background text copy in faint red */}
            <span className="text-red-900/30">
              {personalInfo.brandName}.
            </span>

            {/* Foreground water-fill animated copy in white with black dot */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-0 text-white"
            >
              <span>{personalInfo.brandName}</span>
              <span className="text-black">.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
