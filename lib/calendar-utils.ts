interface CalendarCall {
  day: string | null;
  isCurrentMonth: boolean
}

const engWeekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
const ptbrWeekdays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]
const ptbrMonths = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];


function zellerWeekday(day: number, month: number, year: number): number {
  // January and february are treated as months 13 and 14 of previous year
  if (month < 3) {
    month += 12
    year -= 1
  }

  const q = day
  const m = month
  const K = year % 100
  const J = Math.floor(year / 100)

  const h = (
    q + Math.floor((13 * (m + 1)) / 5) + 
    K + Math.floor(K / 4) + 
    Math.floor(J / 4) + 5 * J 
  ) % 7

  return (h + 6) % 7
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function daysInMonth(month: number, year: number): number {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
    month
  ]
}

function buildCalendar(month: number, year: number): CalendarCall[] {
  const GRID_SIZE = 42
  const firstWeekday = zellerWeekday(1, month, year) // 0 = sunday
  const totalDays = daysInMonth(month, year)
  const totalDayFromPrevMonth = daysInMonth(month === 0 ? 11 : month - 1, month === 0 ? year - 1 : year)

  const cells: CalendarCall[] = []

  // Empty cells before day 1
  for (let i = 0, prevMonthDays = totalDayFromPrevMonth; i < firstWeekday; i++, prevMonthDays--) {
    cells.push({ day: prevMonthDays.toString(), isCurrentMonth: false })
  }

  // Days of month
  for (let day = 1; day <= totalDays; day++) {
    cells.push({ day: day.toString().padStart(2, '0'), isCurrentMonth: true })
  }

  // fill remaing cells
  const initialTotalRemainingDays = totalDays - cells.length // ex: 11
  while (cells.length < GRID_SIZE) {
    const currentTotalRemainingDays = totalDays - cells.length
    const day = initialTotalRemainingDays - currentTotalRemainingDays + 1
    cells.push({ day: day.toString().padStart(2, "0"), isCurrentMonth: false });
  }

  return cells
}

export {
  engWeekdays,
  ptbrWeekdays,
  ptbrMonths,
  buildCalendar,
  zellerWeekday,
}