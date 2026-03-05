import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nexa | Engenharia de Crescimento Empresarial',
  description: 'Transformamos empresas em maquinas previsiveis de faturamento. Estruturamos aquisicao de clientes, automacao de marketing e estrategias de retencao.',
  generator: 'Davi-monteiro',
  icons: {
    icon: '/nexafavicon.jpg',
    shortcut: '/nexafavicon.jpg',
    apple: '/nexafavicon.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF6A00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
