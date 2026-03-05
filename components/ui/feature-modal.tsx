"use client"

import { X } from "lucide-react"
import { useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface FeatureModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function FeatureModal({ isOpen, onClose, title, icon, children, className }: FeatureModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-2xl animate-scale-up",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {icon}
              </div>
            )}
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
