"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Ready to work together? Let&apos;s discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m always interested in hearing about new opportunities and exciting projects. Whether you&apos;re a company
                looking to hire, or you&apos;re a fellow developer wanting to collaborate, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <span className="text-muted-foreground">alex.chen@example.com</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-600 dark:text-green-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <h4 className="font-semibold">Response Time</h4>
              </div>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent inquiries, feel free to call directly.
              </p>
            </div>
          </div>

          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <CardTitle className="text-foreground">Send a Message</CardTitle>
              </div>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
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
                    className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
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
                    className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
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
                    className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
