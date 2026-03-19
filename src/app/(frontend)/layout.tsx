import React from 'react'
import './styles.css'

// Metadatos para SEO y título de la página
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

// Layout principal para la parte pública del sitio
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        {/* Renderizado de las páginas hijas */}
        <main>{children}</main>
      </body>
    </html>
  )
}
