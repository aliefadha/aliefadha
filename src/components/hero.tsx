"use client"

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const el = document.getElementById("projects")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const root: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.18,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const actionsGroup: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.1,
      },
    },
  }

  const buttonIn: Variants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  }

  const socialsGroup: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.15,
      },
    },
  }


  const bubble: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: [0, 1.25, 1],
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
        times: [0, 0.7, 1],
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20" />

      {/* Interactive mouse follower */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse delay-700" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-rose-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse delay-300" />

      <motion.div
        className="max-w-4xl mx-auto text-center animate-fade-in relative z-10"
        variants={root}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Intro group (orchestrated by root.staggerChildren) */}
        <motion.div className="mb-8" variants={fadeUp}>
          <div className="mb-4">
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-400/10 backdrop-blur-sm border border-green-500/20 dark:border-green-400/10 text-sm font-medium text-green-600 dark:text-green-400 mb-6"
            >
              👋 Welcome to my portfolio
            </motion.span>
          </div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-6 text-foreground"
          >
            Alief Adha
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >
            Fullstack Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed"
          >
            Craft exceptional digital experiences with modern technologies, prioritizing performance, accessibility, and user-centered design. Dedicated to building scalable solutions that truly make a difference.
          </motion.p>
        </motion.div>

        {/* Actions (own stagger) */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={actionsGroup}
        >
          <motion.div variants={buttonIn}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-base font-medium border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div variants={buttonIn}>
            <Button
              variant="outline"
              size="lg"
              className="relative px-8 py-3 text-base font-medium bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl group overflow-hidden"
              asChild
            >
              <a href="#contact">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
                <span className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-md group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300"></span>
                <span className="relative z-10 text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  Get In Touch
                </span>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={buttonIn}>
            <a href="/files/Alief_Resume.pdf" download>
              <Button
                variant="ghost"
                size="lg"
                className="relative px-6 py-3 text-base font-medium bg-transparent hover:bg-gradient-to-r hover:from-purple-500/10 hover:via-blue-500/10 hover:to-indigo-500/10 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-lg group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
                <Download className="h-4 w-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Resume</span>
              </Button>
            </a>
          </motion.div>

        </motion.div>

        {/* Socials (pop, last) */}
        <motion.div
          className="flex items-center justify-center space-x-6 mb-16"
          variants={socialsGroup}
        >
          <motion.a
            variants={bubble}
            href="https://github.com/aliefadha"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-full p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            <Github className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="sr-only">GitHub</span>
          </motion.a>

          <motion.a
            variants={bubble}
            href="https://linkedin.com/in/alief-adha"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-full p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            <Linkedin className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>

          <motion.a
            variants={bubble}
            href="mailto:aliefadha1@gmail.com"
            className="relative group rounded-full p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            <Mail className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="sr-only">Email</span>
          </motion.a>
        </motion.div>

        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToProjects}
            className="group rounded-full p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg:black/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce hover:animate-none"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
