export default function CTAStrip() {
  return (
    <section className="py-14 bg-sage-600">
      <div className="section-container text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2">
          Ready to take the next step?
        </h2>
        <p className="text-sage-100 mb-8 text-base">
          Apply for housing or refer someone today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="btn-primary bg-white text-sage-700 hover:bg-sand-50"
          >
            Apply for Housing
          </a>
          <a
            href="#referrals"
            className="btn-secondary border-white text-white hover:bg-white hover:text-sage-700"
          >
            Refer Someone
          </a>
        </div>
      </div>
    </section>
  )
}
