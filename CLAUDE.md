# CLAUDE.md — Patokan Utama Proyek 55 Express

> File ini dibaca otomatis oleh Claude Code setiap sesi.
> Jangan hapus file ini. Update jika ada perubahan bisnis atau teknis.

---

## 🏢 Tentang Bisnis

**Nama Perusahaan:** 55 Express
**Bidang:** Ekspedisi & Pengiriman Barang Internasional
**Target Pengguna:** Pelanggan umum (B2C) — individu yang ingin mengirim barang ke luar negeri
**Area Layanan:** Internasional (pengiriman lintas negara)
**Bahasa Website:** Bahasa Indonesia

### Deskripsi Singkat
55 Express adalah layanan ekspedisi pengiriman barang internasional yang melayani pelanggan umum secara langsung. Website ini menjadi pintu utama bagi pelanggan untuk mengecek tarif pengiriman dan melakukan booking/order secara online.

---


## 🎯 Tujuan Website

Website 55 Express dirancang untuk:
1. Memudahkan pelanggan mengecek tarif pengiriman secara mandiri
2. Memungkinkan pelanggan melakukan booking/order pengiriman secara online tanpa perlu datang ke kantor
3. Memberikan pengalaman yang mudah, cepat, dan terpercaya bagi pengguna awam

---

## ✅ Fitur Utama (Roadmap)

### Fase 1 — Landing Page Internasional (SUDAH ADA ✅)
- Hero section dengan CTA ke WhatsApp (fokus internasional)
- Section keunggulan layanan internasional (6 poin, termasuk bea cukai)
- Section statistik bisnis (50+ negara tujuan)
- Tabel/card tarif pengiriman internasional: Ekonomi / Standar / Express (responsif)
- CTA penutup
- Footer dengan informasi kontak

### Fase 2 — Cek Tarif (BELUM ADA)
- Input: kota/negara asal, negara tujuan, berat/dimensi paket
- Output: estimasi harga dan estimasi waktu pengiriman
- Harus mudah digunakan oleh pengguna awam

### Fase 3 — Booking / Order Online (BELUM ADA)
- Form pemesanan pengiriman
- Data pengirim & penerima
- Pilihan layanan/jenis pengiriman
- Konfirmasi order (email atau nomor order)

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | **Next.js 14** (App Router) |
| Bahasa | **TypeScript** |
| Styling | **Tailwind CSS v3** |
| Font | **Inter** (via `next/font/google`) |
| Icons | SVG inline (tidak pakai library ikon eksternal) |
| Deployment | (isi jika sudah ada) |

### Versi Dependency
```json
"next": "14.2.5"
"react": "^18"
"tailwindcss": "^3.4.1"
"typescript": "^5"
```

---

## 📁 Struktur Project

```
55Express/
├── CLAUDE.md                    ← File ini (patokan utama)
├── package.json
├── next.config.mjs
├── tailwind.config.ts           ← Custom colors navy-*, animasi custom
├── tsconfig.json
│
├── public/
│   └── images/
│       └── logo/                ← 📌 Letakkan file logo di sini
│           └── (logo-55express.png, logo-55express.svg, dll)
│
├── app/
│   ├── layout.tsx               ← Root layout + SEO metadata + font Inter
│   ├── globals.css              ← Tailwind base + utilities: delay-*, .glass, .text-gradient-blue
│   └── page.tsx                 ← Compose semua sections
│
├── components/
│   ├── Navbar.tsx               ← 'use client' — sticky, scroll-aware, hamburger mobile
│   ├── Hero.tsx                 ← Full-screen dark hero + wave SVG + CTA WA
│   ├── Features.tsx             ← Grid 6 keunggulan, hover card
│   ├── Stats.tsx                ← 4 angka statistik bisnis (dark bg)
│   ├── Pricing.tsx              ← Cards (mobile) / Tabel (desktop) — responsif otomatis
│   ├── ClosingCTA.tsx           ← Blue gradient + benefit pills + CTA WA besar
│   └── Footer.tsx               ← 4 kolom: brand, navigasi, layanan, jam operasional
│
└── lib/
    └── constants.ts             ← ⚙️ EDIT DI SINI: WA_NUMBER, WA_LINKS, PRICING_DATA
```

> **Aturan:** Selalu baca struktur folder sebelum membuat file baru. Jangan duplikasi.

---

## 🎨 Panduan Desain & Branding

### Palet Warna Resmi (Brand)

| Peran | Warna | Keterangan |
|---|---|---|
| Background Utama / Section Terang | `#E8F4FD` atau `#EFF8FF` | Biru muda lembut, bersih & elegan |
| Aksen Utama / CTA / Tombol | `#2A7FBC` atau `#1A6FA8` | Biru medium |
| Teks Utama | `#1A2B3C` | Navy gelap, mudah dibaca |
| Teks Sekunder | `#5A7A90` | Abu-biru, untuk subjudul |
| Background Gelap (hero, footer) | `#0D2137` atau `#0A1E30` | Navy pekat |
| Putih / Netral | `#FFFFFF` / `#F5F9FC` | Card, form, area konten |

