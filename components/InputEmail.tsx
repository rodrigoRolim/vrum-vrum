import { LucideIcon } from "lucide-react";
import React from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  icon: LucideIcon;
  placeholder?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputEmail({ label, icon: Icon, placeholder = "", error, ...props }: Props) {
  return (
    <label className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>}
        <input
          {...props}
          type="email" 
          className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-13 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-slate-500/20"
          placeholder={placeholder}
        />
        {error && (
          <p className="text-sm text-red-500 absolute">{error.message}</p>
        )}
      </div>
    </label>
  )
}