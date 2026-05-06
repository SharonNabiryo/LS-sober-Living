export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage-500 opacity-10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-navy-400 opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10 py-20 lg:py-32 grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">

        {/* Text column */}
        <div className="text-center lg:text-left">
          <div className="animate-on-load animate-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-sage-300">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="text-sand-100 text-sm font-semibold tracking-wide">Dallas / Fort Worth, Texas</span>
          </div>

          <h1 className="animate-on-load animate-delay-2 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
            Structured Sober Living<br />
            <span className="text-sage-300">in Texas</span>
          </h1>

          <p className="animate-on-load animate-delay-3 text-lg sm:text-xl text-sand-100/90 font-body font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Safe, substance-free homes focused on accountability and stability.
          </p>

          <div className="animate-on-load animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#apply" className="btn-primary bg-sage-500 hover:bg-sage-600 text-white">Apply for Housing</a>
            <a href="#referrals" className="btn-secondary border-white text-white hover:bg-white hover:text-navy-900">Refer Someone</a>
          </div>
        </div>

        {/* Image column — clean, no card attached */}
        <div className="animate-on-load animate-delay-3">
          <div className="h-[220px] sm:h-80 lg:h-[490px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/Hero.JPG"
              alt="Sober living home"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#fdfaf5"/>
        </svg>
      </div>
    </section>
  )
}
