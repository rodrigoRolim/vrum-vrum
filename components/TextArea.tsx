type Props = {
  label: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
}
export default function TextArea({ label, placeholder, rows = 3, cols = 2 }: Props) {
  return (
    <label className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</span>}
      <textarea 
        className="flex min-h-15 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      ></textarea>
    </label>
  )
}