import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHouseChimney, faCircleCheck, faShield } from '@fortawesome/free-solid-svg-icons'

const STATS = [
  { icon: faLocationDot,  value: 'DFW',  label: 'Dallas / Fort Worth Area' },
  { icon: faHouseChimney, value: '24/7', label: 'Accountability Structure' },
  { icon: faCircleCheck,  value: '100%', label: 'Substance-Free Environment' },
  { icon: faShield,       value: 'Zero', label: 'Tolerance for Use On-Site' },
]

export default function About() {
  return (
    <section id="about" className="py-14 lg:py-28 bg-sand-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text side */}
          <div>
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="section-heading mb-0">
              Homes Built on Structure,<br />Dignity & Community
            </h2>
            <div className="accent-line" />

            <p className="text-navy-700 leading-relaxed mb-5">
              LS Sober Living Homes provides structured, substance-free housing in the Dallas/Fort Worth area for adults committed to sobriety.
            </p>
            <p className="text-navy-700 leading-relaxed mb-5">
              Every resident is held to the same clear standards — because structure creates safety, and safety makes growth possible.
            </p>
            <p className="text-navy-700 leading-relaxed">
              We welcome individuals from all backgrounds who share one commitment: living substance-free and building a more stable future.
            </p>

            <div className="mt-8 p-4 bg-sand-100 border-l-4 border-sage-400 rounded-r-xl">
              <p className="text-sm text-navy-600 font-medium leading-snug">
                <strong>Please note:</strong> We are not a detox, rehab, or clinical treatment provider. We offer structured, monitored sober housing only.
              </p>
            </div>
          </div>

          {/* Image + stats side */}
          <div className="flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/About.JPG" alt="LS Sober Living home" className="w-full h-64 lg:h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map(stat => (
                <div key={stat.label} className="card flex flex-col items-center gap-2 text-center">
                  <div className="w-9 h-9 rounded-lg bg-sage-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={stat.icon} className="text-sage-600 text-sm" />
                  </div>
                  <span className="font-display text-2xl font-bold text-navy-800">{stat.value}</span>
                  <span className="text-xs text-navy-500 font-medium leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
