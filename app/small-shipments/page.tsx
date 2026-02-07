'use client';

import DeliveryTypeFilters, { DeliveryType } from "@/components/small-shipment/DeliveryTypeFilters";
import VehicleTypeFilters, { VehicleType } from "@/components/small-shipment/VehicleTypeFilters";
import { useState } from "react";

export default function SmallShiptments() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('all')
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('all')

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <header className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Encomendas & Entregas</h1>
        <p className="text-gray-600">Serviços de entrega rápida e segura</p>
      </header>
      <div className="flex flex-col gap-1 mt-4">
        <h2 className="text-sm text-gray-600 font-medium">Filtrar por veículo:</h2>
        <VehicleTypeFilters
          value={vehicleType}
          onChange={setVehicleType}
        />
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h2 className="text-sm text-gray-600 font-medium">Filtrar por tipo de encomenda:</h2>
        <DeliveryTypeFilters 
          value={deliveryType}
          onChange={setDeliveryType}
        />
      </div>
    </div>
  )
}
