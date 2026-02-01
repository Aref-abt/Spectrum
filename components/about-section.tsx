"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
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

  const stats = [
    { number: "10+", label: "Years of Excellence", delay: 0 },
    { number: "150+", label: "Projects Completed", delay: 100 },
    { number: "50+", label: "Happy Clients", delay: 200 },
    { number: "6", label: "Core Services", delay: 300 },
  ]

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column - Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative">
              <img 
                src="/images/gallery/WhatsApp Image 2026-01-28 at 10.13.43 AM (3).jpeg" 
                alt="Spectrum Interior Design Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 p-6 bg-card rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Based in</p>
              <p className="text-xl font-serif font-medium">Zahle, Lebanon</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-8 leading-tight">
              Design is a balance between aesthetics and practicality
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Spectrum is an interior design studio based in Lebanon, focused on creating elegant, functional, and timeless spaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe good design is a balance between aesthetics and practicality, resulting in interiors that reflect our clients{"'"} lifestyles, needs, and vision. From concept development and 3D visualization through to execution, we design spaces that feel refined, comfortable, and personal.
              </p>
            </div>

            <Link 
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 self-start"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className={`text-center lg:text-left transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${stat.delay + 400}ms` }}
            >
              <p className="text-4xl lg:text-5xl font-serif font-medium mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
