import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como faço minha compra?",
    answer:
      "A compra é feita diretamente pelo checkout! Entre em contato conosco e faremos todo o processo de forma rápida e segura.",
  },
  {
    question: "Como envio minhas fotos?",
    answer: "Você envia suas imagens diretamente pelo WhatsApp após a confirmação da compra. É simples e rápido!",
  },
  {
    question: "Como recebo minhas artes finalizadas?",
    answer:
      "Suas artes são entregues via e-mail ou link do Google Drive, garantindo qualidade máxima e fácil acesso aos arquivos.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer:
      "Nosso suporte funciona 24 horas por dia! Estamos sempre disponíveis para tirar suas dúvidas e ajudar no que precisar.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gradient">Perguntas Frequentes</h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-[var(--boobie-purple)] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
