import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faBullseye, faHouseChimney, faChartLine } from '@fortawesome/free-solid-svg-icons'

const TRUST_CARDS = [
  { icon: faClipboardList, title: 'Clear Expectations',          desc: 'Every resident knows the rules from day one — no surprises.' },
  { icon: faBullseye,      title: 'Accountability-Focused',      desc: 'Structure and consistency keep residents on track.' },
  { icon: faHouseChimney,  title: 'Supportive Home Environment', desc: 'A welcoming community of peers on the same path.' },
  { icon: faChartLine,     title: 'Built for Stability',         desc: 'Designed to help residents rebuild and move forward.' },
]

export default function TrustSection() {
  return (
    <section className="py-14 lg:py-24 bg-sand-50">
      <div className="section-container">

        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="section-heading">Why Choose LS Sober Living?</h2>
          <div className="accent-line mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_CARDS.map(card => (
            <div key={card.title} className="card text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center">
                <FontAwesomeIcon icon={card.icon} className="text-sage-600 text-lg" />
              </div>
              <h3 className="font-display font-semibold text-navy-800 text-base leading-snug">{card.title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
