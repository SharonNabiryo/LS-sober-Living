// Footer.jsx
// Site-wide footer with nav links, disclaimer, and copyright.

const FOOTER_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'What We Offer',  href: '#offer' },
  { label: 'Expectations',   href: '#expectations' },
  { label: 'Referrals',      href: '#referrals' },
  { label: 'Apply',          href: '#apply' },
  { label: 'FAQ',            href: '#faq' },
  { label: 'Contact',        href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-sand-200">

      {/* Main footer body */}
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 flex items-center justify-center bg-sage-500 rounded-lg">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6 2 3 7 3 12c0 3 1.5 5.5 4 7" strokeLinecap="round"/>
                  <path d="M12 2c6 0 9 5 9 10 0 3-1.5 5.5-4 7" strokeLinecap="round"/>
                  <path d="M12 2v20" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="font-display font-semibold text-white text-lg">
                LS Sober Living Homes
              </span>
            </div>
            <p className="text-sand-400 text-sm mb-4">
              Structured sober living in Texas
            </p>
            <p className="text-sand-400 text-xs">
              Dallas / Fort Worth, Texas
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sand-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2 text-sand-400 text-sm">
              <span>📞 (XXX) XXX-XXXX</span>
              <span>✉️ contact@lssoberliving.com</span>
              <span>📍 Dallas / Fort Worth, TX</span>
            </div>
            <a
              href="#apply"
              className="inline-block mt-6 btn-primary bg-sage-500 hover:bg-sage-400 text-sm py-2.5 px-5"
            >
              Apply Now
            </a>
          </div>

        </div>
      </div>

      {/* Disclaimer + copyright bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-sand-500">
          <p className="max-w-xl leading-relaxed">
            <strong className="text-sand-400">Disclaimer:</strong>{' '}
            We do not provide medical care, detox, therapy, or clinical treatment
            services. LS Sober Living Homes is a structured, monitored
            substance-free residence only.
          </p>
          <p className="shrink-0">© {year} LS Sober Living Homes</p>
        </div>
      </div>

    </footer>
  )
}
