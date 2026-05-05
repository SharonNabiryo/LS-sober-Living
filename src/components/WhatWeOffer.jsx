const OFFERS = [
  { icon: '🚫', title: 'Substance-Free Environment',   desc: 'Zero tolerance for drugs or alcohol — always.' },
  { icon: '📋', title: 'Structured Daily Living',       desc: 'Curfews, routines, and clear expectations for every resident.' },
  { icon: '🔬', title: 'Random Drug Testing',           desc: 'Regular screening keeps the home safe and accountable.' },
  { icon: '🏡', title: 'Fully Furnished Home',          desc: 'Move-in ready housing in the Dallas/Fort Worth area.' },
  { icon: '🤝', title: 'Peer Support',                  desc: 'Live alongside others committed to the same recovery goals.' },
  { icon: '💼', title: 'Recovery-Focused Community',    desc: 'Employment, school, or treatment participation is expected.' },
  { icon: '🛡️', title: 'Safe, Monitored Housing',      desc: 'Actively monitored to protect every resident.' },
  { icon: '🚌', title: 'Accessible Location',           desc: 'Near public transit, grocery stores, and major shopping centers.' },
]

export default function WhatWeOffer() {
  return (
    <section id="offer" className="py-20 lg:py-28 bg-section-alt">
      <div className="section-container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="section-heading">
            Everything You Need to Stay on Track
          </h2>
          <div className="accent-line mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFERS.map(offer => (
            <div key={offer.title} className="card flex flex-col gap-3">
              <span className="text-3xl leading-none">{offer.icon}</span>
              <h3 className="font-display font-semibold text-navy-800 text-base leading-snug">
                {offer.title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed flex-1">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
