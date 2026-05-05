// Referrals.jsx
// Section targeting professional referral partners.

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
              A Trusted Step-Down Option for Your Clients
            </h2>
            <div className="w-12 h-1 bg-sage-500 rounded-full mb-6" />

            <p className="text-sand-200 leading-relaxed mb-5">
              We understand that finding safe, structured housing for clients
              in early recovery is one of the most critical — and challenging —
              parts of continuing care planning.
            </p>
            <p className="text-sand-200 leading-relaxed mb-5">
              LS Sober Living Homes welcomes conversations with referral partners
              seeking structured recovery housing options for their clients. We
              prioritize clear, timely communication so you can make informed
              decisions on your client's behalf.
            </p>
            <p className="text-sage-300 font-semibold leading-relaxed">
              We welcome conversations with referral partners seeking structured
              recovery housing options for clients.
            </p>

            <a href="#apply" className="btn-primary bg-sage-500 hover:bg-sage-400 mt-8 inline-block">
              Submit a Referral
            </a>
          </div>

          {/* Partner type cards */}
          <div>
            <p className="text-sand-300 font-semibold text-sm mb-5">
              We work with professionals including:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {PARTNER_TYPES.map(p => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 hover:bg-white/15 transition"
                >
                  <span className="text-xl shrink-0">{p.icon}</span>
                  <span className="text-sand-100 text-sm font-medium leading-snug">{p.label}</span>
                </div>
              ))}
            </div>

            {/* Referral process note */}
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-sand-300 text-sm leading-relaxed">
                <strong className="text-white">Referral process:</strong> Submit
                the interest form below or contact us directly. We'll follow up
                within one business day to discuss placement availability and
                client fit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
