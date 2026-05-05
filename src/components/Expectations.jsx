const RULES = [
  { icon: '🚫', title: 'No Substances',           desc: 'No alcohol, marijuana, or drugs — ever.' },
  { icon: '🔬', title: 'Random Drug Testing',      desc: 'Required as a condition of residency.' },
  { icon: '🫱', title: 'Respectful Conduct',       desc: 'Toward all residents and staff.' },
  { icon: '🕙', title: 'Curfew Compliance',        desc: 'Enforced consistently for all residents.' },
  { icon: '🧹', title: 'Chore Participation',      desc: 'Shared responsibility for the home.' },
  { icon: '💼', title: 'Productive Daily Activity', desc: 'Work, school, treatment, or active job search.' },
  { icon: '🚷', title: 'No Unauthorized Guests',   desc: 'Visitors require prior approval.' },
  { icon: '📲', title: 'Stay in Communication',    desc: 'Keep the house manager informed.' },
]

export default function Expectations() {
  return (
    <section id="expectations" className="py-20 lg:py-28 bg-section-alt">
      <div className="section-container">

        <div className="max-w-2xl mb-14">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
            House Expectations
          </p>
          <h2 className="section-heading">
            Structure Is What Makes It Work
          </h2>
          <div className="accent-line" />
          <p className="text-navy-600 leading-relaxed">
            Applied consistently and without exception — to protect every resident.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RULES.map(rule => (
            <div key={rule.title} className="card border-l-4 border-sage-400">
              <span className="text-2xl mb-3 block">{rule.icon}</span>
              <h3 className="font-display font-semibold text-navy-800 mb-1 text-base">
                {rule.title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-navy-400 text-sm max-w-xl mx-auto">
          Violation of house expectations may result in removal from the home.
        </p>

      </div>
    </section>
  )
}
