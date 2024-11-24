'use client';

import { MouseEvent, ReactNode, useRef, useState } from "react";

interface TooltipProps {
  children?: ReactNode;
  className?: string;
  tooltip?: ReactNode
}

export function Tooltip({ children, className, tooltip }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const mouseOver = (e: MouseEvent) => {
    setShowTooltip(true);
  }

  const mouseOut = (e: MouseEvent) => {
    setShowTooltip(false);
  }

  const mouseMove = (e: MouseEvent) => {
    if (showTooltip && tooltipRef.current) {     
      tooltipRef.current.style.left = `${e.clientX + 15}px`;
      tooltipRef.current.style.top = `${e.clientY + 15}px`;
    }
  }

  return (
    <span onMouseMove={mouseMove} onMouseOut={mouseOut} onMouseOver={mouseOver}>
      {showTooltip &&
        <div ref={tooltipRef} hidden={!showTooltip} className={`fixed pointer-events-none p-1 text-slate-200 rounded bg-black ${className}`}>
          {tooltip}
        </div>
      }
      {children}
    </span>
  )
}