interface Props {
  currentStep: number;
  steps?: number;
}

export default function Stepper({ currentStep, steps = 2 }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {steps > 1 && Array.from(Array(steps - 1), (_, index) => index + 1).map(step => (
        <div key={step} className="flex items-center gap-2">
          <div className={[
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
            currentStep >= step 
              ? "bg-orange-500 text-white"
              : "bg-slate-200 text-slate-500"
          ].join(" ")}>{step}</div>
          <div className={[
            "w-12 h-1 rounded",
            currentStep > step 
              ? "bg-orange-500"
              : "bg-slate-200"
          ].join(" ")}></div>
        </div>
      ))}
      <div className="flex items-center gap-2">
        <div className={[
          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
          currentStep === steps
            ? "bg-orange-500 text-white"
            : "bg-slate-200 text-slate-500"
        ].join(" ")}>{steps}</div>
      </div>
    </div>
  )
}