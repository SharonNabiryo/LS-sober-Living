import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faClipboardList, faCouch } from '@fortawesome/free-solid-svg-icons'

const ITEMS = [
  { icon: faBan,           label: 'Substance-Free Living' },
  { icon: faClipboardList, label: 'Structured & Accountable' },
  { icon: faCouch,         label: 'Fully Furnished' },
]

export default function TrustStrip() {
  return (
    <div className="bg-white border-b border-sand-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-12">
          {ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              <FontAwesomeIcon icon={item.icon} className="text-sage-500 text-sm w-4 shrink-0" />
              <span className="text-navy-700 text-sm font-medium tracking-wide">{item.label}</span>
              {i < ITEMS.length - 1 && (
                <span className="hidden sm:block w-px h-4 bg-sand-200 ml-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
