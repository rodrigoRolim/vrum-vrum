import { BadgeCheck, Bus, Calendar, CheckCircle, CheckCircle2, Church, Hotel, MapPinned, Route, ShoppingBag, Star, Utensils } from "lucide-react";
import Image from "next/image";

export default function ExcursionCard2() {
  return (
    <div className="transition-all duration-300 ease-in-out tour-agency bg-white rounded-xl border border-gray-300 shadow-lg overflow-hidden hover:shadow-xl cursor-pointer group">

      {/* <!-- Badge duplo --> */}
      {/* <div className="floating-badge">
        <div className="flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold badge-agency shadow-lg">
            <i className="fas fa-umbrella-beach"></i> AGÊNCIA
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold badge-tourism shadow-lg">
            <i className="fas fa-route"></i> EXCURSÃO
          </span>
        </div>
      </div> */}

      <div className="h-40 relative overflow-hidden bg-linear-to-br from-purple-700 to-purple-900">
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-white">
            <i className="fas fa-clock text-xs"></i> 2 dias / 1 noite
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-semibold text-sm truncate">São Paulo → Aparecida do Norte</h4>
        </div>
      </div>

      <div className="card-content p-4">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors mb-1">
            Excursão Religiosa - Aparecida do Norte
          </h3>
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 fill-current"/>
            <span className="text-xs text-gray-500">4.8 • 156 avaliações</span>
          </div>
        </div>
{/* 
        <!-- INFORMAÇÕES DA AGÊNCIA --> */}
        <div className="mb-4">
          <div className="p-3 bg-amber-50 rounded-lg mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white">
                <MapPinned className="text-white"/>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">TransTur Brasil</p>
                <p className="flex gap-1 text-xs text-gray-600">
                  <div className="flex gap-1 items-center">
                    <BadgeCheck className="text-amber-600 size-4"/>CADASTUR
                  </div>
                   •
                  <div className="flex gap-1">
                   <Calendar className="text-amber-600 size-4"/> 15 anos no mercado
                  </div>
                </p>
                <div className="mt-1 flex items-center text-xs text-gray-500">
                  <i className="fas fa-info-circle text-amber-500 mr-1"></i>
                  <span>Agência organizadora - contrata transporte com terceiros</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ROTEIRO BREVE --> */}
          <div className="mb-4">
            <h4 className="flex text-sm font-semibold text-gray-900 mb-2">
              <Route className="size-5 text-purple-500 mr-2"/> Roteiro incluído:
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Church className="size-4 text-purple-400"/>
                <span>Missa na Basílica Nacional</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Utensils className="size-4 text-purple-400"/>
                <span>Refeições no restaurante local</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <ShoppingBag className="size-4 text-purple-400"/>
                <span>Tempo para compras na feirinha</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Bus className="size-4 text-purple-400"/>
                <span>City tour pela cidade histórica</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Hotel className="size-4 text-purple-400"/>
                <span>Hospedagem 1 noite com café</span>
              </div>
            </div>

            {/* <!-- Inclusos --> */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="size-4 text-green-500"/>
                  <span>Transporte ida/volta</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="size-4 text-green-500"/>
                  <span>Hospedagem 1 noite</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="size-4 text-green-500"/>
                  <span>3 refeições</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="size-4 text-green-500"/>
                  <span>Guia turístico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- PREÇO E BOTÃO --> */}
        <div className="card-footer pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Pacote completo • Agência</p>
              <p className="text-2xl font-bold text-gray-900">R$ 450,00</p>
              <p className="text-xs text-gray-500">à vista ou 10x R$ 49,90</p>
            </div>
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow">
              <i className="fas fa-shopping-cart mr-2"></i> Comprar Excursão
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}