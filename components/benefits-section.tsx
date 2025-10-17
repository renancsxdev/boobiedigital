"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, Zap, ImageIcon, CreditCard, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Preços low-ticket e entrega imediata",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Packs exclusivos e limitados",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: ImageIcon,
    title: "Imagens prontas para uso criativo",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: CreditCard,
    title: "Sem assinatura, compra única",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: MessageCircle,
    title: "Suporte rápido via WhatsApp",
    color: "from-purple-500 to-blue-600",
  },
]

export function BenefitsSection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">
          💡 Por que escolher a BoobieDigital?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-in fade-in slide-in-from-left" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 font-semibold leading-relaxed">{benefit.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
