// ApplicationForm.jsx
// Interest / application form. No backend — shows a friendly alert on submit.

import { useState } from 'react'

// Initial empty form state
const INITIAL = {
  fullName: '',
  phone: '',
  email: '',
  applyingFor: '',
  sobrietyDate: '',
  currentStatus: '',
  message: '',
}

export default function ApplicationForm() {
  const [form, setForm]         = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  // Update a single field by name
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // Handle form submission (no backend — just show confirmation UI)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(INITIAL) // Reset fields
    window.scrollTo({ top: document.getElementById('apply').offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="apply" className="py-20 lg:py-28 bg-sand-50">
      <div className="section-container max-w-3xl">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Apply / Refer
          </p>
          <h2 className="section-heading">
            Start the Conversation
          </h2>
          <div className="accent-line mx-auto" />
          <p className="text-navy-600 leading-relaxed">
            Fill out the form below and we'll follow up with you shortly.
            All inquiries are treated with respect and confidentiality.
          </p>
        </div>

        {/* Success message (shown after submit) */}
        {submitted && (
          <div className="mb-8 p-6 bg-sage-50 border border-sage-300 rounded-2xl text-center">
            <span className="text-3xl block mb-2">✅</span>
            <h3 className="font-display font-semibold text-navy-800 text-lg mb-1">
              Message Received
            </h3>
            <p className="text-navy-600 text-sm">
              Thank you. Your message has been received. We will follow up soon.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-6">

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="form-label">Full Name *</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
              value={form.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Phone + Email row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Applying for self or referring */}
          <div>
            <label htmlFor="applyingFor" className="form-label">
              Are you applying for yourself or referring someone? *
            </label>
            <select
              id="applyingFor"
              name="applyingFor"
              required
              value={form.applyingFor}
              onChange={handleChange}
              className="form-input"
            >
              <option value="" disabled>Select one…</option>
              <option value="self">Applying for myself</option>
              <option value="referral">Referring someone else</option>
              <option value="info">Just requesting information</option>
            </select>
          </div>

          {/* Sobriety date / clean time */}
          <div>
            <label htmlFor="sobrietyDate" className="form-label">
              Current Sobriety Date or Approximate Clean Time
            </label>
            <input
              id="sobrietyDate"
              name="sobrietyDate"
              type="text"
              placeholder="e.g., January 1, 2024 / About 6 months"
              value={form.sobrietyDate}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Current status */}
          <div>
            <label htmlFor="currentStatus" className="form-label">
              Are you currently employed, in treatment, or seeking work? *
            </label>
            <select
              id="currentStatus"
              name="currentStatus"
              required
              value={form.currentStatus}
              onChange={handleChange}
              className="form-input"
            >
              <option value="" disabled>Select one…</option>
              <option value="employed">Currently employed</option>
              <option value="treatment">In outpatient or treatment program</option>
              <option value="seeking-work">Actively seeking employment</option>
              <option value="school">In school or vocational training</option>
              <option value="multiple">Multiple of the above</option>
              <option value="other">Other / Not sure</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="form-label">Additional Message or Notes</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us a little about your situation or what you're looking for…"
              value={form.message}
              onChange={handleChange}
              className="form-input resize-none"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full text-center justify-center text-base py-4">
            Submit Interest Form
          </button>

          <p className="text-center text-xs text-navy-400">
            By submitting this form you agree to be contacted about housing availability.
            Your information is kept private and not shared without your consent.
          </p>

        </form>

      </div>
    </section>
  )
}
