"use client"

import { Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

const exampleArtImages = [
  "/cute-colorful-unicorn-with-rainbow-mane-and-stars-.jpg",
  "/colorful-teddy-bear-with-golden-crown-hearts-stars.jpg",
  "/simple-robot-character-outline.jpg",
  "/black-and-white-outline-coloring-book-style-cute-r.jpg",
]

export function PresentationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 blur-2xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-pink-50 rounded-full">
          <Sparkles className="w-5 h-5 text-pink-500" />
          <span className="text-sm font-medium text-pink-700">Arte personalizada</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Transforme suas fotos em arte com um toque <span className="text-gradient">Boobie</span>
        </h1>

        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p>Envie suas imagens favoritas e receba versões ilustradas, pintadas e cheias de estilo.</p>
          <p>
            Cada pack é feito com carinho por artistas digitais, prontos para transformar suas lembranças em verdadeiras
            obras de arte.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {exampleArtImages.map((image, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Arte exemplo ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
