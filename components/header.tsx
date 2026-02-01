"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-card/80 backdrop-blur-xl shadow-sm py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="h-12 px-2 flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Spectrum Logo" 
                className="h-full w-auto object-contain grayscale invert dark:invert-0"
              />
            </div>
            <span className="text-xl font-medium tracking-tight hidden sm:block">
              Spectrum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 group flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-[101] w-[85%] max-w-sm bg-card shadow-2xl transition-transform duration-500 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-12">
            <span className="text-xl font-medium">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300"
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms',
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <span className="text-lg font-medium">{item.name}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Get in touch</p>
            <a 
              href="mailto:contact@manalsroujy.com" 
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              contact@manalsroujy.com
            </a>
            <br />
            <a 
              href="tel:+9613799827" 
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              +961 3 799 827
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
