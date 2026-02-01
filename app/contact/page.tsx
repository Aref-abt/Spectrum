"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState("success")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@manalsroujy.com", href: "mailto:contact@manalsroujy.com" },
    { icon: Phone, label: "Phone", value: "+961 3 799 827", href: "tel:+9613799827" },
    { icon: MapPin, label: "Location", value: "Zahle, Lebanon", href: null },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-6">
            Let{"'"}s Connect
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Ready to transform your space? We{"'"}d love to hear about your project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-medium mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-4 mb-12">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div key={item.label} className="group flex items-center gap-4 p-5 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
                <div className="flex flex-wrap gap-2">
                  {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-3xl bg-card">
                {formState === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. We{"'"}ll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormState("idle")
                        setFormData({ name: "", email: "", phone: "", project: "", message: "" })
                      }}
                      className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-medium mb-8">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-foreground/20 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-foreground/20 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-foreground/20 transition-all"
                            placeholder="+961 XX XXX XXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="project" className="block text-sm font-medium mb-2">
                            Project Type
                          </label>
                          <select
                            id="project"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground focus:ring-2 focus:ring-foreground/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select a service</option>
                            <option value="interior">Interior Design</option>
                            <option value="3d">3D Modeling</option>
                            <option value="architecture">Architecture</option>
                            <option value="supervision">Project Supervision</option>
                            <option value="furniture">Furniture Selection</option>
                            <option value="space">Space Planning</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                      >
                        {formState === "submitting" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
