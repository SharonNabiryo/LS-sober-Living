const FEATURES = [
  { icon: "🛏️", text: "Clean, comfortable shared rooms" },
  { icon: "🛋️", text: "Welcoming common areas to relax and connect" },
  { icon: "🌿", text: "Peaceful environment away from old triggers" },
  { icon: "🏗️", text: "Structure without a clinical or institutional feel" },
];

export default function HomeFeel() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-3">
              The Home
            </p>
            <h2 className="section-heading">
              A Home Built
              <br />
              for Stability
            </h2>
            <div className="accent-line" />
            <p className="text-navy-600 leading-relaxed mb-8">
              Our home is designed to feel like a real home — not a facility.
              Clean, furnished, and calm.
            </p>
            <div className="flex flex-col gap-4">
              {FEATURES.map((f) => (
                <div key={f.text} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5 shrink-0">{f.icon}</span>
                  <span className="text-navy-700 leading-relaxed">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image mosaic — replace srcs with real home photos */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/Living_room.JPG"
              alt="Common area"
              className="col-span-2 w-full h-52 object-cover rounded-2xl shadow-sm"
            />
            <img
              src="/kitchen.jpg"
              alt="Kitchen"
              className="w-full h-36 object-cover rounded-2xl shadow-sm"
            />
            <img
              src="/bedroom.JPG"
              alt="Bedroom"
              className="w-full h-36 object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
