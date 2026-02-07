'use client';

import Stepper from "@/components/Stepper";
import PersonalDataStep from "@/components/small-shipment/PersonalDataStep";
import ReviewRequestStep from "@/components/small-shipment/ReviewRequestStep";
import SearchCompanies from "@/components/small-shipment/SearchCompanies";
import TravelDataStep from "@/components/small-shipment/TravelDataStep";
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
            <p className="text-sm text-slate-500">Preencha os dados para encontrar empresas de frotas ou transportes</p>
          </div>
        </div>
        <SearchCompanies />

      </div>
    </main>
  )
}