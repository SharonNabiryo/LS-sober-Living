const CARDS = [
  {
    icon: '🌿',
    title: 'A Peaceful Place to Reset',
    desc: 'A calm, clean environment removed from old patterns — designed to support early recovery.',
  },
  {
    icon: '📋',
    title: 'Clear Structure & Accountability',
    desc: 'Expectations are consistent and applied equally. Clarity creates safety.',
  },
  {
    icon: '🤝',
    title: 'A Stable, Supportive Community',
    desc: 'Live alongside others who share your commitment. Shared purpose builds genuine connection.',
  },
]

export default function ExperienceCards() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="section-container">

        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sage-400 font-semibold text-sm uppercase tracking-widest mb-3">
            The Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
            What Residents Can Expect
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 bg-sage-500 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {CARDS.map(card => (
            <div
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition"
            >
              <span className="text-4xl">{card.icon}</span>
              <h3 className="font-display font-semibold text-white text-lg leading-snug">
                {card.title}
              </h3>
              <p className="text-sand-300 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
