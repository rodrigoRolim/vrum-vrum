import { Car, Motorbike, Truck, Van } from "lucide-react";
import SelectableButton from "../SelectableButton";


export type VehicleType = 'all' | 'motoboy' | 'car' | 'van' | 'truck'
interface Props {
  value: VehicleType;
  onChange: (value: VehicleType) => void
}
enum filters {
  ALL='all',
  MOTOBOY='motoboy',
  CAR='car',
  VAN='van',
  TRUCK='truck'
}

export default function VehicleTypeFilter({ value, onChange }: Props) {
  function selectFilter(e: React.MouseEvent<HTMLButtonElement>) {
    onChange(e.currentTarget.dataset.value as VehicleType)
  }
  return (
    <div className="flex md:flex-wrap py-2 px-1 overflow-x-auto flex-nowrap gap-3">
      <SelectableButton 
        label="Motoboy"
        active={value === filters.MOTOBOY}
        icon={Motorbike}
        value="motoboy"
        onClick={selectFilter}
      />
      <SelectableButton 
        label="Carro"
        active={value === filters.CAR}
        icon={Car}
        value="car"
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
        label="Caminhão"
        active={value === filters.TRUCK}
        icon={Truck}
        value="truck"
        onClick={selectFilter}
      />
      <SelectableButton
        label="todos"
        active={value === filters.ALL}
        value="all"
        onClick={selectFilter}
      />
    </div>
  )
}
