import { LucideIcon } from "lucide-react";
type Color = 'orange' | 'blue' | 'green' | 'gray'
interface Props {
  icon: LucideIcon
  feature: string
  description: string
  color: Color
}
export default function FeatureCard({ icon: Icon, feature, description, color = 'gray' }: Props) {
  const bgColorMap: Record<Color, string> = {
    orange: 'bg-orange-500/20',
    blue: 'bg-blue-500/20',
    green: 'bg-green-500/20',
    gray: 'bg-gray-500/20'
  }
  const textColorMap = {
    orange: 'text-orange-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    gray: 'text-gray-400'
  }
  return (
    <div className="flex gap-4 w-fit">
      <div className={`w-12 h-12 rounded-xl ${bgColorMap[color]} flex items-center justify-center`}>
        <Icon className={`size-6 ${textColorMap[color]}`}/>
      </div>
      <div className="flex flex-col">
        <p className="text-white font-semibold">{feature}</p>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  )
}