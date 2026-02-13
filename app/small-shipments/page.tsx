'use client';

import AdSmallShipmentCard from "@/components/small-shipment/AdSmallShipmentCard";
import DeliveryTypeFilters, { DeliveryType } from "@/components/small-shipment/DeliveryTypeFilters";
import VehicleTypeFilters, { VehicleType } from "@/components/small-shipment/VehicleTypeFilters";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function SmallShiptments() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('all')
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('all')

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-transparent">
      <header className="flex gap-2">
        <button className="flex items-start justify-start w-fit h-fit">
          <ChevronLeft className="h-6"/>
        </button>
        <div className="flex flex-col justify-start">
          <h1 className="text-lg leading-5 font-bold text-gray-900 mb-2">Encomendas & Entregas</h1>
          <p className="text-sm text-gray-600">Serviços de entrega rápida e segura</p>
        </div>
      </header>
      <div className="flex flex-col gap-0.5 mt-6">
        <h2 className="text-xs text-gray-600 font-medium">Filtrar por veículo:</h2>
        <VehicleTypeFilters
          value={vehicleType}
          onChange={setVehicleType}
        />
      </div>
      <div className="flex flex-col gap-0.5 mt-2">
        <h2 className="text-xs text-gray-600 font-medium">Filtrar por tipo de encomenda:</h2>
        <DeliveryTypeFilters 
          value={deliveryType}
          onChange={setDeliveryType}
        />
      </div>
      <div className="grid grid-cols-1 mt-6">
        <AdSmallShipmentCard />
      </div>
    </div>
  )
}
