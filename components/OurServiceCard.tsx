import { Bus, LucideIcon } from "lucide-react";

interface Props {
  service: string;
  description: string;
  icon: LucideIcon;
  color: 'orange' | 'blue' | 'green' | 'purple' | 'red' | 'cyan'
}

export default function OurServiceCard({ service, description, icon: Icon, color = 'orange' }: Props) {
  const colorsIconMap = {
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    green: "bg-green-50 text-green-600 group-hover:bg-green-100",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
    red: "bg-red-50 text-red-600 group-hover:bg-red-100",
    cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
  }
  return (
    <div className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
      <div className={`w-14 h-14 rounded-xl ${colorsIconMap[color]} flex items-center justify-center mb-5 transition-colors`}>
        <Icon className="size-7" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{service}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}