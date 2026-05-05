// Expectations.jsx
// Clear list of house rules so applicants know what to expect.

const RULES = [
  {
    icon: '🚫',
    title: 'Zero Substance Use',
    desc: 'No alcohol, marijuana (including medical), illegal drugs, or any mind-altering substances are permitted on the property at any time.',
  },
  {
    icon: '🔬',
    title: 'Random Drug Testing',
    desc: 'Residents agree to submit to random drug and alcohol screening as a condition of residency. Refusal is treated the same as a positive result.',
  },
  {
    icon: '🫱',
    title: 'Respectful Conduct',
    desc: 'All residents are expected to treat each other and staff with respect. Threatening, abusive, or disruptive behavior will not be tolerated.',
  },
  {
    icon: '🕙',
    title: 'Curfew Compliance',
    desc: 'Curfew times are enforced consistently. Residents are expected to be home by the designated time unless approved in advance.',
  },
  {
    icon: '🧹',
    title: 'Chores & Shared Responsibility',
    desc: 'All residents participate in keeping the home clean and orderly. Assigned chores are rotated and completed regularly.',
  },
  {
    icon: '💼',
    title: 'Productive Daily Activity',
    desc: 'Residents must be employed, enrolled in school, actively participating in a treatment program, or actively seeking employment.',
  },
  {
    icon: '🚷',
    title: 'No Unauthorized Guests',
    desc: "Visitors are not permitted without prior approval. Overnight guests are generally not allowed. The home's privacy and safety come first.",
  },
  {
    icon: '📲',
    title: 'Communication with House Manager',
    desc: 'Residents are expected to keep the house manager informed of their schedule, any significant changes, and any concerns that arise.',
  },
]

export default function Expectations() {
  return (
    <section id="expectations" className="py-20 lg:py-28 bg-section-alt">
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
            House Expectations
          </p>
          <h2 className="section-heading">
            Structure Is What Makes It Work
          </h2>
          <div className="accent-line" />
          <p className="text-navy-700 leading-relaxed">
            These expectations are in place to protect every resident and maintain
            a safe, stable home. They are applied consistently and without
            exception.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RULES.map(rule => (
            <div key={rule.title} className="card border-l-4 border-sage-400">
              <span className="text-2xl mb-3 block">{rule.icon}</span>
              <h3 className="font-display font-semibold text-navy-800 mb-2">
                {rule.title}
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-navy-500 text-sm max-w-2xl mx-auto">
          Violation of house expectations may result in removal from the home.
          We take these standards seriously — because so do our residents.
        </p>

      </div>
    </section>
  )
}
