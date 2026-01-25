import z from "zod";
import InputEmail from "@/components/InputEmail";
import InputText from "@/components/InputText";
import Select, { Option } from "@/components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { transportRequestSchema } from "@/components/transport-request/schemaPersonalData";
import { ArrowRight, Building2, Mail, Phone, User } from "lucide-react"

type FormData = z.infer<typeof transportRequestSchema>

export default function PersonalDataStep() {
  const travelOptions: Option[] = [
    { id: "0", text: "Corporativo / Empresarial" },
    { id: "1", text: "Evento / Fest" },
    { id: "2", text: "Excursão / Turismo" },
    { id: "3", text: "Transporte Escolar" },
    { id: "4", text: "Outro" },
  ]
  
  const [travelOption, setTravelOption] = useState<Option>({ id: 'default', text: "Selecione o tipo" })
  const selectTravelOption = (option: Option) => {
    setTravelOption(option)
  }
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(transportRequestSchema),
    mode: 'onChange'
  })
  return (
    <form className="flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Seus Dados</h2>
        <p className="text-slate-500">Informações para contato</p>
      </div>
      <div className="flex flex-col gap-6 mb-4">
        <InputText 
          label="Nome completo *" 
          icon={User} 
          placeholder="Seu nome"
          {...register('name')}
          error={errors.name}
        />
        <InputText 
          label="Telefone / Whatsapp *" 
          icon={Phone} 
          placeholder="(00) 00000-0000"
          {...register('phone')}
          error={errors.phone}
        />
        <InputEmail
          label="Email" 
          icon={Mail} 
          placeholder="seu@email.com"
          {...register('email')}
          error={errors.email}
        />
        <InputText label="Empresa (opcional)" icon={Building2} placeholder="Nome da empresa"/>
        <Select 
          label="Tipo de viagem *" 
          options={travelOptions} 
          selected={travelOption} 
          onSelect={selectTravelOption}/>
      </div>
      <div className="flex pt-4 items-end justify-end w-full">
        <button 
          className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none text-primary-foreground shadow h-9 px-8 py-4 bg-orange-500 hover:bg-orange-600">
            Continuar <ArrowRight className="size-4" />
          </button>
      </div>
    </form>
  )
}