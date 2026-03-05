"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  children: React.ReactNode
  expandedContent?: React.ReactNode
  className?: string
  defaultExpanded?: boolean
}

export function InteractiveCard({ children, expandedContent, className, defaultExpanded = false }: InteractiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isExpanded])

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5", className)}>
      <div onClick={() => expandedContent && setIsExpanded(!isExpanded)}>
        {children}
      </div>
      
      {expandedContent && (
        <>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ height: `${height}px` }}
          >
            <div ref={contentRef} className="border-t border-border bg-secondary/20 px-6 py-4">
              {expandedContent}
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-4 right-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {isExpanded ? "Menos" : "Saiba mais"}
            <ChevronDown size={14} className={cn("transition-transform", isExpanded && "rotate-180")} />
          </button>
        </>
      )}
    </div>
  )
}
