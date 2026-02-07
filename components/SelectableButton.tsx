import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  icon?: LucideIcon;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit'
  active: boolean;
  value: string;
}

export default function SelectableButton({ 
  label,
  icon: Icon,
  value,
  onClick,
  type = 'button',
  active = false
}: Props) {
  return (
    <button className={[`
      flex gap-2 w-fit h-fit whitespace-nowrap
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 
      py-2 px-4 rounded-lg text-sm font-medium border border-[#4b5563] 
      transition-all duration-200 ease-in-out cursor-pointer active:bg-[#111827] 
      active:text-white`,
      active 
        ? "bg-[#111827] text-white"
        : "bg-white"
    ].join(" ")}
      aria-pressed={active}
      type={type}
      data-value={value}
      onClick={onClick}
    >
      {Icon && <Icon className={[
        "size-5",
        active
          ? "text-white"
          : "text-[#111827]"
        ].join(" ")}/>}
      {label}
    </button>
  )
}
