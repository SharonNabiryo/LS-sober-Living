// FAQ.jsx
// Accordion-style FAQ section.

import { useState } from 'react'

const FAQS = [
  {
    q: 'Is this a treatment center or detox facility?',
    a: 'No. LS Sober Living Homes is not a detox center, rehabilitation facility, or clinical treatment provider. We offer structured, monitored sober housing. If you need medical detox or clinical treatment, we encourage you to seek those services first before applying for sober living.',
  },
  {
    q: 'Do residents sign a lease?',
    a: 'Residents typically sign a residency agreement rather than a traditional lease. This agreement outlines house rules, expectations, fees, and the terms of residency. Details are discussed during the intake and screening process.',
  },
  {
    q: 'Are drug tests required?',
    a: 'Yes. Random drug and alcohol testing is a standard requirement for all residents. Testing is done to protect the safety and sobriety of everyone in the home. A positive test or refusal to test will be addressed according to house policy.',
  },
  {
    q: 'Are visitors allowed?',
    a: 'Visitors must be approved in advance and are subject to house guidelines. Unauthorized guests are not permitted. Overnight guests are generally not allowed. The safety and privacy of all residents is our priority.',
  },
  {
    q: 'Do residents need to work or attend a program?',
    a: 'Yes. All residents are expected to maintain some form of productive daily activity — whether that is employment, school, an outpatient program, vocational training, or active job searching. Idle time can be a risk factor for relapse, and structure supports long-term success.',
  },
  {
    q: 'How does the referral process work?',
    a: "Referral partners can submit an inquiry using the form on this page or contact us directly by phone or email. We'll respond within one business day to discuss the client's situation, current availability, and fit. We value clear, professional communication with all referring parties.",
  },
  {
    q: 'How long can someone stay?',
    a: 'Length of stay varies depending on individual circumstances, progress, and compliance with house expectations. Many residents stay for several months. There is no fixed maximum length of stay for residents in good standing.',
  },
  {
    q: 'Is there a waiting list?',
    a: 'Availability changes regularly. Submit an inquiry form or call us to ask about current openings. We do our best to respond quickly so you\'re not left waiting for information.',
  },
]

// Single accordion item
function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-sand-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-start text-left px-6 py-5 hover:bg-sand-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sage-400"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-navy-800 pr-4 leading-snug">
          {item.q}
        </span>
        <span className={`shrink-0 text-sage-500 text-xl transition-transform duration-200 mt-0.5 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-5">
          <div className="h-px bg-sand-200 mb-4" />
          <p className="text-navy-700 text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  // Track which FAQ is open (-1 = none)
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (i) => setOpenIndex(prev => (prev === i ? -1 : i))

  return (
    <section id="faq" className="py-20 lg:py-28 bg-section-alt">
      <div className="section-container max-w-3xl">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="accent-line mx-auto" />
          <p className="text-navy-600 leading-relaxed">
            Have a question not answered here? Reach out directly — we're happy to help.
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
