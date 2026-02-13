import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  icon: LucideIcon;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
}
export default function Button({ label, icon: Icon, onClick, type = 'button', variant = 'primary' }: Props) {
  const variantsMap = {
    primary: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange-500/25',
    secondary: 'from-slate-600 to-slate-800 hover:from-slate-600 hover:to-slate-700 shadow-slate-500/25'
  }
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 py-2 w-full md:w-auto h-14 px-8 rounded-xl bg-linear-to-r ${variantsMap[variant]} text-white font-semibold shadow-lg`}
      onClick={onClick}
    >
      {Icon && <Icon className="size-5 text-white"/>}
      {label}
    </button>
  )
}