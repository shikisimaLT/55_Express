import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '55 Express 五五 — Jasa Pengiriman Barang Internasional Terpercaya',
  description:
    '55 Express (五五) adalah jasa pengiriman barang internasional terpercaya dari Indonesia ke 20+ negara. Layanan reguler dengan garansi pengembalian uang — bea cukai kami yang urus.',
  keywords:
    'jasa pengiriman internasional, ekspedisi internasional, kirim barang ke luar negeri, pengiriman ke Malaysia, Singapura, Jepang, Australia, Amerika, Eropa, 55 express, 五五',
  authors: [{ name: '55 Express' }],
  openGraph: {
    title: '55 Express 五五 — Jasa Pengiriman Barang Internasional Terpercaya',
    description:
      'Solusi pengiriman barang internasional dari Indonesia ke 20+ negara. Layanan reguler — aman, transparan, garansi pengembalian uang, bea cukai kami urus.',
    type: 'website',
    locale: 'id_ID',
    siteName: '55 Express',
  },
  twitter: {
    card: 'summary_large_image',
    title: '55 Express 五五 — Jasa Pengiriman Barang Internasional Terpercaya',
    description: 'Kirim barang ke luar negeri dari Indonesia ke 20+ negara. Cepat, aman, harga transparan, garansi pengembalian uang.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
