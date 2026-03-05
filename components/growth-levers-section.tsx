"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Layers, Target, Paintbrush, MessageSquare, Mail,
  Brain, TrendingUp, Heart, Coins, Crown, Snowflake,
  Link, ShoppingBag, Zap, BarChart3, Users, DollarSign
} from "lucide-react"
import { FeatureModal } from "@/components/ui/feature-modal"

const levers = [
  { 
    icon: Layers, 
    title: "Landing Pages de Alta Conversão", 
    desc: "Páginas otimizadas para transformar visitantes em leads qualificados.",
    details: "Criamos landing pages focadas em conversão com copy persuasiva, design otimizado e testes A/B contínuos.",
    impact: "Aumento de 3-10x na taxa de conversão comparado a páginas genéricas.",
    features: ["Copywriting persuasivo", "Design focado em conversão", "Testes A/B", "Otimização mobile-first", "Carregamento rápido"],
  },
  { 
    icon: Target, 
    title: "Gestão de Tráfego Pago", 
    desc: "Google Ads, TikTok Ads, Facebook Ads com ROI maximizado.",
    details: "Gerenciamos campanhas em múltiplas plataformas com otimização diária de orçamento e segmentação avançada.",
    impact: "Redução de até 40% no custo por aquisição com aumento no volume de leads.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Remarketing"],
  },
  { 
    icon: Paintbrush, 
    title: "Criativos de Alta Performance", 
    desc: "Anúncios que capturam atenção e geram cliques qualificados.",
    details: "Produzimos criativos testados e validados que se destacam no feed e geram engajamento qualificado.",
    impact: "CTR 2-5x maior que a média do mercado.",
    features: ["Vídeos UGC", "Imagens estáticas", "Carrosséis", "Hooks virais", "Variações infinitas"],
  },
  { 
    icon: MessageSquare, 
    title: "Automação de Atendimento", 
    desc: "Chatbots e fluxos inteligentes para converter 24/7.",
    details: "Implementamos chatbots que qualificam leads, respondem dúvidas e agendam reuniões automaticamente.",
    impact: "Atendimento imediato para 100% dos leads, mesmo fora do horário comercial.",
    features: ["Chatbots com IA", "Qualificação automática", "Agendamento", "Integração com CRM", "WhatsApp Business"],
  },
  { 
    icon: Mail, 
    title: "Automação de Marketing", 
    desc: "Sequências de email, SMS e WhatsApp automatizadas.",
    details: "Criamos fluxos de nutrição que entregam a mensagem certa no momento certo para cada lead.",
    impact: "Aumento de 20-40% na taxa de conversão de leads.",
    features: ["Email marketing", "SMS marketing", "WhatsApp automatizado", "Segmentação", "Trigger-based"],
  },
  { 
    icon: Brain, 
    title: "Recuperação com IA", 
    desc: "Inteligência artificial para reativar clientes inativos.",
    details: "Usamos IA para identificar padrões de churn e criar campanhas personalizadas de reativação.",
    impact: "Reativação de 15-25% de clientes considerados perdidos.",
    features: ["Machine Learning", "Predição de churn", "Campanhas personalizadas", "Timing otimizado", "Múltiplos canais"],
  },
  { 
    icon: TrendingUp, 
    title: "Upsell e Ticket Médio", 
    desc: "Estratégias para aumentar o valor de cada transação.",
    details: "Implementamos ofertas complementares e upgrades que aumentam o valor médio das compras.",
    impact: "Aumento de 20-50% no ticket médio.",
    features: ["Order bumps", "Upsells no checkout", "Downsells", "Bundles", "Ofertas por tempo limitado"],
  },
  { 
    icon: Heart, 
    title: "Programas de Fidelidade", 
    desc: "Sistemas de pontos e recompensas para retenção.",
    details: "Criamos programas que recompensam compras recorrentes e engajamento com a marca.",
    impact: "Clientes fidelizados compram 2-3x mais frequentemente.",
    features: ["Sistema de pontos", "Recompensas tiered", "Benefícios exclusivos", "Gamificação", "Aniversários"],
  },
  { 
    icon: Coins, 
    title: "Cashback Inteligente", 
    desc: "Cashback estratégico que gera recompra automática.",
    details: "Programas de cashback que incentivam a próxima compra com validade estratégica.",
    impact: "Aumento de 30-60% na taxa de recompra.",
    features: ["Cashback com validade", "Progressivo por valor", "Acumulação", "Resgate facilitado", "Integração total"],
  },
  { 
    icon: Crown, 
    title: "Clube VIP e Assinatura", 
    desc: "Modelos de recorrência com valor percebido alto.",
    details: "Criamos clubes de assinatura e programas VIP que geram receita recorrente previsível.",
    impact: "MRR previsível com churn reduzido.",
    features: ["Assinaturas mensais", "Benefícios exclusivos", "Comunidade VIP", "Conteúdo premium", "Descontos progressivos"],
  },
  { 
    icon: Snowflake, 
    title: "Sistema Frio de Aquisição", 
    desc: "Prospecção ativa e outbound para novos mercados.",
    details: "Estratégias de outbound marketing para alcançar prospects que ainda não conhecem sua marca.",
    impact: "Expansão para novos mercados e segmentos de cliente.",
    features: ["Cold email", "LinkedIn outreach", "SDR automatizado", "Enriquecimento de dados", "Sequências personalizadas"],
  },
  { 
    icon: Link, 
    title: "Integração de Sistemas", 
    desc: "Conectamos CRM, ERP, e-commerce e ferramentas.",
    details: "Integramos todas as ferramentas do seu stack para criar um fluxo único de dados.",
    impact: "Eliminação de trabalho manual e dados inconsistentes.",
    features: ["APIs customizadas", "Webhooks", "Zapier/Make", "CRM", "ERP"],
  },
  { 
    icon: ShoppingBag, 
    title: "Marketing Pós-Compra", 
    desc: "Automações que transformam compradores em fãs.",
    details: "Sequências de onboarding, educação e engajamento que criam experiência memorável.",
    impact: "Aumento de NPS e redução de chargeback.",
    features: ["Onboarding automatizado", "Educação do produto", "Solicitação de reviews", "Suporte proativo", "Comunidade"],
  },
]

