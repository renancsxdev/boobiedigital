"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageCircle } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    name: "Pack Start",
    price: "R$8,90",
    iconImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_dahqwdahqwdahqwd-AbtJ0zZx7q3GWbyeC3OdXJD8Mx2oOT.png",
    badge: "Comece aqui",
    features: ["10 imagens transformadas em arte digital", "Entrega digital (via e-mail ou drive)", "Prazo: até 48h"],
    buttonText: "Comprar no WhatsApp",
    popular: false,
    whatsappLink: "https://wa.me/5511978478108?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Pack%20Start",
  },
  {
    name: "Pack Plus",
    price: "R$15,50",
    iconImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_y57bhyy57bhyy57b-RpieWKfMWQAcwNnty5yKfUC8blPtkZ.png",
    badge: null,
    features: [
      "20 imagens personalizadas",
      "Efeito artístico à escolha (aquarela, retrô, cartoon)",
      "Entrega em até 72h",
    ],
    buttonText: "Comprar no WhatsApp",
    popular: false,
    whatsappLink: "https://wa.me/5511978478108?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Pack%20Plus",
  },
  {
    name: "Pack Premium",
    price: "R$27,99",
    iconImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ivhuevivhuevivhu-ugPzewkBekfEmXSKDbkJPbX5Cu7mBT.png",
    badge: "Mais Vendido",
    features: [
      "Até 35 imagens",
      "Edição detalhada",
      "Suporte prioritário",
      "Entrega em até 5 dias úteis",
      "Suas crianças vão amar pintar a família",
    ],
    buttonText: "Comprar no WhatsApp",
    popular: true,
    whatsappLink: "https://wa.me/5511978478108?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Pack%20Premium",
  },
]

export function PricingSection() {
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

  const handleWhatsAppPurchase = (whatsappLink: string) => {
    window.open(whatsappLink, "_blank")
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Escolha o pack ideal para você
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforme suas fotos em arte personalizada com preços acessíveis
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {plans.map((plan, index) => {
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "border-[#b794f6] border-2 shadow-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-white"
                    : ""
                } ${isVisible ? "animate-in fade-in slide-in-from-bottom" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ff9ec4] to-[#b794f6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {plan.badge}
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src={plan.iconImage || "/placeholder.svg"}
                      alt={plan.name}
                      fill
                      className="object-contain rounded-3xl"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-gradient mt-2">{plan.price}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#b794f6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={() => handleWhatsAppPurchase(plan.whatsappLink)}
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#ff9ec4] to-[#b794f6] text-white hover:opacity-90 shadow-lg"
                        : "bg-gradient-to-r from-[#ff9ec4] to-[#b794f6] text-white hover:opacity-90"
                    } transition-all duration-300 font-semibold hover:scale-105`}
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
