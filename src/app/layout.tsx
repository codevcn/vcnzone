import type { Metadata } from "next"
import "@/styles/globals.scss"

export const metadata: Metadata = {
  title: "CodeVCN",
  description: "Personal Blog by CodeVCN",
  generator: "v0.dev",
}

type TRootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: TRootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
