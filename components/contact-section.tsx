"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@manalsroujy.com", href: "mailto:contact@manalsroujy.com" },
    { icon: Phone, label: "Phone", value: "+961 3 799 827", href: "tel:+9613799827" },
    { icon: MapPin, label: "Location", value: "Zahle, Lebanon", href: null },
  ]

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-background/30" />
              <span className="text-sm font-medium text-background/60 tracking-wide">
                Get in Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium tracking-tight mb-8 leading-tight">
              Let{"'"}s create something beautiful together
            </h2>

            <p className="text-lg text-background/70 leading-relaxed mb-10 max-w-lg">
              Ready to transform your space? We{"'"}d love to hear about your project and discuss how we can bring your vision to life.
            </p>

            <Link 
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column */}
          <div className={`flex flex-col justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div 
                    key={index} // Added key property here
                    className={`group flex items-start gap-5 p-6 rounded-2xl bg-background/5 hover:bg-background/10 transition-all duration-300 ${item.href ? "cursor-pointer" : ""}`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-background/70" />
                    </div>
                    <div>
                      <p className="text-sm text-background/50 mb-1">{item.label}</p>
                      <p className="text-xl font-medium">{item.value}</p>
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
            <div className="flex gap-4 mt-10 pt-10 border-t border-background/10">
              {["Instagram", "LinkedIn", "Pinterest"].map((social, index) => ( // Added key property here
                <a 
                  key={index} // Added key property here
                  href="#"
                  className="px-5 py-2.5 rounded-full border border-background/20 text-sm font-medium text-background/70 hover:text-background hover:border-background/40 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
