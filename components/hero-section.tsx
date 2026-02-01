"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 w-full">
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out w-full"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.1)`,
          }}
        >
          <img 
            src="/images/gallery/project-1.jpg" 
            alt="Spectrum Interior Design" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-background/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            top: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-background/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            bottom: '30%',
            left: '15%',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-0">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-medium leading-[1.05] tracking-tight mb-6 sm:mb-8 text-background break-words">
          <span className="block">Creating</span>
          <span className="block text-background/80">spaces that</span>
          <span className="block italic">inspire</span>
        </h1>

        {/* Subtext */}
        <p className="w-full max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-background/90 leading-relaxed mb-8 sm:mb-12">
          We transform visions into refined interiors that balance elegance with functionality, 
          creating timeless spaces that reflect your unique story.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <Link 
            href="/gallery"
            className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-all duration-300 shadow-2xl w-full sm:w-auto text-sm sm:text-base"
          >
            View Our Work
            <ArrowDown className="w-4 h-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-background text-background rounded-full font-medium hover:bg-background hover:text-foreground transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
          >
            Get in Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-12 sm:mt-16 w-full">
          {[
            { number: "150+", label: "Projects" },
            { number: "10+", label: "Years" },
            { number: "50+", label: "Clients" },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="px-4 sm:px-6 py-3 sm:py-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20 flex-1 min-w-[85px] max-w-[120px] sm:max-w-none sm:flex-none"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-background">{stat.number}</p>
              <p className="text-xs sm:text-sm text-background/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-background/70">Scroll</span>
        <ArrowDown className="w-4 h-4 text-background/70" />
      </div>
    </section>
  )
}
