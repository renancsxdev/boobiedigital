"use client"

import { useEffect, useRef, useState } from "react"
import { Upload, Palette, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1",
    icon: Upload,
    title: "Envie suas fotos",
    description:
      "Clique no botão acima e envie suas imagens favoritas. Podem ser fotos pessoais, de viagens, pets ou qualquer momento especial.",
  },
  {
    number: "2",
    icon: Palette,
    title: "Nós transformamos tudo em arte",
    description:
      "Nossa equipe de artistas digitais trabalha com carinho para transformar suas fotos em ilustrações únicas no estilo boobie goods.",
  },
  {
    number: "3",
    icon: Download,
    title: "Você recebe o resultado",
    description: "Receba suas artes digitalmente por e-mail ou drive, prontas para usar, compartilhar ou imprimir.",
  },
]

export function HowItWorksSection() {
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

  const handleViewExamples = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">Como Funciona</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Transformar suas fotos em arte é simples e rápido
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#ff9ec4] to-[#b794f6] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f5e6d3] rounded-full flex items-center justify-center font-bold text-[#b794f6] shadow-md">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleViewExamples}
            variant="outline"
            size="lg"
            className="border-2 border-[#b794f6] text-[#b794f6] hover:bg-[#b794f6] hover:text-white transition-all duration-300 bg-transparent"
          >
            Ver exemplos
          </Button>
        </div>
      </div>
    </section>
  )
}
