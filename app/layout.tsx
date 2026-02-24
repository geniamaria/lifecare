import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "LifeCare",
  description: "Pela a Saúde e Bem-Estar em Moçambique",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  )
}