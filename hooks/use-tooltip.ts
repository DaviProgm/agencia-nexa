"use client"

import { useState, useCallback, useRef, useEffect } from "react"

interface TooltipPosition {
  x: number
  y: number
}

export function useTooltip(offset = 10) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<TooltipPosition>({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - offset,
      })
    }
    setIsVisible(true)
  }, [offset])

  const hideTooltip = useCallback(() => {
    setIsVisible(false)
  }, [])

  const updatePosition = useCallback(() => {
    if (triggerRef.current && isVisible) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - offset,
      })
    }
  }, [isVisible, offset])

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("scroll", updatePosition, true)
      window.addEventListener("resize", updatePosition)
      return () => {
        window.removeEventListener("scroll", updatePosition, true)
        window.removeEventListener("resize", updatePosition)
      }
    }
  }, [isVisible, updatePosition])

  return {
    isVisible,
    position,
    triggerRef,
    tooltipRef,
    showTooltip,
    hideTooltip,
  }
}
