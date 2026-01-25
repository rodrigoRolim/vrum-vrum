// Origin: autocomplete address OpenStreetMap (Nominatim)
// Date and time departure
// Destination: autocomplete address OpenStreeMap (Moninatim)
// Date and time return
// number of passengers
// vehicle type will be matched accordingly to number of passengers

import { Clock, MapPin, Timer, Users } from "lucide-react";
import InputText from "../InputText";
import InputTime from "../InputTime";
import InputNumber from "../InputNumber";

export default function TravelDataStep() {
  return (
    <form className="flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Dados da viagem
        </h2>
        <p>Detalhes do trajeto</p>
      </div>
      <div className="flex flex-col gap-6 mb-4">
        <InputText label="Local de embarque *" icon={MapPin} placeholder="Endereço completo de embarque"/>
        <InputTime label="Horário de saída *" icon={Clock} placeholder="HH:MM"/>
        <InputText label="Destino *" icon={MapPin} placeholder="Endereço completo de destino"/>
        <InputTime label="Horário de retorno *" icon={Clock} placeholder="HH:MM"/>
        <InputNumber label="Número de passageiros *" icon={Users} value={0} placeholder="" onChange={() => {}}/>
      </div>
    </form>
  )
}
// request-charter