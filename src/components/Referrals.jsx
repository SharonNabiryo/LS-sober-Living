const PARTNER_TYPES = [
  { icon: '🏥', label: 'Inpatient Treatment Centers' },
  { icon: '🩺', label: 'Outpatient Programs (IOP / OP)' },
  { icon: '🗂️', label: 'Case Managers & Social Workers' },
  { icon: '⚖️', label: 'Probation & Parole Officers' },
  { icon: '🏘️', label: 'Shelters & Transitional Housing' },
  { icon: '🤲', label: 'Community Organizations & Nonprofits' },
]

export default function Referrals() {
  return (
    <section id="referrals" className="py-20 lg:py-28 bg-navy-900 text-white">
      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <p className="text-sage-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Referral Partners
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
              A Trusted Step-Down Option<br />for Your Clients
            </h2>
            <div className="w-12 h-1 bg-sage-500 rounded-full mb-6" />

            <p className="text-sand-300 leading-relaxed mb-4">
              We welcome referrals from treatment centers, outpatient programs,
              case managers, probation officers, shelters, and community
              organizations.
            </p>
            <p className="text-sand-300 leading-relaxed mb-8">
              We prioritize clear, timely communication so you can make
              informed decisions on your client's behalf.
            </p>

            <a href="#apply" className="btn-primary bg-sage-500 hover:bg-sage-400 inline-block">
              Refer Someone
            </a>
          </div>

          {/* Partner cards */}
          <div>
            <p className="text-sand-400 font-semibold text-sm mb-5 uppercase tracking-widest">
              We work with
            </p>
            <div className="grid grid-cols-2 gap-3">
              {PARTNER_TYPES.map(p => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 hover:bg-white/15 transition"
                >
                  <span className="text-xl shrink-0">{p.icon}</span>
                  <span className="text-sand-100 text-sm font-medium leading-snug">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-sand-300 text-sm leading-relaxed">
                <strong className="text-white">Response time:</strong> We follow
                up within one business day to discuss availability and client fit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
