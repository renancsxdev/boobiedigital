import { Shield, Lock, CheckCircle, Clock } from "lucide-react"

export function SecuritySealSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">Compra 100% Segura</h2>
            <p className="text-gray-600">Seus dados e pagamentos estão protegidos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pagamento Seguro</h3>
              <p className="text-sm text-gray-600">Transações protegidas via WhatsApp</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Entrega Garantida</h3>
              <p className="text-sm text-gray-600">Suas artes entregues com qualidade</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Suporte 24h</h3>
              <p className="text-sm text-gray-600">Atendimento sempre disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
