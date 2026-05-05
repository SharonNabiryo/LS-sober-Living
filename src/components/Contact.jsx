// Contact.jsx
// Contact information section.

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-sand-50">
      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div>
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="section-heading">
              We'd Love to Hear From You
            </h2>
            <div className="accent-line" />
            <p className="text-navy-700 leading-relaxed mb-8">
              Whether you're exploring housing for yourself, referring a client,
              or just have questions — reach out. We're here to help.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-sand-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sage-600">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-800">Phone</p>
                  <p className="text-navy-500 text-sm">(XXX) XXX-XXXX</p>
                  {/* Replace the placeholder above with your actual phone number */}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-sand-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sage-600">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-800">Email</p>
                  <p className="text-navy-500 text-sm">contact@lsssoberliving.com</p>
                  {/* Replace the placeholder above with your actual email address */}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-sand-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sage-600">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-800">Location</p>
                  <p className="text-navy-500 text-sm">Dallas / Fort Worth, Texas</p>
                  <p className="text-navy-400 text-xs mt-1 italic">
                    Exact address shared after screening — for resident privacy and safety.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right — CTA / warm close */}
          <div className="bg-navy-900 text-white rounded-3xl p-8 lg:p-10 flex flex-col gap-5">
            <span className="text-4xl">🤝</span>
            <h3 className="font-display font-semibold text-2xl text-white leading-tight">
              Ready to take the next step?
            </h3>
            <p className="text-sand-200 text-sm leading-relaxed">
              You don't have to have everything figured out to reach out.
              Whether you're exploring options or ready to apply, we'll walk
              through it together.
            </p>
            <p className="text-sand-200 text-sm leading-relaxed">
              If you're a professional referring a client, we'll make the
              process as clear and efficient as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a href="#apply" className="btn-primary bg-sage-500 hover:bg-sage-400 text-center">
                Apply for Housing
              </a>
              <a href="#referrals" className="btn-secondary border-white text-white hover:bg-white hover:text-navy-900 text-center">
                Refer Someone
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
