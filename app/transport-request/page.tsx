'use client';

import Stepper from "@/components/Stepper";
import PersonalDataStep from "@/components/transport-request/PersonalDataStep";
import ReviewRequestStep from "@/components/transport-request/ReviewRequestStep";
import TravelDataStep from "@/components/transport-request/TravelDataStep";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const client = {
  name: "Rodrigo Rolim Veras",
  phone: "(43) 99808-6369",
  email: "rodrigorolimveras@gmail.com"
} as const
const travel = {
  origin: "Cornélio Procópio - PR",
  destination: "Londrina - PR",
  departureDatetime: "21/06/2026 08:00",
  returnDatetime: "21/06/2026 13:30",
  passengers: 45,
  specialNeeds: true,
}

const STEPS = {
  personal: 1,
  travel: 2,
  review: 3
} as const
const STEP_INIT = 1

export default function TransportRequest() {
  const stepsCount = 3
  const [step, setStep] = useState<number>(1)

  function goToNextStep() {
    setStep(step => {
      if (step === stepsCount) {
        return step
      }
      return step + 1
    })
  }
  function goToPrevStep() {
    setStep(step => {
      if (step === STEP_INIT) {
        return step
      }
      return step - 1
    })
  }
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
          <Stepper steps={stepsCount} currentStep={step} />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 max-w-4xl mx-auto">
          { step === STEPS.personal && <PersonalDataStep /> }
          { step === STEPS.travel && <TravelDataStep /> }
          { step === STEPS.review && <ReviewRequestStep client={client} travel={travel}/> }
          <div className="flex pt-4 items-end justify-between w-full">
            <button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#e5e5e5] bg-background shadow-sm hover:bg-accent hover:text-foreground h-9 px-8 py-4"
              onClick={goToPrevStep}  
            >
              <ArrowLeft className="size-4"/>
              Voltar
            </button>
            <button 
              className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-primary-foreground shadow h-9 px-8 py-4 bg-orange-500 hover:bg-orange-600"
              onClick={goToNextStep}
            >
              Continuar <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}