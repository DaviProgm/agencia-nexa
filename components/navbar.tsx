"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { DiagnosticForm } from "@/components/diagnostic-form"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/nexa.png" alt="NEXA" className="flex h-35 w-35" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setFormOpen(true)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
          >
            Falar com especialista
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setFormOpen(true)
                setMobileOpen(false)
              }}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground text-center transition-all hover:brightness-110 w-full"
            >
              Falar com especialista
            </button>
          </div>
        </div>
      )}

      <DiagnosticForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </nav>
  )
}
