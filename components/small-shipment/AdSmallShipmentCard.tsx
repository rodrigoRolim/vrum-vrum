import { Car, Clock, FileText, Mail, Map, Star, UserRound, Weight, Zap } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  hasDriver: boolean;
  
}
export default function AdSmallShipmentCard() {
  return (
    <div className="
      flex flex-col bg-white border border-gray-200 rounded-xl mt-2 overflow-hidden 
      transition-all duration-200 hover:ease-in-out shadow-md hover:-translate-y-0.5">
      {/* <!-- Card 1: Motoboy para Documentos --> */}
      <header className="flex bg-gray-50 w-full border-b border-b-gray-100 border-l-4 border-l-red-600 py-4 px-5">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <div className="text-base sm:text-lg font-semibold text-gray-900">Entrega de Documentos</div>
            <div className="text-sm text-gray-500">Motoboy Express - Zona Central</div>
          </div>
          <span className="flex gap-1 items-center rounded-[20px] py-1 px-2.5 bg-gray-100 text-gray-600 text-xs">
            <Car className="size-4"/> Com motorista
          </span>
        </div>
      </header>

      <div className="flex flex-col px-4">
        {/* <!-- Informações do prestador --> */}
        <div className="flex gap-3 py-4 border-b border-b-gray-100">
          <div className="flex items-center justify-center rounded-lg size-10 bg-gray-100 text-gray-500">
            <UserRound className="size-6" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm font-semibold text-gray-900">Pedro Santos</div>
            <div className="text-xs text-gray-500">Motoboy • 5 anos experiência • São Paulo</div>
          </div>
        </div>

        {/* <!-- Detalhes --> */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 py-4">
          <div className="flex gap-2 items-start flex-1 min-w-fit">
            <div className="w-4 flex items-center">
              <Clock className="size-5 text-gray-600"/>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-900">1-2 horas</div>
              <div className="text-xs text-gray-500">Prazo médio</div>
            </div>
          </div>

          <div className="flex gap-2 items-start flex-1 min-w-fit">
            <div className="w-4 flex items-center">
              <Weight className="size-5 text-gray-600"/>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-900">Até 5kg</div>
              <div className="text-xs text-gray-500">Capacidade</div>
            </div>
          </div>

          <div className="flex gap-2 items-start flex-1 min-w-fit">
            <div className="w-4 flex items-center">
              <Map className="size-5 text-gray-600"/>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-900">Centro, Zona Sul</div>
              <div className="text-xs text-gray-500">Área de atuação</div>
            </div>
          </div>

          <div className="flex gap-2 items-start flex-1 min-w-fit">
            <div className="w-4 flex items-center">
              <Star className="size-5 text-gray-600"/>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-900">4.5/5</div>
              <div className="text-xs text-gray-500">128 avaliações</div>
            </div>
          </div>
        </div>

        {/* <!-- Tags --> */}
        <div className="flex gap-2 py-4 border-b border-b-gray-100">
          <span className="flex items-center px-2 py-1 rounded gap-1 bg-gray-100 text-xs">
            <FileText className="size-4"/> Documentos
          </span>
          <span className="flex items-center px-2 rounded gap-1 bg-gray-100 text-xs">
           <Mail className="size-4"/> Envelopes
          </span>
          <span className="flex items-center px-2 rounded gap-1 bg-gray-100 text-xs">
            <Zap className="size-4"/> Urgente
          </span>
        </div>

        {/* <!-- Footer --> */}
        <footer className="flex justify-between py-4">
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">A partir de</div>
            <div className="text-lg font-semibold">R$ 15,00</div>
            <div className="text-xs text-gray-500">por entrega</div>
          </div>
          <button className="bg-gray-900 font-medium h-fit self-end cursor-pointer py-2 px-4 text-white rounded-md text-sm border-none transition-all duration-200 hover:-translate-y-1 hover:bg-gray-700">Solicitar</button>
        </footer>
      </div>
    </div>
  )
}

// Entrega por Motoboy
// Coletas rápidas na cidade

// Entrega com Carro
// Ideal para volumes médios e mais proteção

// Transporte em Van
// Perfeito para mudanças pequenas e lotes

// Transporte de Carga Pesada
// Até 3 toneladas • São Paulo e interior

// Transporte de Medicamentos Refrigerados
// Entrega rápida • Capital e região metropolitana

// [VERBO] + [OBJETO PRINCIPAL] + [DIFERENCIAL OPCIONAL]
// [TIPO DE PRESTADOR] + [LOCALIZAÇÃO/ÁREA] + [DETALHE ESPECÍFICO]