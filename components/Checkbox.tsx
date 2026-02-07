import React from "react";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label className="flex gap-2">
      <input {...props} type="checkbox" className="h-5 w-5 accent-orange-500"/>
      {label && <span className="text-gray-700 font-medium text-sm">{label}</span>}
    </label>
  )
}