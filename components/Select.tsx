'use client';

import { useClickoutside } from "@/hooks/useClickOutside";
import useFloatingDirection from "@/hooks/useFloatingDirection";
import { ChevronDown } from "lucide-react";
import { MouseEvent, useRef, useState } from "react";

export type Option = { id: string; text: string }

export const DEFAULT_SELECTED: Option = { id: 'default', text: 'selecione' } as const

interface Props {
  label: string;
  options: Option[];
  selected: Option;
}
interface Handlers {
  onSelect: (selected: Option) => void
}
type SelectParams = Props & Handlers
export default function Select({ label, options, selected = DEFAULT_SELECTED }: SelectParams) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  function handleClickOnOption(e: MouseEvent<HTMLButtonElement>) {
    
  }
  function toggleCombobox() {
    setOpen(open => !open)
  }
  
  useClickoutside(containerRef, () => setOpen(false))
  
  const direction = useFloatingDirection(
    triggerRef,
    listRef,
    16,
    open
  )
  return (
    <div ref={containerRef} className="relative flex flex-col gap-2">
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <button
        ref={triggerRef}
        className="flex items-center justify-between w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-6 h-13 rounded-xl border-slate-200 focus:border-gray-500 focus:ring-slate-500/20"
        role="combobox"
        aria-controls="options"
        aria-expanded="false"
        aria-autocomplete="none"
        dir="ltr"
        type="button"
        onClick={toggleCombobox}
      >
        <span className={`text-muted ${selected.id === "default" ? "text-gray-600/70" : "text-gray-900"}`}>{selected.text}</span>
        <ChevronDown className="size-4 text-slate-400"/>
      </button>
      {open && <ul
        ref={listRef}
        id="options" 
        dir="ltr"
        role="listbox"
        className={[
          "px-2 py-2 flex flex-col absolute bg-white w-full border border-slate-200 rounded-xl shadow-sm max-h-80 overflow-y-auto",
          direction === "bottom"
            ? "top-full translate-y-3"
            : "bottom-full -translate-y-3",
        ].join(" ")}
      >
        {options.map(({ id, text }) => (
          <li
            key={id}
            className="text-sm hover:bg-slate-200/30 p-1.5 rounded-md" 
            role="listitem"
          >
            <button 
              className="text-sm hover:bg-slate-200/30 p-1.5 rounded-md"
              onClick={handleClickOnOption}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  )
}