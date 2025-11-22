import type { Metadata } from 'next' 
import { Poppins } from 'next/font/google'
import './globals.css' 
import { ThemeProvider } from '@/lib/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Leonardo',
  description: 'SaaS application using Next JS, TypeScript, Tailwind, Shadcn, Neon, Prisma, ArcJet and Kinde.',
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute = 'class'
          defaultTheme = 'system'
          enableSystem
          disableTransitionOnChange
        >
          { children }
        </ThemeProvider>
      </body>
    </html>
  )
}