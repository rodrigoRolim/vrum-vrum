import { FileBox, PillBottle, ShoppingBag, Utensils, Zap } from "lucide-react";
import SelectableButton from "../SelectableButton";

export type DeliveryType = 'all' | 'document' | 'ecommerce' | 'medicinal' | 'food' | 'fast'
interface Props {
  value: DeliveryType;
  onChange: (value: DeliveryType) => void
}
enum filters {
  ALL='all',
  DOCUMENT='document',
  ECOMMERCE='ecommerce',
  MEDICINAL='medicinal',
  FOOD='food',
  FAST='fast'
}

export default function DeliveryTypeFilters({ value, onChange }: Props) {
  function selectFilter(e: React.MouseEvent<HTMLButtonElement>) {
    onChange(e.currentTarget.dataset.value as DeliveryType)
  }

  return (
    <div className="flex md:flex-wrap py-2 px-1 overflow-x-auto flex-nowrap gap-3 w-full">
      <SelectableButton
        label="Documentos"
        active={value === filters.DOCUMENT}
        icon={FileBox}
        value="document"
        onClick={selectFilter}
      />
      <SelectableButton
        label="E-commerce"
        active={value === filters.ECOMMERCE}
        icon={ShoppingBag}
        value="ecommerce"
        onClick={selectFilter}
      />
      <SelectableButton
        label="Medicamentos"
        active={value === filters.MEDICINAL}
        icon={PillBottle}
        value="medicinal"
        onClick={selectFilter}
      />
      <SelectableButton
        label="Alimentos"
        active={value === filters.FOOD}
        icon={Utensils}
        value="food"
        onClick={selectFilter}
      />
      <SelectableButton
        label="Urgente"
        active={value === filters.FAST}
        icon={Zap}
        value="fast"
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