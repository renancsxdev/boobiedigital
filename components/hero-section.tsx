import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-pink-purple-blue animate-gradient">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-3 h-3 bg-white/30 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-white/40 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-white/40 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-4 animate-in fade-in slide-in-from-top duration-700">
            <Image
              src="/logo.png"
              alt="BoobieDigital Logo"
              width={300}
              height={150}
              className="w-auto h-32 md:h-40 rounded-3xl"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Transforme ideias em imagens com os Packs BoobieDigital!
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl text-balance animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Packs low-ticket com imagens prontas para usar em redes sociais, artes e criações.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-[var(--boobie-purple)] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl font-semibold"
            >
              Quero meu pack — R$8,90
            </Button>

            <p className="text-sm text-white/80">Entrega digital imediata • Pagamento seguro via PIX ou cartão</p>
          </div>
        </div>
      </div>
    </section>
  )
}
