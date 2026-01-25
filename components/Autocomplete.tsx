"use client";

import { LucideIcon, MapIcon, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Option = { id: string; label: string; }
const icons: Record<string, LucideIcon> = {
  MapIcon,
  MapPin,
} as const
type AutocompleteProps = {
  options: Option[];
  value?: string;
  onChange?: (option: Option) => void;
  placeholder?: string;
  minChars?: number;
  icon: keyof typeof icons;
  color?: 'orange' | 'blue' | 'green' | 'gray'
};
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

export function Autocomplete({
  options,
  value = "",
  onChange,
  placeholder = "Digite a cidade",
  minChars = 3,
  icon,
  color = 'gray'
}: AutocompleteProps) {
  const Icon = icons[icon] || null

  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions =
    inputValue.length >= minChars
      ? options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

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

  function selectCity({ id, label }: Option) {
    setInputValue(label);
    onChange?.({ id, label });
    setIsOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || filteredOptions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1)
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        break;

      case "Enter":
        e.preventDefault();
        if (filteredOptions[highlightedIndex].label) {
          selectCity(filteredOptions[highlightedIndex]);
        }
        break;

      case "Escape":
        setIsOpen(false);
        break;
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      { Icon && <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 ${iconColorsMap[color]}`}/> }
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        className={`flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-14 rounded-xl border-slate-200 ${inputColorsMap[color]}`}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="city-listbox"
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          setHighlightedIndex(0);
          setIsOpen(value.length >= minChars);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (inputValue.length >= minChars) {
            setIsOpen(true);
          }
        }}
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul
          id="city-listbox"
          role="listbox"
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow"
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option.id}
              role="option"
              aria-selected={highlightedIndex === index}
              className={`cursor-pointer px-3 py-2 ${
                highlightedIndex === index
                  ? "bg-orange-100 text-orange-900"
                  : "hover:bg-gray-100"
              }`}
              onMouseDown={() => selectCity(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {isOpen && inputValue.length < minChars && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 shadow">
          Type at least {minChars} characters
        </div>
      )}
    </div>
  );
}
