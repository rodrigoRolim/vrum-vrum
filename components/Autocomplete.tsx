"use client";

import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type BaseOption = { id: string; text: string };

export type ButtonAction = {
  action: (payload: any) => void;
  icon: LucideIcon;
  text?: string;
}
type AutocompleteProps<T> = {
  label?: string;
  query: string;
  selected: string;
  options: T[];
  placeholder?: string;
  minChars?: number;
  icon: LucideIcon;
  color?: 'orange' | 'blue' | 'green' | 'gray';
  button?: ButtonAction
  onQuery: (query: string) => void;
  onSelectOption: (option: T) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const inputColorsMap = {
  orange: 'focus:border-orange-500 focus:ring-orange-500/20',
  green: 'focus:border-green-500 focus:ring-green-500/20',
  blue: 'focus:border-blue-500 focus:ring-blue-500/20',
  gray: 'focus:border-gray-500 focus:ring-slate-500/20'
} as const
const iconColorsMap = {
  orange: 'text-orange-400',
  green: 'text-green-400',
  blue: 'text-blue-400',
  gray: 'text-slate-400'
} as const

export function Autocomplete<T extends BaseOption>({
  query,
  selected = "",
  options = [],
  label,
  placeholder = "Digite a cidade",
  minChars = 3,
  icon: Icon,
  color = 'gray',
  button: Button,
  onQuery,
  onSelectOption,
  ...props
}: AutocompleteProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectWritenOption(query: string) {
    onQuery(query);

    if (query.length === 0) {
      onSelectOption({ id: '', text: ''} as T);
      return;
    }

    const match = options.find((option) => option.text === query);
    if (match) {
      onSelectOption(match);
      return
    }
    
    onSelectOption({ id: '', text: ''} as T);
  }

  function selectOption(option: T) {
    onQuery(option.text);
    onSelectOption(option);
    setIsOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || options.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, options.length - 1)
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        break;

      case "Enter":
        e.preventDefault();
        if (options[highlightedIndex]) {
          selectOption(options[highlightedIndex]);
        }
        break;

      case "Escape":
        setIsOpen(false);
        break;
    }
  }

  return (
    <label className="flex flex-col gap-2">
      {label && 
        <span className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </span>
      }
      <div ref={containerRef} className="relative w-full">
        {Icon && <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconColorsMap[color]}`}/>}
        <input
          {...props}
          type="text"
          value={query}
          placeholder={placeholder}
          className={`flex w-full border bg-transparent pl-12 pr-18 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-14 rounded-xl border-slate-200 ${inputColorsMap[color]} placeholder:text-sm`}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="city-listbox"
          onChange={(e) => {
            const value = e.target.value;
            selectWritenOption(value);
            setHighlightedIndex(0);
            setIsOpen(value.length >= minChars);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.length >= minChars) {
              setIsOpen(true);
            }
          }}
        />
        {Button && 
          <button
            type="button"
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 items-center text-orange-600 hover:text-orange-800 text-xs font-medium"
          >
            <Button.icon className="size-5"/>
            {Button.text}
          </button>}
        {isOpen && options.length > 0 && (
          <ul
            id="city-listbox"
            role="listbox"
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow"
          >
            {options.map((option, index) => (
              <li
                key={option.id}
                role="option"
                aria-selected={highlightedIndex === index}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  highlightedIndex === index
                    ? "bg-orange-100 text-orange-900"
                    : "hover:bg-gray-100"
                }`}
                onMouseDown={() => selectOption(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        )}

        {isOpen && query.length < minChars && (
          <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 shadow">
            Type at least {minChars} characters
          </div>
        )}
      </div>
    </label>
  );
}
