import { MessageCircle } from "lucide-react"

const footerLinks = {
  empresa: [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
  ],
  solucoes: [
    { label: "Tráfego Pago", href: "#solucoes" },
    { label: "Automação", href: "#solucoes" },
    { label: "Retenção", href: "#solucoes" },
    { label: "Inteligência Artificial", href: "#solucoes" },
  ],
  contato: [
    { label: "WhatsApp", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/nexa.png" alt="NEXA" className="h-12 w-auto mb-4" />
            <p className="text-sm text-background/50 leading-relaxed mb-4">
              Engenharia de crescimento para empresas que querem escalar com previsibilidade.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/30"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-background mb-4">Empresa</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-background mb-4">Soluções</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-background mb-4">Contato</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            NEXA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
