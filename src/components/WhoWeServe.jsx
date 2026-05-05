const PROFILES = [
  { icon: '🧭', title: 'Adults Committed to Sobriety',        desc: 'Ready to live substance-free and embrace accountability.' },
  { icon: '🔄', title: 'Transitioning from Treatment',         desc: 'Leaving inpatient rehab, IOP, or other recovery programs.' },
  { icon: '🏗️', title: 'Rebuilding Stability',                 desc: 'Moving from unstable housing toward a structured, sober life.' },
  { icon: '📑', title: 'Willing to Follow House Rules',        desc: 'Committed to expectations, participation, and productive daily activity.' },
]

export default function WhoWeServe() {
  return (
    <section className="py-20 lg:py-28 bg-sand-50">
      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading">
              Is This Home Right for You?
            </h2>
            <div className="accent-line" />
            <p className="text-navy-700 leading-relaxed mb-8">
              We serve adults who are serious about sobriety and ready for
              structured, accountable community living.
            </p>

            <div className="p-5 bg-navy-900 rounded-2xl text-white">
              <p className="font-display font-semibold text-base mb-2">A Note on Eligibility</p>
              <p className="text-sand-300 text-sm leading-relaxed">
                We may not be the right fit for individuals currently using
                substances or requiring medical detox or clinical treatment.
                We're happy to connect you with appropriate resources.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {PROFILES.map(p => (
              <div
                key={p.title}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-sand-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mt-0.5 shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-navy-800 mb-1">{p.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
