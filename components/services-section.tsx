"use client"

import { useState } from "react"
import { 
  Palette, 
  Box, 
  Building2, 
  ClipboardCheck, 
  Sofa, 
  LayoutGrid,
  ArrowRight 
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Interior Design",
    description: "Complete interior design solutions from concept development to final styling, creating cohesive and sophisticated living environments.",
  },
  {
    icon: Box, 
    title: "3D Modeling",
    description: "Photorealistic 3D visualizations that bring your space to life before construction begins, ensuring perfect alignment with your vision.",
  },
  {
    icon: Building2,
    title: "Architecture",
    description: "Architectural design services that seamlessly blend form and function, creating structures that inspire and endure.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Supervision",
    description: "End-to-end project management ensuring every detail is executed to perfection, on time and within budget.",
  },
  {
    icon: Sofa,
    title: "Furniture Selection",
    description: "Curated furniture and material selection that elevates your space with pieces that combine beauty and functionality.",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    description: "Strategic spatial layouts that optimize flow, maximize utility, and create harmonious living environments.",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
              What we do best
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            A comprehensive approach to design, crafting every element from initial concept through to final execution with meticulous attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                  hoveredIndex === index 
                    ? "bg-foreground text-background" 
                    : "bg-card hover:bg-muted"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                  hoveredIndex === index ? "bg-background/10" : "bg-muted"
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-500 ${
                    hoveredIndex === index ? "text-background" : "text-foreground"
                  }`} />
                </div>
                
                <h3 className="text-xl font-medium mb-3">
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                  hoveredIndex === index ? "text-background/70" : "text-muted-foreground"
                }`}>
                  {service.description}
                </p>

                <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}>
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
