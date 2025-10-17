"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function FinalCTASection() {
  const handleStartNow = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#FF7BAC] via-[#8A5FFF] to-[#4FD1E0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-white">Comece agora</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
          Suas fotos merecem virar arte. Comece agora e transforme suas lembranças em algo único.
        </h2>

        <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Junte-se a centenas de clientes satisfeitos que já transformaram suas fotos em obras de arte personalizadas.
        </p>

        <Button
          onClick={handleStartNow}
          size="lg"
          className="bg-white text-[#8A5FFF] hover:bg-white/90 transition-all duration-300 hover:scale-105 font-bold text-lg px-8 py-6 h-auto shadow-2xl"
        >
          Começar Agora – A partir de R$8,90
        </Button>

        <p className="text-sm text-white/80 mt-4">✨ Entrega rápida • Qualidade garantida • Suporte dedicado</p>
      </div>
    </section>
  )
}
