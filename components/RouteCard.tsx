import { ArrowRight, Bus, Clock, MapPin } from "lucide-react";

interface Props {
  origin: string;
  destination: string;
  vehicle: 'van' | 'microbus';
  departureTime: string;
  seats: number;
  initialPrice: number;
}
export default function RouteCard({ origin, destination, vehicle = 'van', departureTime, seats, initialPrice }: Props) {
  const colorsVehicleTypesMap = {
    van: 'bg-blue-50 text-blue-700 border-blue-200',
    microbus: 'bg-purple-50 text-purple-700 border-purple-200'
  }
  const labeVehicleTypesMap = {
    van: 'Van',
    microbus: 'Micro-ônibus'
  }
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 h-full flex flex-col">
      <div className="flex justify-content-between mb-4">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-2 text-slate-500">
            <MapPin className="size-4 text-slate-400"/>
            <p className="text-sm">{origin}</p>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowRight className="size-3 text-orange-500" />
            <p className="font-semibold text-slate-900">{destination}</p>
          </div>
        </div>
        <span className={`px-3 py-1 h-fit rounded-full text-xs font-semibold border ${colorsVehicleTypesMap[vehicle]}`}>
          {labeVehicleTypesMap[vehicle]}
        </span>
      </div>
      <div className="flex gap-4 text-sm text-slate-500 mb-4">
        <div className="flex gap-1 items-center"><Clock className="w-4 h-4" /><span className="self-end">{departureTime}</span></div>
        <div className="flex gap-1 items-center"><Bus className="w-4 h-4" /><span className="self-end">{seats} vagas</span></div>
      </div>
      <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-slate-500">a partir de</span>
          <p className="text-2xl font-bold text-slate-900">R$ {initialPrice}</p>
        </div>
        <button className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800">
          Reservar
        </button>
      </div>
    </div>
  )
}