import { BriefcaseMedical, Calendar, Camera, Clock, ShieldBan, Star, User, User2, UserCheck, Users, Van } from "lucide-react";

export default function SchoolarTransportCard() {
  return (
    <div className="transition-all duration-300 ease-in-out driver-individual school-service bg-white rounded-xl border border-gray-300 shadow-lg overflow-hidden hover:shadow-xl cursor-pointer group">

      {/* <!-- Badge duplo: tipo de prestador + tipo de serviço -->
      <div className="floating-badge">
        <div className="flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold badge-individual shadow-lg">
            <Users /> MOTORISTA
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold badge-school shadow-lg">
            <i className="fas fa-school"></i> ESCOLAR
          </span>
        </div>
      </div> */}

      <div className="h-40 relative overflow-hidden bg-linear-to-br from-purple-700 to-purple-900">
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-white">
            <Van className="size-4"/> Van 15 lugares
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-semibold text-sm truncate">Zona Sul - São Paulo</h4>
        </div>
      </div>

      <div className="card-content p-4">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors mb-1">
            Transporte Escolar Período Integral
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
             <Star className="size-5 text-yellow-400 fill-current"/>
            </div>
            <span className="text-xs text-gray-500">5.0 • 42 avaliações</span>
          </div>
        </div>

        {/* <!-- INFORMAÇÕES DO SERVIÇO ESCOLAR --> */}
        <div className="mb-4">
          <div className="p-3 bg-purple-50 rounded-lg mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                <User />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">Carlos Mendes (Motorista)</p>
                <p className="text-xs text-gray-600">
                  <i className="fas fa-id-card text-purple-500"></i> CNH há 15 anos •
                  <i className="fas fa-shield-alt text-purple-500 ml-2"></i> CRV escolar atualizado
                </p>
              </div>
            </div>
          </div>

          {/* <!-- DETALHES DO FRETE ESCOLAR --> */}
          <div className="space-y-3">
            <div className="flex  gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="size-5 text-purple-500"/>
                <div>
                  <p className="font-medium">15 crianças</p>
                  <p className="text-xs text-gray-500">Capacidade</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <User2 className="size-5 text-purple-500"/>
                <div>
                  <p className="font-medium">3-12 anos</p>
                  <p className="text-xs text-gray-500">Idade atendida</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-purple-500"/>
                <span>Segunda a sexta</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-purple-500"/>
                <span>7:00 - 18:00</span>
              </div>
            </div>

            {/* <!-- Itens de segurança ESCOLAR --> */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-1">Segurança escolar:</p>
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                  <ShieldBan className="size-3.5"/> Cintos 3 pontos
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                  <UserCheck className="size-3.5"/> Monitorado
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                  <Camera className="size-3.5"/> Câmeras internas
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                 <BriefcaseMedical className="size-3.5"/> Kit primeiros socorros
                </span>
              </div>
            </div>

            {/* <!-- Escolas atendidas --> */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-1">Escolas atendidas:</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                  Colégio Santo Antônio
                </span>
                <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                  Escola Pueri Domus
                </span>
                <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                  Mackenzie
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- PREÇO E BOTÃO --> */}
        <div className="card-footer pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Contrato mensal • Motorista</p>
              <p className="text-2xl font-bold text-gray-900">R$ 300,00</p>
              <p className="text-xs text-gray-500">por criança/mês</p>
            </div>
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow">
              <i className="fas fa-phone-alt mr-2"></i> Contatar Motorista
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}