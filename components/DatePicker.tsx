'use client';

import { useClickoutside } from "@/hooks/useClickOutside";
import useFloatingDirection from "@/hooks/useFloatingDirection";
import { buildCalendar, ptbrMonths, ptbrWeekdays } from "@/lib/calendar-utils";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { MouseEvent, useMemo, useRef, useState } from "react";

interface CalendarValue {
  day: number;
  month: number;
  year: number;
}
const now = new Date()
const TODAY = now.getDay()
const CURRENT_MONTH = now.getMonth()
const CURRENT_YEAR = now.getFullYear()
export default function DatePicker() {
  const [day, setDay] = useState(TODAY)
  const [month, setMonth] = useState(CURRENT_MONTH)
  const [year, setYear] = useState(CURRENT_YEAR)
  const [inputDate, setInputDate] = useState('')

  const [open, setOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  useClickoutside(pickerRef, () => setOpen(false))

  const triggerRef = useRef<HTMLInputElement>(null)
  const direction = useFloatingDirection(
    triggerRef,
    pickerRef,
    16,
    open
  )
  const calendar = useMemo(() => {
    return buildCalendar(month, year)
  }, [month, year])
  
  function prevMonth(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setMonth(month => {
      if (month === 0) {
        setYear(year => year - 1)
        return 11
      }
      return month - 1
    })
  }
  function nextMonth(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setMonth(month => {
      if (month === 11) {
        setYear(year => year + 1)
        return 0
      }

      return month + 1
    })
  }

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let onlyDigitsInput = e.currentTarget.value.replace(/\D/g, '')
    if (onlyDigitsInput.length > 8) onlyDigitsInput = onlyDigitsInput.slice(0, 8)
    
    // mask: mm/dd/yyyy
    if (onlyDigitsInput.length > 4)
      onlyDigitsInput = onlyDigitsInput.replace(/^(\d{2})(\d{2})(\d+)/, "$1/$2/$3");
    else if (onlyDigitsInput.length > 2)
      onlyDigitsInput = onlyDigitsInput.replace(/^(\d{2})(\d+)/, "$1/$2");

    setInputDate(onlyDigitsInput)

    if (onlyDigitsInput.length === 10) {
      const [day, month, year] = onlyDigitsInput.split('/').map(Number)
      selectDate({ day, month, year })
    }
  }

  function selectDate({ day, month, year }: CalendarValue) {
    setDay(day)
    setMonth(month)
    setYear(year)

    const fulldate = `${day.toString().padStart(2, "0")}/${(month + 1).toString().padStart(2, "0")}/${year}`
    setInputDate(fulldate)
  }

  return (
    <label className="relative flex flex-col">
      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
      <input
        ref={triggerRef}
        type="text" 
        placeholder="dd/mm/yyy" 
        className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-14 rounded-xl border-slate-200 focus:border-slate-500 focus:ring-slate-500/20"
        value={inputDate}
        onInput={handleDateInput}
        onMouseDown={() => setOpen(open => !open)}
      />
      { open && 
        <div
          ref={pickerRef}
          className={[
            "absolute w-full max-w-xl flex flex-col gap-3 p-4 space-y-3 rounded-2xl bg-white shadow-sm border border-slate-200",
            direction === "bottom"
              ? "top-full translate-y-3"
              : "bottom-full -translate-y-3",
          ].join(" ")}
        >
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="h-8 w-8 rounded-lg hover:bg-slate-100 flex items-center justify-center"
            aria-label="Mês anterior"
            onClick={prevMonth}
          >
            <ChevronLeft className="size-5"/>
          </button>
          <div className="text-sm font-semibold text-slate-700">
            {ptbrMonths[month]} {year}
          </div>
          <button
            type="button"
            className="h-8 w-8 rounded-lg hover:bg-slate-100 flex items-center justify-center"
            aria-label="Próximo mês"
            onClick={nextMonth}
          >
            <ChevronRight className="size-5"/>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 justify-items-center">
          {ptbrWeekdays.map(weekday => 
            <span 
              className="w-10 text-center text-xs font-medium text-slate-500" 
              key={weekday}
            >
              {weekday}
            </span>)
          }
        </div>
        <div className="grid grid-cols-7 gap-1 justify-items-center">
          {calendar.map((cell, i) => {
            const isDisabled = !cell.isCurrentMonth
          
            return (
              <button 
                key={i}
                type="button" 
                className={[
                  "flex items-center justify-center w-10 h-10 rounded-xl text-sm font-medium transition-all",
                  isDisabled
                    ? "text-slate-300 cursor-default"
                    : "text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400/30 cursor-pointer",
                  Number(cell.day) === day && CURRENT_MONTH === month ? "bg-slate-600 text-white hover:bg-slate-500" : ""
                ].join(" ")}
                disabled={isDisabled}
                onClick={() => selectDate({ day: Number(cell.day), month, year })}
              >
                {cell.day ?? ''}
              </button>
            )
          })}
        </div>
      </div>}
    </label>
  )
}