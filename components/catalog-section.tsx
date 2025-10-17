"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const packs = [
  {
    name: "Boobie Aesthetic",
    theme: "Fotos estilo Tumblr e Pinterest",
    colors: "Rosa, bege, lilás",
    images: [
      { query: "aesthetic pink tumblr style photo" },
      { query: "beige aesthetic pinterest photo" },
      { query: "lilac aesthetic soft photo" },
    ],
  },
  {
    name: "Boobie Nature",
    theme: "Natureza, flores e paisagens",
    colors: "Verde, azul, marrom",
    images: [
      { query: "nature green landscape photo" },
      { query: "blue sky nature photo" },
      { query: "brown earth nature photo" },
    ],
  },
  {
    name: "Boobie Urban",
    theme: "Cidade, retrô, street e luzes",
    colors: "Preto, vermelho, cinza",
    images: [
      { query: "urban city street lights photo" },
      { query: "retro red city photo" },
      { query: "gray urban architecture photo" },
    ],
  },
  {
    name: "Boobie Dreamy",
    theme: "Tons suaves e vibes criativas",
    colors: "Azul-claro, lilás, branco",
    images: [
      { query: "dreamy light blue soft photo" },
      { query: "lilac dreamy creative photo" },
      { query: "white dreamy aesthetic photo" },
    ],
  },
  {
    name: "Boobie Neon",
    theme: "Brilho, contraste e estilo futurista",
    colors: "Roxo, rosa, ciano",
    images: [
      { query: "neon purple futuristic photo" },
      { query: "neon pink glow photo" },
      { query: "cyan neon futuristic photo" },
    ],
  },
]

export function CatalogSection() {
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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gradient">Nossos Packs</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore nossa coleção exclusiva de packs temáticos
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packs.map((pack, index) => (
            <Card
              key={index}
              className={`group overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? "animate-in fade-in slide-in-from-bottom" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gradient">{pack.name}</CardTitle>
                <CardDescription className="text-sm">{pack.theme}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {pack.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100"
                    >
                      <Image
                        src={`/.jpg?height=150&width=150&query=${encodeURIComponent(img.query)}`}
                        alt={`${pack.name} preview ${i + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="flex gap-1">
                    {pack.colors.split(", ").map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{
                          background: color.toLowerCase().includes("rosa")
                            ? "#FF7BAC"
                            : color.toLowerCase().includes("roxo") || color.toLowerCase().includes("purple")
                              ? "#8A5FFF"
                              : color.toLowerCase().includes("azul") ||
                                  color.toLowerCase().includes("blue") ||
                                  color.toLowerCase().includes("ciano") ||
                                  color.toLowerCase().includes("cyan")
                                ? "#4FD1E0"
                                : color.toLowerCase().includes("verde") || color.toLowerCase().includes("green")
                                  ? "#10b981"
                                  : color.toLowerCase().includes("vermelho") || color.toLowerCase().includes("red")
                                    ? "#ef4444"
                                    : color.toLowerCase().includes("bege") || color.toLowerCase().includes("beige")
                                      ? "#f5f5dc"
                                      : color.toLowerCase().includes("lilás") || color.toLowerCase().includes("lilac")
                                        ? "#c8a2d0"
                                        : color.toLowerCase().includes("marrom") ||
                                            color.toLowerCase().includes("brown")
                                          ? "#8b4513"
                                          : color.toLowerCase().includes("preto") ||
                                              color.toLowerCase().includes("black")
                                            ? "#1f2937"
                                            : color.toLowerCase().includes("cinza") ||
                                                color.toLowerCase().includes("gray")
                                              ? "#6b7280"
                                              : color.toLowerCase().includes("branco") ||
                                                  color.toLowerCase().includes("white")
                                                ? "#f9fafb"
                                                : "#d1d5db",
                        }}
                      />
                    ))}
                  </div>
                  <span>{pack.colors}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[var(--boobie-purple)] text-[var(--boobie-purple)] hover:bg-[var(--boobie-purple)] hover:text-white transition-all duration-300 bg-transparent"
                >
                  Ver detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
