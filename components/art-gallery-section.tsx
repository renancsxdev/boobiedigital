"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const artExamples = [
  {
    id: 1,
    title: "Transformação 1",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex1-MWjlmSxPiR1k91uhLPqCDOIgNSiFWK.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex2-yC1ItGiS76SjnRwRh7O0UNaqi5YhhB.png",
  },
  {
    id: 2,
    title: "Transformação 2",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex3-6yaNkjPcmawKL0xlN3ScURh7YSOwiK.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex4-O3o125w5Mv0mzEw0RCqyiQ1IQZ49f3.png",
  },
  {
    id: 3,
    title: "Transformação 3",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex5-PvxrQw8ZUSKX4jXlcaiknn6QVsJilx.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex6-mrw3xyGuoDhjQXIUUcXQzoqobjb4Pn.png",
  },
  {
    id: 4,
    title: "Transformação 4",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEtNNVXbHazrQwEzRjueARq6zLwKn9.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z6pgRavXcIgmibjDz8dPm0rP5rKkFQ.png",
  },
]

export function ArtGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artExamples.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artExamples.length) % artExamples.length)
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">Veja a Transformação</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Exemplos reais de fotos transformadas em arte personalizada
        </p>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="group relative">
              <div className="absolute -top-4 left-4 bg-white px-4 py-2 rounded-full shadow-md z-10">
                <span className="text-sm font-semibold text-gray-700">Antes</span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={artExamples[currentIndex].before || "/placeholder.svg"}
                  alt="Foto original"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* After */}
            <div className="group relative">
              <div className="absolute -top-4 left-4 bg-gradient-to-r from-[#ff9ec4] to-[#b794f6] px-4 py-2 rounded-full shadow-md z-10">
                <span className="text-sm font-semibold text-white">Depois</span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
                <img
                  src={artExamples[currentIndex].after || "/placeholder.svg"}
                  alt="Arte transformada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-xl font-bold text-gray-800">{artExamples[currentIndex].title}</h3>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-[#b794f6] hover:bg-[#b794f6] hover:text-white bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {artExamples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#b794f6] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-[#b794f6] hover:bg-[#b794f6] hover:text-white bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
