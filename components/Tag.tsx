import type { ElementType } from "react";

interface Props {
  text: string;
  icon: ElementType
}

export default function Tag({ text, icon: Icon }: Props) {
  return (
    <p className="text-xs text-blue-950 bg-blue-50 rounded-md flex gap-2 py-1 px-2">
      <Icon className="size-4"/>
      {text}
    </p>
  )
}