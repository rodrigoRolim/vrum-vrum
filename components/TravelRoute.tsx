import { MapPin } from "lucide-react"

export default function TravelRoute() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <MapPin className="size-4 text-slate-400"/>
        <div>
          <p className="font-normal text-slate-600 text-sm">Saída: São Paulo - SP</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="ml-1.5 w-0.5 my-1.5 bg-linear-to-b from-slate-300 to-orange-400"></div>
        <div className="flex flex-col gap-2 my-2">
          <p className="text-xs text-slate-700">Paradas para embarque:</p>
          <div className="flex items-center gap-2 ml-1">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <p className="font-normal text-sm text-slate-500">São caetano do sul - SP</p>
          </div>
          <div className="flex items-center gap-2 ml-1">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <p className="font-normal text-sm text-slate-500">Campinas - SP</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <MapPin className="size-4 text-slate-500"/>
          <div>
            <p className="font-semibold text-slate-600 text-sm">Aparecida - SP</p>
          </div>
        </div>
      </div>
    </div>
  )
}