export default function Stepper() {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-orange-500 text-white">1</div>
        <div className="w-12 h-1 rounded bg-slate-200"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-slate-200 text-slate-500">2</div>
        <div className="w-12 h-1 rounded bg-slate-200"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-slate-200 text-slate-500">3</div>
      </div>
    </div>
  )
}