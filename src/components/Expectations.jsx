import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faFlask, faHandshake, faClock, faBroom, faBriefcase, faUserSlash, faMobileScreen } from '@fortawesome/free-solid-svg-icons'

const RULES = [
  { icon: faBan,          title: 'No Substances',            desc: 'No alcohol, marijuana, or drugs — ever.' },
  { icon: faFlask,        title: 'Random Drug Testing',       desc: 'Required as a condition of residency.' },
  { icon: faHandshake,    title: 'Respectful Conduct',        desc: 'Toward all residents and staff.' },
  { icon: faClock,        title: 'Curfew Compliance',         desc: 'Enforced consistently for all residents.' },
  { icon: faBroom,        title: 'Chore Participation',       desc: 'Shared responsibility for the home.' },
  { icon: faBriefcase,    title: 'Productive Daily Activity', desc: 'Work, school, treatment, or active job search.' },
  { icon: faUserSlash,    title: 'No Unauthorized Guests',    desc: 'Visitors require prior approval.' },
  { icon: faMobileScreen, title: 'Stay in Communication',     desc: 'Keep the house manager informed.' },
]

export default function Expectations() {
  return (
    <section id="expectations" className="py-14 lg:py-28 bg-section-alt">
      <div className="section-container">

        <div className="max-w-2xl mb-14">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">House Expectations</p>
          <h2 className="section-heading">Structure Is What Makes It Work</h2>
          <div className="accent-line" />
          <p className="text-navy-600 leading-relaxed">Applied consistently and without exception — to protect every resident.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RULES.map(rule => (
            <div key={rule.title} className="card border-l-4 border-sage-400">
              <div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={rule.icon} className="text-sage-600 text-sm" />
              </div>
              <h3 className="font-display font-semibold text-navy-800 mb-1 text-base">{rule.title}</h3>
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
