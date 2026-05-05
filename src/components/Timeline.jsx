import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBriefcase, faBroom, faPeopleGroup, faMoon } from '@fortawesome/free-solid-svg-icons'

const STEPS = [
  { icon: faSun,          label: 'Morning',   title: 'Morning Check-In',            desc: 'Start the day with accountability and intention.' },
  { icon: faBriefcase,    label: 'Daytime',   title: 'Work / Program / Job Search', desc: 'Engage in structured, productive daily activity.' },
  { icon: faBroom,        label: 'Afternoon', title: 'Chores & Responsibilities',    desc: 'Contribute to the upkeep of the shared home.' },
  { icon: faPeopleGroup,  label: 'Evening',   title: 'Meetings & Recovery Support',  desc: 'Attend meetings or recovery-related activities.' },
  { icon: faMoon,         label: 'Night',     title: 'Evening Routine & Curfew',     desc: 'Wind down, follow curfew, and rest.' },
]

export default function Timeline() {
  return (
    <section className="py-14 lg:py-28 bg-white">
      <div className="section-container">

        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Structure</p>
          <h2 className="section-heading">What Structure Looks Like</h2>
          <div className="accent-line mx-auto" />
          <p className="text-navy-600 leading-relaxed">A consistent daily rhythm that supports sobriety and builds stability.</p>
        </div>

        {/* Desktop — horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-sage-200" />
          <div className="flex justify-between">
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-1/5 px-3">
                <div className="relative z-10 w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center shadow-md mb-4">
                  <FontAwesomeIcon icon={step.icon} className="text-white text-sm" />
                </div>
                <span className="text-sage-600 text-xs font-semibold uppercase tracking-widest mb-1">{step.label}</span>
                <p className="font-display font-semibold text-navy-800 text-sm text-center leading-snug mb-1">{step.title}</p>
                <p className="text-navy-500 text-xs text-center leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="lg:hidden flex flex-col">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center shadow-md shrink-0">
                  <FontAwesomeIcon icon={step.icon} className="text-white text-sm" />
                </div>
                {i < STEPS.length - 1 && <div className="w-0.5 flex-1 bg-sage-200 my-1" />}
              </div>
              <div className="pb-8 pt-1">
                <span className="text-sage-600 text-xs font-semibold uppercase tracking-widest">{step.label}</span>
                <p className="font-display font-semibold text-navy-800 mt-0.5 mb-1">{step.title}</p>
                <p className="text-navy-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
