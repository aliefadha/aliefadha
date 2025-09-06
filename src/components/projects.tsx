"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ExternalLink, Github, Mail, MapPin } from "lucide-react"
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"

export function Projects() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const projects = [
    {
      title: "Gameblink - Booking System",
      description:
        "A modern booking system built with React, featuring real-time booking monitoring, secure payments, and an intuitive admin dashboard.",
      image: "/images/gameblinkk.webp",
      tech: ["React", "Shadcn/ui", "TypeScript", "Midtrans Payment Gateway"],
      github: "http://github.com/aliefadha/gameblink",
      live: "http://booking.gameblink.id",
      status: "Live",
    },
    {
      title: "Sumbarito",
      description:
        "A modern news platform built with Elementor, offering real-time article publishing, category and tag management, multimedia support, and an intuitive editorial dashboard for journalists and readers.",
      image: "/images/sumbarito.webp",
      tech: ["Wordpress", "Elementor"],
      live: "https://sumbarito.com",
      status: "Live",
    },
    {
      title: "Book Review",
      description:
        "An intelligent book review platform built with React, featuring AI-powered review generation and smart tagging. Helps readers discover books more efficiently and enhances user reviews with natural language insights",
      image: "/images/book-review.webp",
      tech: ["React", "Nest.js", "MySQL", "Mastra.ai"],
      github: "https://github.com/aliefadha/book-review",
      status: "In Development",
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-balance">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === "Live"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                      : "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
                      }`}
                  >
                    {project.status === "Live" ? "🟢 Live" : "🟡 In Development"}
                  </span>
                </div>
                <div className="relative w-full h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300 hover:scale-105 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.live && (
                    <Button
                      size="sm"
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="contact" className="pt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Ready to work together? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities and exciting projects. Whether you're a
                  company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from
                  you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 glass px-4 py-3 rounded-lg border-0">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>aliefadha1@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 glass px-4 py-3 rounded-lg border-0">
                  <FaLinkedin className="h-5 w-5 text-secondary" />
                  <span>Alief Adha</span>
                </div>
                <div className="flex items-center space-x-3 glass px-4 py-3 rounded-lg border-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Send a Message
                </CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-0 bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-0 bg-background/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="glass border-0 bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full glass bg-secondary/80 hover:bg-secondary/90 border-0 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
