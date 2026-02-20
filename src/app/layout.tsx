import type { Metadata } from "next"
import { Roboto, Syne } from "next/font/google"
import '@/styles/globals.css'
import { ThemeProvider } from "@/providers/theme-provider"

const syne = Syne({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "KeySafe",
  description: "Ache seu restaurante preferido",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${syne.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class" // Diz-lhe para usar a classe ".dark" no <html>
          defaultTheme="system" // Usa o tema do sistema como padrão
          enableSystem // Permite que ele detete o tema do sistema
          disableTransitionOnChange // Desativa transições de cor ao mudar de tema
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
