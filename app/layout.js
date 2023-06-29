import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laboratorio Clínico MED+lab',
  description: 'Laboratorio Clínico MED+lab, biometría hemática, bioquímica, química sanguínea, pruebas hormonales, marcadores tumorales, elemental y microscópico de orina, coproparsitario, Conocoto, Pichincha, Ecuador',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
