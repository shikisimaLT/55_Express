import { WA_LINKS } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* ── Background Gradients ───────────────── */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #1e3a8a 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, #1d4ed8 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* ── Grid Pattern ──────────────────────── */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Decorative Circles ────────────────── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl" aria-hidden="true" />

      {/* ── Main Content ──────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-36">
        <div className="text-center max-w-4xl mx-auto">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-blue-300 text-sm font-medium tracking-wide">
              Melayani Pengiriman ke 20+ Negara di Seluruh Dunia
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up delay-100">
            Kirim Barang ke{' '}
            <span className="text-gradient-blue">Luar Negeri</span>
            {', '}
            <br className="hidden sm:block" />
            Mudah, Aman &{' '}
            <span className="text-gradient-blue">Terpercaya</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            55 Express hadir sebagai solusi pengiriman barang internasional terbaik.
            Layanan{' '}
            <strong className="text-slate-200 font-semibold">reguler</strong>{' '}
            ke 20+ negara — urus bea cukai kami yang tangani, Anda cukup kirim.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center animate-fade-up delay-300">
            <a
              href={WA_LINKS.order}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>

            <a
              href="#harga"
              className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
            >
              Lihat Tarif Pengiriman
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-14 animate-fade-up delay-400">
            {[
              { icon: '✓', text: 'Bea Cukai Kami Urus' },
              { icon: '✓', text: 'Garansi Pengembalian Uang' },
              { icon: '✓', text: 'Konsultasi Gratis' },
              { icon: '✓', text: 'Tracking Real-time' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-slate-400">
                <span className="w-5 h-5 flex items-center justify-center bg-blue-700/50 rounded-full text-blue-300 text-xs font-bold flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Wave ───────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-12 sm:h-16 md:h-20 fill-white"
        >
          <path d="M0,40 C200,80 400,0 600,30 C800,60 1000,10 1200,40 C1300,55 1380,45 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