export function GrowthLeversSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedLever, setSelectedLever] = useState<number | null>(null)

  return (
    <section id="solucoes" ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary">Nossas soluções</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nossas alavancas{" "}
            <span className="text-primary">de crescimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada alavanca é uma peça do sistema completo que construímos para escalar seu faturamento de forma previsível.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Clique em cada card para ver detalhes completos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {levers.map((lever, i) => {
            const Icon = lever.icon
            return (
              <div
                key={i}
                onClick={() => setSelectedLever(i)}
                className={`perspective-1000 transition-all duration-500 cursor-pointer group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="group preserve-3d relative rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:rotate-x-1 hover:rotate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                      <Icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{lever.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{lever.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selectedLever !== null && (
        <FeatureModal
          isOpen={true}
          onClose={() => setSelectedLever(null)}
          title={levers[selectedLever].title}
          icon={(() => {
            const Icon = levers[selectedLever].icon
            return Icon ? <Icon size={24} className="text-primary" /> : null
          })()}
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-secondary/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Como Funciona</h4>
                </div>
                <p className="text-sm text-muted-foreground">{levers[selectedLever].details}</p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Impacto Esperado</h4>
                </div>
                <p className="text-sm text-muted-foreground">{levers[selectedLever].impact}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={16} className="text-primary" />
                <h4 className="text-sm font-semibold text-foreground">Funcionalidades Incluídas</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {levers[selectedLever].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-primary font-medium">
                💡 Esta alavanca pode ser implementada isoladamente ou como parte do ecossistema completo de crescimento.
              </p>
            </div>
          </div>
        </FeatureModal>
      )}
    </section>
  )
}
