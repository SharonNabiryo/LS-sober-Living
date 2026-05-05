// About.jsx
// About section — describes the mission and values of the home.

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-sand-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text side */}
          <div>
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="section-heading mb-0">
              A Home Built on Structure,
              <br />
              Dignity & Community
            </h2>
            <div className="accent-line" />

            <p className="text-navy-700 leading-relaxed mb-5">
              LS Sober Living Homes exists for individuals who are serious about
              maintaining sobriety and rebuilding their lives. We provide a
              structured, substance-free living environment in the Dallas/Fort
              Worth area where residents can establish stability, develop
              personal accountability, and connect with a community of peers
              walking a similar path.
            </p>
            <p className="text-navy-700 leading-relaxed mb-5">
              Our home operates with clear expectations and consistent
              structure. Every resident is held to the same standards — because
              structure creates safety, and safety makes growth possible.
            </p>
            <p className="text-navy-700 leading-relaxed">
              We believe in treating every person with dignity. Recovery looks
              different for everyone, and we welcome individuals from diverse
              backgrounds who share one common commitment: living substance-free
              and working toward a more stable future.
            </p>

            {/* Disclaimer callout */}
            <div className="mt-8 p-4 bg-sand-100 border-l-4 border-sage-400 rounded-r-xl">
              <p className="text-sm text-navy-600 font-medium leading-snug">
                <strong>Please note:</strong> LS Sober Living Homes is not a
                detox center, rehabilitation facility, or clinical treatment
                provider. We offer structured, monitored sober housing — not
                medical care or therapy services.
              </p>
            </div>
          </div>

          {/* Image + stats side */}
          <div className="flex flex-col gap-5">
            {/* Photo — replace src with your own photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/About.JPG"
                alt="LS Sober Living home"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "DFW", label: "Dallas / Fort Worth Area", icon: "📍" },
                {
                  value: "24/7",
                  label: "Accountability Structure",
                  icon: "🏠",
                },
                {
                  value: "100%",
                  label: "Substance-Free Environment",
                  icon: "✅",
                },
                {
                  value: "Zero",
                  label: "Tolerance for Use On-Site",
                  icon: "🛡️",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card flex flex-col gap-2 text-center"
                >
                  <span className="text-3xl">{stat.icon}</span>
                  <span className="font-display text-2xl font-bold text-navy-800">
                    {stat.value}
                  </span>
                  <span className="text-xs text-navy-500 font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
