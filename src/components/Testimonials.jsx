import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    quote:
      "Moving into LS Sober Living gave me the structure I didn't know I needed. The rules felt strict at first, but they kept me grounded during the hardest months of my recovery.",
    name: 'Marcus T.',
    role: 'Former Resident',
    initials: 'MT',
  },
  {
    quote:
      "As a case manager, I've referred several clients here and every single one has reported feeling safe and respected. The accountability structure is exactly what transitional housing should look like.",
    name: 'Priya N.',
    role: 'Certified Case Manager',
    initials: 'PN',
  },
  {
    quote:
      "My son was resistant at first, but LS Sober Living gave our whole family peace of mind. Knowing he was in a substance-free, structured environment let us start to rebuild trust.",
    name: 'Denise R.',
    role: 'Family Member',
    initials: 'DR',
  },
  {
    quote:
      "I've been in and out of other halfway houses. This is different — the expectations are clear, the staff are consistent, and the other residents hold each other accountable. I've been clean for 14 months.",
    name: 'James O.',
    role: 'Former Resident',
    initials: 'JO',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  const goTo = useCallback((index, dir = 'next') => {
    if (animating) return
    setAnimating(true)
    setDirection(dir)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 350)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 'next')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, 'prev')
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section className="py-20 lg:py-28 bg-navy-900 overflow-hidden">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sage-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Voices from Our Community
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 bg-sage-500 rounded-full" />
        </div>

        {/* Card */}
        <div className="relative max-w-3xl mx-auto">

          {/* Arrow — prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Quote card */}
          <div
            key={current}
            style={{
              animation: animating
                ? 'none'
                : `testimonialIn 0.4s ease forwards`,
            }}
            className="bg-white/5 border border-white/10 rounded-2xl px-8 py-10 sm:px-12 sm:py-12 text-center"
          >
            {/* Quote mark */}
            <svg
              viewBox="0 0 40 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-7 text-sage-500 mx-auto mb-6"
            >
              <path
                d="M0 28V17.6C0 12.693 1.387 8.747 4.16 5.76 6.933 2.773 10.827 1.067 15.84 0l1.92 3.52C13.547 4.48 10.72 6.08 9.28 8.32c-1.44 2.24-2.08 4.693-1.92 7.36H12V28H0zm22.4 0V17.6c0-4.907 1.387-8.853 4.16-11.84C29.333 2.773 33.227 1.067 38.24 0l1.92 3.52c-4.213.96-7.04 2.56-8.48 4.8-1.44 2.24-2.08 4.693-1.92 7.36H34.4V28H22.4z"
                fill="currentColor"
              />
            </svg>

            {/* Quote text */}
            <p className="text-sand-100/90 text-lg sm:text-xl leading-relaxed font-light mb-10 font-body">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-full bg-sage-600 flex items-center justify-center text-white font-semibold text-sm">
                {t.initials}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-sand-300 text-xs">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Arrow — next */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 bg-sage-400'
                  : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes testimonialIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
