import { LucideIcon } from "lucide-react"

interface Props {
  icon: LucideIcon;
  value: number;
  placeholder: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputNumber({ icon: Icon, value, placeholder, label, onChange }: Props) {
  return (
    <label className="relative flex flex-col gap-2">
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>}
        <input 
          type="number"
          className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-14 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-slate-500/20"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </label>
  )
}
