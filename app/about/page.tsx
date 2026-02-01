"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"

const values = [
  {
    title: "Elegance",
    description: "Every design decision is guided by a commitment to refined aesthetics that stand the test of time."
  },
  {
    title: "Functionality",
    description: "Beautiful spaces must also work seamlessly for the people who inhabit them."
  },
  {
    title: "Personalization",
    description: "We create interiors that reflect each client's unique lifestyle, needs, and vision."
  },
  {
    title: "Precision",
    description: "From concept to execution, every element is thoughtfully considered and precisely executed."
  }
]

const process = [
  { step: "01", title: "Discovery", description: "Understanding your vision, lifestyle, and requirements through in-depth consultation." },
  { step: "02", title: "Concept", description: "Developing design concepts, mood boards, and initial space planning." },
  { step: "03", title: "Visualization", description: "Creating detailed 3D renderings to bring your future space to life." },
  { step: "04", title: "Execution", description: "Managing every detail of implementation to perfection." },
]

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-background">
      <Header />
      
      {/* Hero */}
      <section id="hero" className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-700 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-6 max-w-4xl">
              Crafting spaces that tell your story
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              An interior design studio based in Lebanon, focused on creating elegant, functional, and timeless spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className={`relative transition-all duration-700 ${visibleSections.has("philosophy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/50 flex items-center justify-center">
                      <span className="font-serif text-4xl text-muted-foreground">S</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Studio Image</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-muted/50" />
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 delay-200 ${visibleSections.has("philosophy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-8">
                Design is a balance between aesthetics and practicality
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Spectrum is an interior design studio based in Lebanon, focused on creating elegant, functional, and timeless spaces.
                </p>
                <p>
                  We believe good design is a balance between aesthetics and practicality, resulting in interiors that reflect our clients{"'"} lifestyles, needs, and vision.
                </p>
                <p>
                  From concept development and 3D visualization through to execution, we design spaces that feel refined, comfortable, and personal. Our approach combines classic design principles with contemporary sensibilities, creating environments that are both beautiful and livable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-24 px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 transition-all duration-700 ${visibleSections.has("values") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
              What guides our work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`p-8 rounded-3xl bg-card transition-all duration-700 ${visibleSections.has("values") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-xl font-medium pt-1.5">
                    {value.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-14">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 transition-all duration-700 ${visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                How We Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className={`relative p-8 rounded-3xl bg-muted/50 transition-all duration-700 ${visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <span className="text-5xl font-serif font-light text-muted-foreground/30 mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 lg:px-8 bg-foreground text-background">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            We{"'"}d love to hear about your project and discuss how we can bring your vision to life.
          </p>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
