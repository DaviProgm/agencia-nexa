"use client"

import { useState } from "react"
import { X, Send, CheckCircle } from "lucide-react"

interface DiagnosticFormProps {
  isOpen: boolean
  onClose: () => void
}

export function DiagnosticForm({ isOpen, onClose }: DiagnosticFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    faturamento: "",
    desafio: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensagem = `*Novo Diagnóstico Estratégico - NEXA*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Empresa:* ${formData.empresa}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Faturamento:* ${formData.faturamento}%0A` +
      `*Principal Desafio:* ${formData.desafio}`

    const whatsappUrl = `https://wa.me/5585921530363?text=${mensagem}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-2xl animate-scale-up">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Diagnóstico Estratégico</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Preencha o formulário para receber uma análise personalizada
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
              Empresa *
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Nome da sua empresa"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="(85) 92153-0363"
              />
            </div>
          </div>

          <div>
            <label htmlFor="faturamento" className="block text-sm font-medium text-foreground mb-2">
              Faturamento mensal *
            </label>
            <select
              id="faturamento"
              name="faturamento"
              value={formData.faturamento}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="">Selecione...</option>
              <option value="Até R$ 50K">Até R$ 50K</option>
              <option value="R$ 50K - R$ 100K">R$ 50K - R$ 100K</option>
              <option value="R$ 100K - R$ 500K">R$ 100K - R$ 500K</option>
              <option value="R$ 500K - R$ 1M">R$ 500K - R$ 1M</option>
              <option value="Acima de R$ 1M">Acima de R$ 1M</option>
            </select>
          </div>

          <div>
            <label htmlFor="desafio" className="block text-sm font-medium text-foreground mb-2">
              Principal desafio *
            </label>
            <textarea
              id="desafio"
              name="desafio"
              value={formData.desafio}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Descreva seu maior desafio atual..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Enviar para WhatsApp
          </button>

          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
            <CheckCircle size={12} />
            Seus dados serão enviados diretamente para nosso WhatsApp
          </p>
        </form>
      </div>
    </div>
  )
}