> **⚠️ Catatan Implementasi Saat Ini:**
> Tailwind config saat ini menggunakan `navy-950: #080f22` (sedikit lebih gelap dari `#0D2137`).
> Jika ingin 100% sesuai brand, update nilai di `tailwind.config.ts` → `navy.900` ke `#0D2137`.

### Filosofi Desain
- **Nuansa:** Biru muda sebagai jiwa — bersih, modern, dan terpercaya
- **Kesan:** Elegan dan profesional, bukan playful
- **Pendekatan:** Biru muda di background/section, bukan sebagai warna dominan UI interaktif
- **Hindari:** Gradien berlebihan — lebih utamakan flat design elegan

### Aturan Logo
- **Logo 55 Express berwarna biru muda** → jangan letakkan di atas background biru muda
- Tempatkan logo di atas background:
  - **Putih** (`#FFFFFF`) ✅
  - **Navy gelap** (`#0D2137`) ✅
  - **Abu netral** (`#F5F9FC`) ✅
- File logo disimpan di: `public/images/logo/`
- Format yang direkomendasikan: `.svg` (scalable) + `.png` (fallback)
- Cara pakai di Next.js: `import Image from 'next/image'` → `src="/images/logo/nama-file.svg"`

### Typography
- Font utama: **Inter** (sudah terpasang via `next/font/google`)
- Alternatif: **Plus Jakarta Sans** jika ingin terlihat lebih modern
- Heading: `font-bold` / `font-extrabold`, warna navy gelap
- Body: `font-normal`, warna teks utama

### Gaya Komponen
- **Tombol CTA utama:** `bg-blue-600` (atau `#2A7FBC`), teks putih, `rounded-xl`
- **Tombol WhatsApp:** `bg-green-500`, teks putih
- **Card:** Background putih, `shadow-sm` sampai `shadow-md`, border tipis `border-slate-200`
- **Input form:** Border abu-biru, focus ring biru medium

---

## ⚙️ Konfigurasi yang Sering Diubah

### 1. Nomor WhatsApp
File: `lib/constants.ts`
```ts
export const WA_NUMBER = '6281234567890'  // ← Ganti ini
```

### 2. Data Harga Pengiriman
File: `lib/constants.ts` → array `PRICING_DATA`
- Setiap item: `{ destination, province, eta, reguler, express, sameDay, highlight }`
- Kolom `sameDay: '—'` jika tidak tersedia untuk rute itu

### 3. Informasi Kontak di Footer
File: `components/Footer.tsx`
- Nomor telepon tampil, alamat kantor, email

### 4. Custom Colors Navy
File: `tailwind.config.ts` → `theme.extend.colors.navy`
- Nilai saat ini: `navy-950: #080f22`, `navy-900: #0d1c3d`

---

## 🧭 Panduan Kerja untuk Claude Code

1. **Selalu gunakan Bahasa Indonesia** untuk semua teks yang tampil di UI/website
2. **Prioritaskan UX yang sederhana** — pengguna adalah masyarakat umum
3. **Jangan ubah fitur yang sudah berjalan** tanpa konfirmasi dari pemilik proyek
4. **Tanya dulu sebelum membuat file baru** jika tidak yakin penempatannya
5. **Konsisten dengan design system** — gunakan warna, font, dan komponen yang sudah ada
6. **Setiap perubahan besar** harus dijelaskan singkat sebelum dieksekusi
7. **Untuk menambah gambar/logo:** simpan di `public/images/logo/` dan gunakan `next/image`
8. **Server Component by default** — hanya gunakan `'use client'` jika perlu interaktivitas (useState, useEffect, event handler)

---

## 📌 Backlog & Catatan Pengembangan

| Status | Item |
|---|---|
| ✅ | Landing page single-page — internasional (hero, fitur, harga, CTA, footer) |
| ✅ | Scope dikonfirmasi: **internasional** (dari Indonesia ke 50+ negara) |
| ⏳ | Upload file logo ke `public/images/logo/` |
| ⏳ | Sesuaikan warna komponen dengan palet brand resmi |
| 🔜 | Fitur cek tarif interaktif |
| 🔜 | Sistem booking/order online |
| 🔜 | Sistem tracking resi |
| 🔜 | Integrasi payment gateway |
| 🔜 | Dashboard admin |

---

*Terakhir diupdate: Februari 2026 — scope internasional dikonfirmasi*
*Dibuat & dikelola dengan bantuan Claude Code*
