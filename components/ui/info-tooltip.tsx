"use client"

import { Info } from "lucide-react"
import { useTooltip } from "@/hooks/use-tooltip"
import { cn } from "@/lib/utils"

interface InfoTooltipProps {
  content: string
  title?: string
  side?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function InfoTooltip({ content, title, side = "top", className }: InfoTooltipProps) {
  const { isVisible, triggerRef, tooltipRef } = useTooltip()

  return (
    <>
      <button
        ref={triggerRef}
        onMouseEnter={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        className={cn("inline-flex items-center justify-center rounded-full p-1 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all", className)}
        aria-label="Mais informações"
      >
        <Info size={14} />
      </button>

      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            "fixed z-50 max-w-xs rounded-xl border border-border bg-popover px-4 py-3 text-xs shadow-lg animate-slide-up",
            side === "bottom" && "translate-y-2",
            side === "left" && "-translate-x-full",
            side === "right" && "translate-x-full"
          )}
          style={{
            left: `${tooltipRef.current?.getBoundingClientRect().x || 0}px`,
            top: `${tooltipRef.current?.getBoundingClientRect().y || 0}px`,
          }}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          {title && <p className="font-semibold text-foreground mb-1">{title}</p>}
          <p className="text-muted-foreground leading-relaxed">{content}</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 h-2 w-2 bg-popover border-r border-t border-border" />
        </div>
      )}
    </>
  )
}
