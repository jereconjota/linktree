import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white h-screen'>{children}</body>
    </html>
  )
}
