// WhoWeServe.jsx
// Describes the population best suited for LS Sober Living Homes.

const PROFILES = [
  {
    icon: '🧭',
    title: 'Adults Committed to Sobriety',
    desc: 'We welcome adults who are serious about maintaining sobriety and are ready to take on the responsibilities of structured communal living.',
  },
  {
    icon: '🔄',
    title: 'Transitioning from Treatment',
    desc: 'Individuals leaving inpatient rehab, outpatient programs, or other treatment settings often benefit most from a structured sober living environment during early recovery.',
  },
  {
    icon: '🏗️',
    title: 'Rebuilding from Instability',
    desc: 'Those transitioning from unstable or unsafe housing situations — and who are committed to building a more stable, substance-free life.',
  },
  {
    icon: '📑',
    title: 'Ready to Follow House Rules',
    desc: 'Residents must be willing to follow all house expectations, participate in the community, and engage in productive daily activity.',
  },
]

export default function WhoWeServe() {
  return (
    <section className="py-20 lg:py-28 bg-sand-50">
      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — text */}
          <div>
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading">
              Is This Home Right for You?
            </h2>
            <div className="accent-line" />
            <p className="text-navy-700 leading-relaxed mb-5">
              LS Sober Living Homes is for adults who have made the decision to
              live substance-free and are looking for a structured, supportive
              environment to support that commitment.
            </p>
            <p className="text-navy-700 leading-relaxed">
              The right fit is someone who is ready to follow the house rules,
              engage positively with peers, and take consistent steps — however
              small — toward stability and purpose.
            </p>

            {/* Not a fit callout */}
            <div className="mt-8 p-5 bg-navy-900 rounded-2xl text-white">
              <p className="font-display font-semibold text-lg mb-2">
                A Note on Eligibility
              </p>
              <p className="text-sand-200 text-sm leading-relaxed">
                We may not be the right fit for individuals who are currently
                using substances, who are unwilling to follow house expectations,
                or who require medical detox or clinical mental health treatment.
                We are happy to help connect you with appropriate resources if needed.
              </p>
            </div>
          </div>

          {/* Right — profile cards */}
          <div className="flex flex-col gap-4">
            {PROFILES.map(p => (
              <div
                key={p.title}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-sand-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mt-0.5 shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-navy-800 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
