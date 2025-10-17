import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[var(--boobie-pink)] via-[var(--boobie-purple)] to-[var(--boobie-blue)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="BoobieDigital Logo"
            width={200}
            height={100}
            className="w-auto h-20 rounded-3xl"
          />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#" className="hover:underline transition-all">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:underline transition-all">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:underline transition-all">
              Contato
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://wa.me/5511978478108?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20com%20meu%20pedido%20BoobieDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/boobiedigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/80 text-center">
            © 2025 BoobieDigital — imagens criativas e low-ticket. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
