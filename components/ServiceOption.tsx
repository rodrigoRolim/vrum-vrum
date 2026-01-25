import { ArrowRight, Bus, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  service: string;
  description: string;
  icon: LucideIcon;
  color?: 'orange' | 'blue'
}
export default function ServiceOption({ service, description, icon: Icon, color = 'orange'}: Props) {
  const colorsContainerMap = {
    orange: "hover:border-orange-500 hover:bg-orange-50",
    blue: "hover:border-blue-500 hover:bg-blue-50"
  }
  const colorsIconMap = {
    orange: "text-orange-600",
    blue: "text-blue-600"
  }
  const colorsBgIcon = {
    orange: "bg-orange-100 group-hover:bg-orange-200",
    blue: "bg-blue-100 group-hover:bg-blue-200"
  }
  return (
    <Link href="#">
      <div className={`flex flex-col gap-4 group p-6 rounded-2xl border-2 border-slate-100 ${colorsContainerMap[color]} transition-all cursor-pointer`}>
        <div className={`w-14 h-14 rounded-xl ${colorsBgIcon[color]} flex items-center justify-center transition-colors`}>
          <Icon className={`size-7 ${colorsIconMap[color]}`} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{service}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div className={`flex items-center ${colorsIconMap[color]} font-medium text-sm`}>
          Solicitar orçamento
          <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform"/>
        </div>
      </div>
    </Link>
  )
}