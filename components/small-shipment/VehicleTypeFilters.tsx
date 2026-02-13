import { Bus, BusFront, Car, Motorbike, Truck, Van } from "lucide-react";
import SelectableButton from "../SelectableButton";


export type VehicleType = 'all' | 'car' | 'van' | 'bus' | 'minibus'
interface Props {
  value: VehicleType;
  onChange: (value: VehicleType) => void
}
enum filters {
  ALL='all',
  CAR='car',
  VAN='van',
  BUS='bus',
  MINIBUS='minibus'
}

export default function VehicleTypeFilter({ value, onChange }: Props) {
  function selectFilter(e: React.MouseEvent<HTMLButtonElement>) {
    onChange(e.currentTarget.dataset.value as VehicleType)
  }
  return (
    <div className="flex md:flex-wrap py-2 px-1 overflow-x-auto flex-nowrap gap-3">
      <SelectableButton
        label="todos"
        active={value === filters.ALL}
        value="all"
        onClick={selectFilter}
      />
      <SelectableButton 
        label="Ônibus"
        active={value === filters.BUS}
        icon={BusFront}
        value="bus"
        onClick={selectFilter}
      />
      <SelectableButton 
        label="Micro-ônibus"
        active={value === filters.MINIBUS}
        icon={Bus}
        value="minibus"
        onClick={selectFilter}
      />
      <SelectableButton 
        label="Van/Furgão"
        active={value === filters.VAN}
        icon={Van}
        value="van"
        onClick={selectFilter}
      />
      <SelectableButton 
        label="Carro"
        active={value === filters.CAR}
        icon={Car}
        value="car"
        onClick={selectFilter}
      />
    </div>
  )
}
