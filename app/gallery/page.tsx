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
  const [viewMode, setViewMode] = useState<"projects" | "gallery">("projects")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Group items by project
  const projectsMap = galleryItems.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = {
        title: item.title,
        category: item.category,
        year: item.year,
        images: [],
        coverImage: item.image,
      }
    }
    acc[item.title].images.push(item)
    return acc
  }, {} as Record<string, { title: string; category: string; year: string; images: typeof galleryItems; coverImage: string }>)

  const projects = Object.values(projectsMap)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const projectImages = selectedProject ? projectsMap[selectedProject]?.images || [] : []

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? projectImages.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === projectImages.length - 1 ? 0 : selectedIndex + 1)
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
              {viewMode === "projects" ? "Our Portfolio" : "Project Details"}
            </span>
          </div>
          {viewMode === "gallery" && selectedProject && (
            <button 
              onClick={() => setViewMode("projects")}
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </button>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-6">
            {viewMode === "projects" ? "Selected Work" : selectedProject}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {viewMode === "projects" 
              ? "Explore our collection of thoughtfully designed spaces that blend elegance with functionality."
              : projectsMap[selectedProject!]?.category + " project completed in " + projectsMap[selectedProject!]?.year}
          </p>
        </div>
      </section>

      {/* Filter - Only show in projects view */}
      {viewMode === "projects" && (
        <section className="px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Area */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {viewMode === "projects" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {filteredProjects.map((project) => (
                <button
                  key={project.title}
                  onClick={() => {
                    setSelectedProject(project.title)
                    setViewMode("gallery")
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="group relative text-left"
                >
                  {/* Stacked Aesthetic Container */}
                  <div className="relative aspect-[4/5] w-full mb-6">
                    {/* Background layers for stacking effect */}
                    <div className="absolute inset-0 bg-muted rounded-2xl transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:-translate-x-2 group-hover:-translate-y-2 opacity-40 translate-x-2 translate-y-2" />
                    <div className="absolute inset-0 bg-muted rounded-2xl transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:-translate-x-1 group-hover:-translate-y-1 opacity-70 translate-x-1 translate-y-1" />
                    
                    {/* Main cover image */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-muted border border-border/50">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-light">View Project</span>
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                      <span>{project.category}</span>
                      <span className="h-1 w-1 rounded-full bg-foreground/20" />
                      <span>{project.images.length} Photos</span>
                    </div>
                    <h3 className="text-2xl font-serif font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Masonry Grid for Individual Project Gallery */
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
              {projectImages.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative w-full mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer text-left"
                >
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
                  <div className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${hoveredId === item.id ? "bg-foreground/60" : ""
                    }`} />
                  <div className={`absolute inset-0 p-6 flex items-center justify-center transition-opacity duration-300 ${hoveredId === item.id ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && selectedProject && (
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
              src={projectImages[selectedIndex].image}
              alt={projectImages[selectedIndex].title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/10 rounded-full text-center">
            <p className="text-sm font-medium text-background mb-1">{selectedProject}</p>
            <span className="text-xs text-background/70">
              {selectedIndex + 1} / {projectImages.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
