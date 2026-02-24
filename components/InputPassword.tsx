"use client";

import { Eye, EyeOff, Lock, LucideIcon } from "lucide-react";
import { useState } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputPassword({ label, placeholder = "", error, ...props }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = isPasswordVisible ? "text" : "password";
  const buttonPasswordIcon = isPasswordVisible ? <EyeOff className="size-5"/> : <Eye className="size-5"/>;
  // const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
  function togglePasswordVisibility(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  }
  return (
    <label className="flex flex-col">
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <div className="relative mt-2 mb-1">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
        <input
          {...props}
          type={inputType} 
          className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-13 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-slate-500/20"
          placeholder={placeholder}
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 text-sm font-medium" onClick={togglePasswordVisibility}>
          {buttonPasswordIcon}
        </button>
      </div>
      <div className="flex h-4">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </label>
  )
}
