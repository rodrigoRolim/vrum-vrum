'use client';



import Stepper from "@/components/Stepper";
import PersonalDataStep from "@/components/transport-request/PersonalDataStep";
import TravelDataStep from "@/components/transport-request/TravelDataStep";
import { ArrowLeft, ArrowRight, Building2, Mail, Phone, User } from "lucide-react";
import Link from "next/link";


export default function TransportRequest() {
  return (
    <main className="">
      <div className="min-h-screen bg-slate-50 pt-0 pb-12">
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center gap-4 px-6 py-4">
          <Link href="#" className="w-9 h-9 flex items-center justify-center"><ArrowLeft className="size-4"/></Link>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-slate-900">Solicitar Fretamento</h1>
            <p className="text-sm text-slate-500">Preencha os dados para receber um orçamento</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Stepper />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
          <PersonalDataStep />
          <TravelDataStep />
        </div>
      </div>
    </main>
  )
}