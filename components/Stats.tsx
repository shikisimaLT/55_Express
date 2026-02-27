const stats = [
  {
    value: '12.000+',
    label: 'Paket Terkirim',
    sublabel: 'Ke luar negeri setiap bulan',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Pengiriman On-time',
    sublabel: 'Rata-rata bulanan',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'Negara Tujuan',
    sublabel: 'Asia, Eropa, Amerika & lebih',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '5+ Tahun',
    label: 'Berpengalaman',
    sublabel: 'Melayani dengan sepenuh hati',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-950 relative overflow-hidden">

      {/* ── Background Decoration ─────────────── */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 80% 50%, #1d4ed8 0%, transparent 40%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ────────────────────────────── */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Dipercaya Ribuan Pelanggan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Angka yang Berbicara
          </h2>
        </div>

        {/* ── Stats Grid ────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/30 text-blue-300 mb-4 mx-auto group-hover:bg-blue-600/50 transition-colors">
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-slate-200 font-semibold text-sm mb-1">
                {stat.label}
              </div>

              {/* Sublabel */}
              <div className="text-slate-500 text-xs">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
