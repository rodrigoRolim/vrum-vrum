'use client';
import { ArrowRight, ArrowRightLeft, Map, MapPin, Search } from "lucide-react";
import Checkbox from "../Checkbox";

import { useState } from "react";
import { Autocomplete, ButtonAction } from "../Autocomplete";
import { fetchOSM } from "@/services/osm";
import { MapAddress } from "@/app/api/address/route";
import useAutocomplete from "@/hooks/useAutocomplete";


export default function () {
  const [direction, setDirection] = useState<"one" | "bi">("one")
  const [queryOrigin, setQueryOrigin] = useState("")
  const [queryDestination, setQueryDestination] = useState("")
  const [origin, setOrigin] = useState<MapAddress>()
  const [destination, setDestination] = useState<MapAddress>()

  function selectOrigin(option: MapAddress) {
    setOrigin(option)
  }

  function selectDestination(option: MapAddress) {
    setDestination(option)
  }

  const mapAction: ButtonAction = {
    action: () => {},
    icon: Map,
    text: "Mapa"
  }

  const { options: optionsOrigin, loading: loadingOrigin } = useAutocomplete<MapAddress>({
    query: queryOrigin,
    fetcher: fetchOSM,
    minLength: 3,
    delay: 400
  })
   const { options: optionsDestination, loading: loadingDestination } = useAutocomplete<MapAddress>({
    query: queryDestination,
    fetcher: fetchOSM,
    minLength: 3,
    delay: 400
  })

  return (
    <div className="bg-white rounded-xl shadow-lg border border-orange-100 py-6 mb-6 max-w-2xl mx-auto px-4 mt-8">
      <div className="flex flex-col">
        <h3 className="text-gray-700 font-medium mb-3">Tipo de viagem</h3>
        <div className="flex gap-3 mb-6">
          <button
            className={[
              "flex-1 flex items-center justify-center gap-2 border-2  py-3 rounded-lg font-medium",
              direction === "one"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-200 text-gray-700 hover:border-orange-200"
            ].join(" ")}
            onClick={() => setDirection("one")}
          >
            <ArrowRight className="size-4"/>Apenas Ida
          </button>
          <button 
            className={[
              "flex-1 flex items-center justify-center gap-2 border-2  py-3 rounded-lg font-medium",
              direction === "bi"
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-200 text-gray-700 hover:border-orange-200"
            ].join(" ")}
            onClick={() => setDirection("bi")}
          >
            <ArrowRightLeft className="size-4"/> Ida e Volta
          </button>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 mb-6">
          <Checkbox label="Embarque e desembarque na mesma cidade"/>
        </div>
      </div>
      <form className="space-y-6">
        <div className="flex flex-col gap-8">
          <Autocomplete<MapAddress>
            options={optionsOrigin}
            label="Cidade de Embarque *" 
            icon={MapPin}  
            button={mapAction}
            query={queryOrigin}
            selected={origin?.text || queryOrigin}
            onQuery={setQueryOrigin}
            onSelectOption={selectOrigin}
          />
          <Autocomplete<MapAddress>
            options={optionsDestination}
            label="Cidade de Desembarque *" 
            icon={MapPin}  
            button={mapAction}
            query={queryDestination}
            selected={destination?.text || queryDestination}
            onQuery={setQueryDestination}
            onSelectOption={selectDestination}
          />
        </div>
        <div className="flex">
          <button className="flex flex-col items-center w-full mt-8 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
            <div className="flex gap-4 items-center w-fit">
              <Search className="size-5"/>
              <span className="text-lg">Buscar Empresas</span>
            </div>
            <div className="text-sm font-normal mt-1 opacity-90">
              Preencha os campos
            </div> 
          </button>
        </div>
      </form>
    </div>
  )
}
