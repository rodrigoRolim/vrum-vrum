import { LucideIcon } from "lucide-react";
import React, { MouseEvent } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  icon?: LucideIcon;
  placeholder?: string;
  error?: FieldError;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export default function InputTime({ label, placeholder, error, icon: Icon, className = "", ...props }: Props) {
  function formatInput(e: MouseEvent<HTMLInputElement>) {
    let value = e.currentTarget.value.replace(/\D/g, "")

    if (value.length >= 3) {
      value = value.slice(0, 2) + ":" + value.slice(2, 4)
    }

    e.currentTarget.value = value
  }
  return (
    <label className={["flex flex-col gap-2", className].join(" ")}>
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <div className="relative w-full">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>}
        <input
          {...props}
          type="text"
          className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-13 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-slate-500/20" 
          placeholder={placeholder}
          pattern="^([01][0-9]|2[0-3]):[0-5][0-9]$"
          minLength={5}
          onInput={formatInput}
        />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    </label>
  )
}