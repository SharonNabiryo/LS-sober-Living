export default function MissionVision() {
  return (
    <section className="py-14 lg:py-20 bg-navy-900">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Mission */}
          <div className="bg-white/5 border border-white/[0.08] rounded-2xl p-8 lg:p-10">
            <p className="text-sage-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Our Mission
            </p>
            <p className="font-display text-white text-2xl font-semibold leading-snug mb-5">
              Stability Through Structure
            </p>
            <p className="text-sand-300 text-sm leading-relaxed max-w-md">
              Providing safe, structured sober living that supports
              accountability, stability, and long-term recovery.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 border border-white/[0.08] rounded-2xl p-8 lg:p-10">
            <p className="text-sage-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Our Vision
            </p>
            <p className="font-display text-white text-2xl font-semibold leading-snug mb-5">
              A Growing Recovery Community
            </p>
            <p className="text-sand-300 text-sm leading-relaxed max-w-md">
              Building trusted sober living homes across North America where
              individuals can rebuild with dignity and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
