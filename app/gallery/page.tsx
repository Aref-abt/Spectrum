"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Hospitality"]

// All gallery images that exist
const allImages = [
  "IMG_20240806_131210_004.jpg.jpeg",
  "IMG_20250502_142437_676.jpg.jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.43 AM (1).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.43 AM (3).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.43 AM (4).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.43 AM (5).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.43 AM.jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.44 AM (1).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.44 AM (2).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.44 AM.jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.45 AM (1).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.45 AM (2).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.45 AM (3).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.45 AM.jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.46 AM (1).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.46 AM (3).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.46 AM (4).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.46 AM (5).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.46 AM (6).jpeg",
  "WhatsApp Image 2026-01-28 at 10.13.46 AM.jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM (1).jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM (2).jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM (3).jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM (4).jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM (5).jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM (6).jpeg",
  "WhatsApp Image 2026-01-28 at 10.15.51 AM.jpeg",
  "WhatsApp Image 2026-01-28 at 10.16.40 AM (1).jpeg",
  "WhatsApp Image 2026-01-28 at 10.16.40 AM (2).jpeg",
  "WhatsApp Image 2026-01-28 at 10.16.40 AM.jpeg"
]

// Gallery items with automatic category distribution
const galleryItems = allImages.map((image, index) => {
  const categories = ["Residential", "Commercial", "Hospitality"]
  const category = categories[index % 3]
  const year = index < 11 ? "2026" : index < 22 ? "2025" : "2024"
  
  return {
    id: index + 1,
    title: `Project ${index + 1}`,
    category: category,
    year: year,
    image: `/images/gallery/${image}`
  }
})

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

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
      <section className="px-6 lg:px-8 pb-8 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 p-2 bg-card/80 backdrop-blur-xl rounded-full w-fit">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-foreground text-background" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
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
                <div className={`relative ${
                  item.id % 3 === 0 ? "aspect-[3/4]" : item.id % 2 === 0 ? "aspect-square" : "aspect-[4/3]"
                } bg-muted`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${
                  hoveredId === item.id ? "bg-foreground/60" : ""
                }`} />

                {/* Hover content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
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
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-0" : "opacity-100"
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
            className="max-w-5xl w-full mx-6 aspect-video rounded-3xl overflow-hidden bg-background/5"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredItems[selectedIndex].image} 
              alt={filteredItems[selectedIndex].title}
              className="w-full h-full object-contain"
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
