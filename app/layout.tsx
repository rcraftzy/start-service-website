import ScrollObserver from '@/styles/utils/scroll-observer'
import '../styles/globals.css'

export const metadata = {
  title: 'Start Service',
  description: 'Website generate with next',
  icons: {
    icon: "/assets/logo.png"
  } 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <ScrollObserver>
          {children}
        </ScrollObserver>
      </body>
    </html>
  )
}
