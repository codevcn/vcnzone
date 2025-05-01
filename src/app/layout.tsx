import type { Metadata } from "next"
import "@/styles/globals.scss"
import { Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: "VCN Zone",
  description: "Personal Blog by CodeVCN",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
}

const roboto = Roboto({
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

type TRootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: TRootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-regular-black-cl`}>{children}</body>
    </html>
  )
}
