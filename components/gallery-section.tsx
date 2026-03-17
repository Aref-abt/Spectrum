"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const featuredProjects = [
  {
    title: "Noble UAE",
    category: "Commercial",
    images: ["final Noble Gourmet_1 - Photo.jpg", "1n.jpg", "2n.jpg", "final Noble Gourmet_Photo - 2.jpg"],
    coverImage: "/images/gallery/final Noble Gourmet_1 - Photo.jpg",
    year: "2024"
  },
  {
    title: "Modern House",
    category: "Residential",
    images: ["project-1.jpg", "project-2.jpg", "project-3.jpg", "project-4.jpg"],
    coverImage: "/images/gallery/project-1.jpg",
    year: "2024"
  },
  {
    title: "Funky Shop",
    category: "Commercial",
    images: ["anthonydaoudphotography-32.jpg", "anthonydaoudphotography-34.jpg"],
    coverImage: "/images/gallery/anthonydaoudphotography-32.jpg",
    year: "2023"
  },
  {
    title: "3D Design",
    category: "Architecture",
    images: ["WhatsApp Image 2026-01-28 at 10.15.51 AM.jpeg"],
    coverImage: "/images/gallery/WhatsApp Image 2026-01-28 at 10.15.51 AM.jpeg",
    year: "2024"
  },
]

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
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

        {/* Dynamic Project Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.title}
              href="/gallery"
              className={`group relative text-left transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.title)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Stacked Aesthetic Container */}
              <div className="relative aspect-[4/3] w-full mb-8">
                {/* Background layers */}
                <div className="absolute inset-0 bg-muted/50 rounded-3xl transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:-translate-x-2 group-hover:-translate-y-2 opacity-30 translate-x-2 translate-y-2" />
                <div className="absolute inset-0 bg-muted/80 rounded-3xl transition-transform duration-500 group-hover:rotate-[-1.5deg] group-hover:-translate-x-1 group-hover:-translate-y-1 opacity-60 translate-x-1 translate-y-1" />
                
                {/* Main image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl bg-muted border border-border/50">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-light">View Project Gallery</span>
                      <ArrowUpRight className="w-5 h-5 translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
                  <span>{project.category}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/20" />
                  <span>{project.images.length} Photos</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-medium group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
