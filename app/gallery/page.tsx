"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Hospitality", "3D", "Outdoor", "Architecture"]

const galleryData = [
  // Noble UAE
  { image: "1n.jpg", title: "Noble UAE", category: "3D" },
  { image: "2n.jpg", title: "Noble UAE", category: "3D" },
  { image: "final Noble Gourmet_Photo - 2.jpg", title: "Noble UAE", category: "3D" },
  { image: "final Noble Gourmet_1 - Photo.jpg", title: "Noble UAE", category: "3D" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.44 AM (2).jpeg", title: "3D Design", category: "3D" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.45 AM (3).jpeg", title: "3D Design", category: "3D" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (5).jpeg", title: "3D Design", category: "3D" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM.jpeg", title: "3D Design", category: "3D" },

  // Office
  { image: "anthonydaoudphotography.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-2.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-10.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-11.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-18.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-21.jpg", title: "Office", category: "Commercial" },

  // Funky shop
  { image: "anthonydaoudphotography-32.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-34.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-36.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-37.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "Screenshot 2026-03-12 131737.png", title: "Funky Shop", category: "Commercial" },

  // Clinic by aimee
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (5).jpeg", title: "Clinic By Aimee", category: "Commercial" },
  { image: "anthonydaoudphotography-116.jpg", title: "Clinic By Aimee", category: "Commercial" },

  // cone-fetti
  { image: "anthonydaoudphotography-145.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-157.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "WhatsApp Image 2026-01-28 at 10.16.40 AM.jpeg", title: "Cone-Fetti", category: "Commercial" },

  // beauty salon elie gabriel
  { image: "anthonydaoudphotography-164.jpg", title: "Beauty Salon Elie Gabriel", category: "Commercial" },
  { image: "anthonydaoudphotography-166.jpg", title: "Beauty Salon Elie Gabriel", category: "Commercial" },
  { image: "anthonydaoudphotography-177.jpg", title: "Beauty Salon Elie Gabriel", category: "Commercial" },

  // Modern House
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (1).jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.45 AM.jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.45 AM (2).jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.44 AM.jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.44 AM (1).jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.43 AM (5).jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.43 AM (4).jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.43 AM (3).jpeg", title: "Modern House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.43 AM (1).jpeg", title: "Modern House", category: "Residential" },
  { image: "project-1.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-197.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-205.jpg", title: "Modern House", category: "Residential" },
  { image: "project-1dsfgg.jpg", title: "Modern House", category: "Residential" },
  { image: "project-2.jpg", title: "Modern House", category: "Residential" },
  { image: "project-3.jpg", title: "Modern House", category: "Residential" },
  { image: "project-4.jpg", title: "Modern House", category: "Residential" },

  // Architecture
  { image: "view 1-option 2.jpg", title: "Architecture", category: "Architecture" },
  { image: "view4-option 2.jpg", title: "Architecture", category: "Architecture" },

  // Pent house
  { image: "WhatsApp Image 2021-01-20 at 9.00.58 AM (1).jpeg", title: "Pent House", category: "Residential" },
  { image: "WhatsApp Image 2021-01-20 at 9.00.58 AM.jpeg", title: "Pent House", category: "Residential" },

  // Lobby design
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (3).jpeg", title: "Lobby Design", category: "Hospitality" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (6).jpeg", title: "Lobby Design", category: "Hospitality" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM.jpeg", title: "Lobby Design", category: "Hospitality" },

  // modern black kitchen design
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (1).jpeg", title: "Modern Black Kitchen Design", category: "Residential" },

  // Outdoor
  { image: "IMG_5836.JPG", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "IMG_5844.JPG", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "JC_25436.jpg", title: "Outdoor Seating", category: "Outdoor" },
  { image: "JC_25438.jpg", title: "Outdoor Seating", category: "Outdoor" },
  { image: "JC_25453.jpg", title: "Outdoor Seating", category: "Outdoor" },
  { image: "JC_25460.jpg", title: "Outdoor Seating", category: "Outdoor" },
  { image: "view 3-high res-mod 2.jpg", title: "Outdoor Seating", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.43 AM.jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (2).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (3).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (4).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.16.40 AM (1).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.16.40 AM (2).jpeg", title: "Outdoor Landscape", category: "Outdoor" },

  // Leftovers
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (4).jpeg", title: "Interior Design", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.45 AM (1).jpeg", title: "Interior Design", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (6).jpeg", title: "Interior Design", category: "Commercial" },
  { image: "Noble gourmet f_Photo - 2 (1).jpg", title: "Noble UAE", category: "Commercial" }
]

const galleryItems = galleryData.map((item, index) => {
  const year = index % 3 === 0 ? "2026" : index % 2 === 0 ? "2025" : "2024"
  return {
    id: index + 1,
    title: item.title,
    category: item.category,
    image: `/images/gallery/${item.image}`,
    year: year
  }
})

export default function GalleryPage() {
  const [filterMode, setFilterMode] = useState<"Type" | "Project">("Type")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeProject, setActiveProject] = useState("All")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const distinctProjects = ["All", ...Array.from(new Set(galleryItems.map(item => item.title)))]

  const filteredItems = galleryItems.filter(item => {
    if (filterMode === "Type") {
      return activeCategory === "All" || item.category === activeCategory
    } else {
      return activeProject === "All" || item.title === activeProject
    }
  })

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-6">
            Selected Work
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Explore our collection of thoughtfully designed spaces that blend elegance with functionality.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Mode Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-muted rounded-full p-1 relative">
              <button
                onClick={() => setFilterMode("Type")}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${filterMode === "Type" ? "text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Filter by Type
              </button>
              <button
                onClick={() => setFilterMode("Project")}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${filterMode === "Project" ? "text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Filter by Project
              </button>
              {/* Animated indicator */}
              <div
                className={`absolute inset-y-1 w-[calc(50%-4px)] bg-foreground rounded-full transition-transform duration-300 ease-out`}
                style={{ transform: filterMode === "Type" ? 'translateX(4px)' : 'translateX(calc(100% + 4px))' }}
              />
            </div>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filterMode === "Type" ? (
              categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-background border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                >
                  {category}
                </button>
              ))
            ) : (
              distinctProjects.map((project) => (
                <button
                  key={project}
                  onClick={() => setActiveProject(project)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeProject === project
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-background border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                >
                  {project}
                </button>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Style */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative w-full mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer text-left"
              >
                {/* Dynamic aspect ratio for masonry effect */}
                <div className={`relative ${item.id % 3 === 0 ? "aspect-[3/4]" : item.id % 2 === 0 ? "aspect-square" : "aspect-[4/3]"
                  } bg-muted`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${hoveredId === item.id ? "bg-foreground/60" : ""
                  }`} />

                {/* Hover content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}>
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-background/70 mb-1">{item.year}</p>
                    <h3 className="text-lg font-medium text-background">{item.title}</h3>
                  </div>
                </div>

                {/* Always visible info bar */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent transition-opacity duration-300 ${hoveredId === item.id ? "opacity-0" : "opacity-100"
                  }`}>
                  <h3 className="text-sm font-medium text-background">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-foreground/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-background" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-background" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-background" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl w-full mx-6 aspect-video rounded-3xl overflow-hidden bg-background/5"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[selectedIndex].image}
              alt={filteredItems[selectedIndex].title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/10 rounded-full">
            <span className="text-sm text-background">
              {selectedIndex + 1} / {filteredItems.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
