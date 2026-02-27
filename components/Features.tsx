const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Jangkauan 20+ Negara',
    description:
      'Kirim barang ke lebih dari 20 negara di Asia, Eropa, Amerika, Timur Tengah, dan Australia. Tidak ada tempat yang terlalu jauh bagi kami.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Pengurusan Bea Cukai',
    description:
      'Dokumen ekspor-impor dan bea cukai kami tangani secara profesional. Anda tidak perlu pusing dengan regulasi — kami yang urus semuanya.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    accent: 'text-amber-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Aman & Terjamin',
    description:
      'Setiap paket dikemas dengan standar internasional dan ditangani dengan penuh kehati-hatian. Jika terjadi kendala, kami memberikan garansi pengembalian uang.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Konsultasi Gratis',
    description:
      'Bingung cara kirim atau butuh info tarif? Tim kami siap konsultasi gratis via WhatsApp — bantu Anda dari awal proses hingga paket tiba di tujuan.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    accent: 'text-violet-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Tracking Real-time',
    description:
      'Pantau posisi paket Anda dari keberangkatan hingga tiba di tangan penerima, kapan saja dan di mana saja via WhatsApp atau platform kami.',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50',
    accent: 'text-cyan-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Harga Transparan',
    description:
      'Tidak ada biaya tersembunyi. Tarif yang kami tampilkan sudah inklusif — tidak ada kejutan biaya tambahan di tengah proses pengiriman.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    accent: 'text-rose-600',
  },
]

export default function Features() {
  return (
    <section id="keunggulan" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ──────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Mengapa 55 Express?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Keunggulan yang Membuat{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Kami Berbeda
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Bukan sekadar mengantarkan paket — kami memberikan solusi pengiriman internasional yang menyeluruh, dari Indonesia ke seluruh dunia.
          </p>
        </div>

        {/* ── Features Grid ───────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 md:p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bg} ${feature.accent} rounded-2xl mb-5 transition-transform group-hover:scale-110 duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-5xl font-black text-slate-50 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
