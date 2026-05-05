// WhatWeOffer.jsx
// Displays feature cards describing what the home provides to residents.

// Each card: icon (emoji), title, and short description
const OFFERS = [
  {
    icon: '🏡',
    title: 'Substance-Free Environment',
    desc: 'No alcohol, marijuana, or illegal drugs permitted on the premises — ever. Residents are expected to maintain full sobriety at all times.',
  },
  {
    icon: '📋',
    title: 'House Rules & Accountability',
    desc: 'Clear, consistent expectations are in place for all residents. Structure and accountability are the foundation of life in our home.',
  },
  {
    icon: '🕙',
    title: 'Curfew & Daily Structure',
    desc: 'Curfews and routines help create stability and reduce the risk of relapse. A structured day supports healthy habits and forward momentum.',
  },
  {
    icon: '🔬',
    title: 'Random Drug Testing',
    desc: 'Residents may be subject to random drug and alcohol testing. This protects the safety of the entire community and reinforces accountability.',
  },
  {
    icon: '🤝',
    title: 'Peer Support',
    desc: 'Living alongside others committed to sobriety creates a built-in support network. Shared experience builds genuine community.',
  },
  {
    icon: '💼',
    title: 'Employment & Program Participation',
    desc: 'Residents are expected to maintain employment, attend school, participate in treatment, or actively seek work. Purpose supports recovery.',
  },
  {
    icon: '🔗',
    title: 'Referral-Friendly Communication',
    desc: 'We maintain open communication with referring professionals — including case managers, outpatient programs, and probation officers.',
  },
  {
    icon: '🛡️',
    title: 'Safe, Monitored Housing',
    desc: 'The home is actively monitored to ensure the safety and sobriety of all residents. Everyone deserves a secure place to rebuild.',
  },
]

export default function WhatWeOffer() {
  return (
    <section id="offer" className="py-20 lg:py-28 bg-section-alt">
      <div className="section-container">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="section-heading">
            Everything You Need to Stay on Track
          </h2>
          <div className="accent-line mx-auto" />
          <p className="text-navy-600 leading-relaxed">
            Our home provides the structure and community that supports
            residents in building a stable, sober life — one day at a time.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFERS.map(offer => (
            <div key={offer.title} className="card flex flex-col gap-3">
              <span className="text-3xl leading-none">{offer.icon}</span>
              <h3 className="font-display font-semibold text-navy-800 text-lg leading-snug">
                {offer.title}
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed flex-1">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
