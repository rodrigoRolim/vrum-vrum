// Origin: autocomplete address OpenStreetMap (Nominatim)
// Date and time departure
// Destination: autocomplete address OpenStreeMap (Moninatim)
// Date and time return
// number of passengers
// vehicle type will be matched accordingly to number of passengers
'use client';

import { Clock, MapPin, Users } from "lucide-react";
import InputText from "../InputText";
import InputTime from "../InputTime";
import InputNumber from "../InputNumber";
import DatePicker from "../DatePicker";

export default function TravelDataStep() {
  return (
    <form className="flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Dados da viagem
        </h2>
        <p className="text-slate-500">Detalhes do trajeto</p>
      </div>
      <div className="flex flex-col gap-6 mb-4">
        <InputText label="Local de embarque *" icon={MapPin} placeholder="Endereço completo de embarque"/>
        <div className="flex flex-col xs:flex-row gap-4">
          <DatePicker label="Data de saída" className="flex-1"/>
          <InputTime label="Horário de saída *" icon={Clock} placeholder="HH:MM" className="flex-1"/>
        </div>
        <InputText label="Destino *" icon={MapPin} placeholder="Endereço completo de destino"/>
        <div className="flex gap-4">
          <DatePicker label="Data de retorno" className="flex-1"/>
          <InputTime label="Horário de retorno *" icon={Clock} placeholder="HH:MM" className="flex-1"/>
        </div>
        <InputNumber label="Número de passageiros *" icon={Users} value={0} placeholder="" onChange={() => {}}/>
      </div>
    </form>
  )
}
// request-charter