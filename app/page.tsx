import FeatureCard from "@/components/FeatureCard";
import OurServiceCard from "@/components/OurServiceCard";
import RouteCard from "@/components/RouteCard";
import ServiceOption from "@/components/ServiceOption";
import { ArrowRight, Building2, Bus, Calendar, Headphones, Package, Route, Search, Shield, Users } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center">
        <section className="relative w-full flex flex-col items-center gap-12 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[70vh] px-6 pt-6 pb-25">
          <div className="flex flex-col text-center gap-6">
            <h1 className="text-white text-4xl font-bold leading-tight">
              Viaje com <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-500">conforto</span> 
              <br />
              Envie com <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-500">segurança</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">Fretamento de transportes, envio de encomendas e viagens para grupos, eventos e empresas.</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap flex-1 justify-center gap-8">
            <FeatureCard
              icon={Bus} 
              feature="Passageiros" 
              description="Viagens confortáveis" 
              color="orange"
            />
            <FeatureCard 
              icon={Package} 
              feature="Encomendas" 
              description="Entrega rápida" 
              color="blue"
            />
            <FeatureCard 
              icon={Route} 
              feature="Rotas" 
              description="Regional e interestadual" 
              color="green"
            />
          </div>
        </section>
        <section className="relative -mt-24 z-20 px-6 w-full">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-6 md:p-8 max-w-4xl flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-2">O que você precisa?</h2>
            <ServiceOption 
              service="Fretamento" 
              description="Contrate transporte sob demanda para empresas e grupos."
              icon={Bus}
              color="orange"
            />
            <ServiceOption 
              service="Encomendas" 
              description="Envie pacotes e cargas entre cidades com segurança."
              icon={Package}
              color="blue"
            />
          </div>
        </section>
        <section className="flex flex-col gap-12 py-20 px-6 bg-slate-50 w-full">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Rotas Populares</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Confira nossas rotas mais procuradas com os melhores preços</p>
          </div>
          <div className="flex flex-col gap-6">
            <RouteCard 
              origin="São paulo - SP" 
              destination="Campinas - SP" 
              departureTime="12:00" 
              seats={12} 
              initialPrice={45} 
              vehicle="van"
            />
            <RouteCard 
              origin="São paulo - SP" 
              destination="Campinas - SP" 
              departureTime="12:00" 
              seats={12} 
              initialPrice={45} 
              vehicle="microbus"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link href="#">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  border border-gray-400 bg-background shadow-sm hover:bg-gray-400/20 hover:text-gray-600 h-10 px-8 rounded-xl">
                Ver todas as rotas
                <ArrowRight className="size-4 ml-2"/>
              </button>
            </Link>
          </div>
        </section>
        <section className="py-20 px-6 bg-white">
          <div className="flex flex-col items-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tudo que você precisa em um só lugar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos soluções completas para transporte de passageiros e encomendas</p>
          </div>
          <div className="flex flex-col gap-6">
            <OurServiceCard 
              service="Fretamento de veículos" 
              description="Alugue vans e micro-ônibus para sua empresa, evento ou grupo com motorista incluso."
              icon={Bus}
              color="orange"
            />
            <OurServiceCard 
              service="Envio de Encomendas" 
              description="Transporte de cargas e encomendas entre cidades com rastreamento e entrega segura."
              icon={Package}
              color="blue"
            />
            <OurServiceCard 
              service="Transporte Corporativo" 
              description="Soluções de transporte para empresas: funcionários, reuniões e viagens de negócios."
              icon={Building2}
              color="green"
            />
            <OurServiceCard 
              service="Eventos e Excursões" 
              description="Transporte para festas, casamentos, formaturas, excursões e eventos especiais."
              icon={Calendar}
              color="purple"
            />
            <OurServiceCard 
              service="Segurança Garantida" 
              description="Motoristas experientes e veículos regularizados para sua tranquilidade."
              icon={Shield}
              color="red"
            />
            <OurServiceCard 
              service="Atendimento Personalizado" 
              description="Orçamento sob medida para suas necessidades específicas de transporte."
              icon={Headphones}
              color="cyan"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col bg-slate-900 text-white py-12 px-6 gap-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
              <Bus className="size-5 text-white"/>
            </div>
            <h2 className="font-bold text-xl">Vrum</h2>
          </div>
          <p className="text-slate-400 max-w-md">
            Transporte de passageiros e encomendas com conforto e segurança. Conectando cidades com qualidade e pontualidade.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">Rotas</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">Enviar Encomenda</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">Rastrear</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              contato@viarapido.com.br
            </li>
            <li>
              (00) 0000-0000
            </li>
          </ul>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          © 2026 Vrum. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
