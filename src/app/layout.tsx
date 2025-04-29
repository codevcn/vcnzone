import type { Metadata } from "next"
import "@/styles/globals.scss"

export const metadata: Metadata = {
  title: "CodeVCN",
  description: "Personal Blog by CodeVCN",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
