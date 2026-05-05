import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const FOOTER_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'What We Offer', href: '#offer' },
  { label: 'Expectations',  href: '#expectations' },
  { label: 'Referrals',     href: '#referrals' },
  { label: 'Apply',         href: '#apply' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-sand-300">

      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-sage-600 via-sage-400 to-navy-700" />

      {/* Main body */}
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 flex items-center justify-center bg-sage-500 rounded-xl shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6 2 3 7 3 12c0 3 1.5 5.5 4 7" strokeLinecap="round"/>
                  <path d="M12 2c6 0 9 5 9 10 0 3-1.5 5.5-4 7" strokeLinecap="round"/>
                  <path d="M12 2v20" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="font-display font-semibold text-white text-lg">
                LS Sober Living
              </span>
            </div>
            <p className="text-sand-400 text-sm leading-relaxed mb-2">
              Structured, monitored sober housing<br />in the Dallas / Fort Worth area.
            </p>
            <p className="text-sand-500 text-xs">Dallas / Fort Worth, Texas</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-5">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sand-400 hover:text-white text-sm transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-widest mb-5">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3 text-sand-400 text-sm mb-6">
              <span className="flex items-center gap-2.5"><FontAwesomeIcon icon={faPhone} className="text-sage-500 w-3.5" /> (XXX) XXX-XXXX</span>
              <span className="flex items-center gap-2.5"><FontAwesomeIcon icon={faEnvelope} className="text-sage-500 w-3.5" /> contact@lssoberliving.com</span>
              <span className="flex items-center gap-2.5"><FontAwesomeIcon icon={faLocationDot} className="text-sage-500 w-3.5" /> Dallas / Fort Worth, TX</span>
            </div>
            <a href="#apply" className="btn-primary bg-sage-500 hover:bg-sage-400 text-sm py-2.5 px-5">
              Apply Now
            </a>
          </div>

        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="section-container py-4">
          <p className="text-xs text-sand-500 leading-relaxed max-w-3xl mb-2">
            <strong className="text-sand-400">Disclaimer:</strong>{' '}
            LS Sober Living is not a detox, rehab, medical, or clinical treatment provider.
            We provide structured sober living housing and accountability support only.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="section-container py-4 flex items-center justify-between">
          <p className="text-xs text-sand-600">© {year} LS Sober Living Homes. All rights reserved.</p>
          <p className="text-xs text-sand-600">Dallas / Fort Worth, TX</p>
        </div>
      </div>

    </footer>
  )
}
