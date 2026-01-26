"use client";

import { LucideIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  icon: LucideIcon;
  placeholder?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function InputPhone({ label, icon: Icon, placeholder = "", error, ...props }: Props) {
  const [value, setValue] = useState<string>("")
  function formatInputToPhone(e: FormEvent<HTMLInputElement>) {
    const input = e.currentTarget
    let onlyDigits = input.value.replace(/\D/g, "")
    
    if (onlyDigits.length > 10) onlyDigits = onlyDigits.slice(0, 10)
    
    if (onlyDigits.length > 7) {
      onlyDigits = onlyDigits.replace(/^(\d{2})(\d{5})(\d+)/g, "($1) $2-$3")
    } else if (onlyDigits.length > 2) {
      onlyDigits = onlyDigits.replace(/^(\d{2})/g, "($1) ")
    }
    setValue(onlyDigits)
  }
  return (
    <label className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>}
        <input
          {...props}
          type="tel" 
          className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-13 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-slate-500/20"
          placeholder={placeholder}
          maxLength={10}
          value={value}
          onInput={formatInputToPhone}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </label>
  )
}
