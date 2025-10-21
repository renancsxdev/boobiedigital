"use client"

import { Sparkles, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

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

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Veja a Transformação ✨</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Before Image */}
            <div className="relative group flex-1 w-full max-w-md">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-6 py-2 bg-gray-800 text-white text-sm font-bold rounded-full shadow-lg">
                  ANTES
                </span>
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-AFGBUVNDG8x4SMyUgkOIfJnOBLL8sj.jpg"
                  alt="Foto original"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Arrow Indicator */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center shadow-lg animate-pulse">
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-white rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* After Image */}
            <div className="relative group flex-1 w-full max-w-md">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                  DEPOIS
                </span>
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-vuZ1pnk8DAwILG5RaadZLN1Wptta61.png"
                  alt="Arte Boobie Digital"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-10 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200">
            <p className="text-lg font-medium text-gray-800">
              🎨 Sua foto se transforma em uma linda ilustração estilo Boobie Goods!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Perfeito para presentes, decoração ou simplesmente guardar suas memórias de forma única
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
