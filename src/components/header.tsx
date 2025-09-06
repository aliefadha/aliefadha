"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion, Variants } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }, [])

  // Fade-down variants (reusable)
  const fadeDown: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
    exit: { opacity: 0, y: prefersReduced ? 0 : -12, transition: { duration: 0.2 } },
  }

  // Desktop nav group + item (staggered fade-down)
  const navGroup = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
  }

  // Mobile menu panel (fade-down) + its items (stagger)
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : -12, scale: prefersReduced ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.22, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
    },
    exit: { opacity: 0, y: prefersReduced ? 0 : -12, scale: prefersReduced ? 1 : 0.98, transition: { duration: 0.18 } },
  }
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, transition: { duration: 0.12 } },
  }

  return (
    <div className="flex items-center justify-center">
      {/* Left badge (fade-down) */}
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-3 left-3 sm:top-4 sm:left-6 z-50 rounded-full transition-all duration-300 ${isScrolled ? "glass-header" : "bg-transparent"
          }`}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="Open menu (mobile) or scroll to About (desktop)"
          className="flex items-center 
             h-10 sm:h-11 lg:h-12
             px-3 sm:px-3.5 lg:px-4
             rounded-full border border-white/20 
             backdrop-blur-xl bg-white/10
             font-semibold 
             text-sm sm:text-xs lg:text-sm 
             tracking-tight text-foreground
             hover:bg-white/20 hover:scale-105 active:scale-95 
             transition-all duration-200 cursor-pointer select-none"
        >
          Alief Adha
        </div>
      </motion.div>

      {/* Center header/nav (fade-down wrap) */}
      <motion.header
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-3 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full transition-all duration-300 w-[calc(100%-1.5rem)] sm:w-auto max-w-md sm:max-w-none ${isScrolled ? "glass-header" : "bg-transparent"
          }`}
      >
        <div className="px-3 sm:px-4 lg:px-5 rounded-full glass-card border border-white/20">
          <div className="flex items-center justify-between h-10 sm:h-11 lg:h-12">
            {/* Desktop Navigation (staggered fade-down) */}
            <motion.nav
              className="hidden md:flex items-center space-x-3 sm:space-x-4 lg:space-x-5"
              variants={navGroup}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 
                     px-2 py-1 rounded-full 
                     text-sm sm:text-xs lg:text-sm 
                     hover:bg-white/10"
              >
                About
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 
                     px-2 py-1 rounded-full 
                     text-sm sm:text-xs lg:text-sm 
                     hover:bg-white/10"
              >
                Skills
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 
                     px-2 py-1 rounded-full 
                     text-sm sm:text-xs lg:text-sm 
                     hover:bg-white/10"
              >
                Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 
                     px-2 py-1 rounded-full 
                     text-sm sm:text-xs lg:text-sm 
                     hover:bg-white/10"
              >
                Contact
              </motion.button>
            </motion.nav>

            {/* Mobile brand + button */}
            <div className="flex items-center justify-between w-full md:w-auto ml-auto md:ml-0">
              <div className="md:hidden font-semibold text-sm tracking-tight text-foreground">
                Alief Adha
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden w-8 h-8 rounded-full hover:scale-110 transition-all duration-300 ml-2"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Scrim overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.button
                key="overlay"
                aria-hidden
                onClick={() => setIsMobileMenuOpen(false)}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                className="md:hidden fixed inset-0 top-[64px] sm:top-[72px] bg-white"
              />
            )}
          </AnimatePresence>

          {/* Mobile dropdown (panel fade-down + items fade-down) */}
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border shadow-lg bg-white"
              >
                <motion.nav className="flex flex-col">
                  <motion.button
                    variants={fadeDown}
                    onClick={() => scrollToSection("about")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
                  >
                    About
                  </motion.button>
                  <motion.button
                    variants={fadeDown}
                    onClick={() => scrollToSection("skills")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
                  >
                    Skills
                  </motion.button>
                  <motion.button
                    variants={fadeDown}
                    onClick={() => scrollToSection("projects")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
                  >
                    Projects
                  </motion.button>
                  <motion.button
                    variants={fadeDown}
                    onClick={() => scrollToSection("contact")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
                  >
                    Contact
                  </motion.button>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  )
}
