import SearchCompanies from "@/components/small-shipment/SearchCompanies";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SearchBySmallShipmentService() {
   return (
    <main className="">
      <div className="min-h-screen bg-slate-50 pt-0 pb-12">
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center gap-4 px-6 py-4">
          <Link href="#" className="w-9 h-9 flex items-center justify-center"><ArrowLeft className="size-4"/></Link>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-slate-900">Solicitar Fretamento</h1>
            <p className="text-sm text-slate-500">Preencha os dados para encontrar empresas de frotas ou transportes</p>
          </div>
        </div>
        <SearchCompanies />

      </div>
    </main>
  )
}