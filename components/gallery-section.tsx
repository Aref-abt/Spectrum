"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    category: "Residential",
    year: "2024",
    size: "large",
  },
  {
    id: 2,
    title: "Boutique Hotel",
    category: "Hospitality",
    year: "2024",
    size: "small",
  },
  {
    id: 3,
    title: "Executive Office",
    category: "Commercial",
    year: "2023",
    size: "small",
  },
  {
    id: 4,
    title: "Penthouse Suite",
    category: "Residential",
    year: "2023",
    size: "large",
  },
]

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
              Selected Projects
            </h2>
          </div>
          <Link 
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/gallery"
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
                project.size === "large" ? "aspect-[4/3]" : "aspect-square"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="absolute inset-0 bg-accent">
                <img 
                  src={`/images/gallery/project-${project.id}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${
                hoveredId === project.id ? "bg-foreground/60" : ""
              }`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                {/* Top */}
                <div className={`flex items-start justify-between transition-all duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <span className="px-4 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom */}
                <div className={`transition-all duration-500 ${
                  hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-70"
                }`}>
                  <p className="text-xs text-background/70 mb-1">{project.year}</p>
                  <h3 className="text-xl lg:text-2xl font-serif font-medium text-background">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
