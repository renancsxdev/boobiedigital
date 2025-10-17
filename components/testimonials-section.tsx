"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Roberta Cavalcante",
    text: "Adorei a qualidade das imagens, uso nos meus posts todos os dias!",
    rating: 5,
    image: "https://i.ibb.co/qMKsnV3/roberta.jpg",
  },
  {
    name: "Gustavo Ambrozio",
    text: "As fotos são lindas e o pack premium vale cada centavo.",
    rating: 5,
    image: "https://i.ibb.co/tpw6ZF9/gustavo.jpg",
  },
  {
    name: "Larissa Souza",
    text: "Entrega super rápida e imagens incríveis! Recomendo demais.",
    rating: 5,
    image: "https://i.ibb.co/hJgTRNh/larissa.jpg",
  },
]

export function TestimonialsSection() {
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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gradient">O que dizem nossos clientes</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "animate-in fade-in slide-in-from-bottom" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  
                  <div>
                    <p className="font-semibold text-gradient">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[var(--boobie-pink)] text-[var(--boobie-pink)]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
