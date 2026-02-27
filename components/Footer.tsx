import { WA_LINKS } from '@/lib/constants'

const quickLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Keunggulan Kami', href: '#keunggulan' },
  { label: 'Daftar Harga', href: '#harga' },
  { label: 'Hubungi Kami', href: '#kontak' },
]

const services = [
  { label: 'Pengiriman Reguler', desc: 'Internasional, 20+ negara' },
  { label: 'Pengurusan Bea Cukai', desc: 'Dokumen ekspor-impor' },
  { label: 'Konsultasi Gratis', desc: 'Tanya sebelum kirim' },
  { label: 'Garansi Pengembalian', desc: 'Dana kembali jika gagal' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="kontak" className="bg-navy-950 text-slate-400">

      {/* ── Main Footer Content ──────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Brand Column ──────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-blue-600 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                55<span className="text-blue-300/50 text-xs font-semibold tracking-wide">五五</span>{' '}
                <span className="text-blue-400">Express</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Solusi pengiriman barang internasional terpercaya dari Indonesia ke 20+ negara di seluruh dunia. Cepat, aman, dan harga transparan.
            </p>

            {/* Social / Contact Buttons */}
            <div className="flex flex-col gap-2">
              <a
                href={WA_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 hover:text-green-300 px-4 py-2.5 rounded-xl text-sm font-medium transition-all w-fit"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                +62 812-3456-7890
              </a>
              <a
                href="mailto:info@55express.id"
                className="inline-flex items-center gap-2.5 bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-300 px-4 py-2.5 rounded-xl text-sm font-medium transition-all w-fit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@55express.id
              </a>
            </div>
          </div>

          {/* ── Quick Links ───────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ──────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.label}>
                  <div className="text-slate-300 text-sm font-medium">{svc.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{svc.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact & Operational ─────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Jam Operasional
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-slate-300 font-medium">Senin – Sabtu</div>
                  <div className="text-slate-500">08.00 – 21.00 WIB</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-slate-300 font-medium">Minggu & Libur</div>
                  <div className="text-slate-500">09.00 – 17.00 WIB</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-slate-300 font-medium">Alamat</div>
                  <div className="text-slate-500">Jl. Raya Darmo No. 55,<br />Surabaya, Jawa Timur</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────── */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {currentYear} <span className="text-slate-400 font-medium">55 Express</span>. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-1 text-slate-600 text-xs">
            <span>Dibuat dengan</span>
            <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.139 3.397 1 6.5 1 8.352 1 10.695 1.99 12 4.19 13.305 1.99 15.648 1 17.5 1 20.603 1 23 3.139 23 7.191c0 4.105-5.37 8.863-11 14.402z" />
            </svg>
            <span>untuk pelanggan setia kami</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
