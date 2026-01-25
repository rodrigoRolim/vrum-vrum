import React, { useLayoutEffect, useState } from "react";

type Direction = 'top' | 'bottom';

export default function useFloatingDirection(
  triggerRef: React.RefObject<HTMLElement | null>,
  floatingRef: React.RefObject<HTMLElement | null>,
  gap: number,
  open: boolean
): Direction {
  const [direction, setDirection] = useState<Direction>('bottom')

  useLayoutEffect(() => {
    if (!open || !triggerRef.current || !floatingRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const floatingRect = floatingRef.current.getBoundingClientRect()
    const viewPortHeight = window.innerHeight
    
    const spaceBelow = viewPortHeight - triggerRect.bottom
    const spaceAbove = triggerRect.bottom

    setDirection(
      spaceBelow - gap >= floatingRect.height || spaceBelow - gap >= spaceAbove
        ? "bottom"
        : "top"
    )
  }, [open])

  return direction
}
