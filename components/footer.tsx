import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 bg-foreground text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 px-2 flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Spectrum Logo" 
                  className="h-full w-auto object-contain grayscale invert"
                />
              </div>
              <span className="font-medium">Spectrum</span>
            </Link>
            <span className="text-sm text-background/40">Interior Design Studio</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {[
              { name: "Gallery", href: "/gallery" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-sm text-background/40">
              {new Date().getFullYear()} Spectrum. All rights reserved.
            </p>
            <span className="hidden sm:block text-background/20">•</span>
            <p className="text-sm text-background/40">
              Made by{" "}
              <a 
                href="https://devitty.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors font-medium"
              >
                Devitty
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
