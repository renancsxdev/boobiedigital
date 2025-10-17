"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingBag, Download, Sparkles } from "lucide-react"

const steps = [
  {
    icon: ShoppingBag,
    number: "1",
    title: "Escolha seu Pack",
    description: "Selecione o modelo que combina com seu projeto.",
  },
  {
    icon: Download,
    number: "2",
    title: "Pague e Receba Instantaneamente",
    description: "Link de download direto após o pagamento.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "Use Onde Quiser",
    description: "Perfeito para posts, artes e criações digitais.",
  },
]

export function HowItWorks() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gradient">Como Funciona</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--boobie-pink)] to-[var(--boobie-purple)] flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl font-bold text-gradient mb-2">{step.number}</div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
