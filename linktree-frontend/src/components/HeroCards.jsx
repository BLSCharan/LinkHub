import { motion } from "framer-motion";

export default function HeroCards() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white">
            Everything you need
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Create your perfect link-in-bio page with powerful features
          </p>
        </div>

        {/* BIG CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "🔗",
              title: "Simple Links",
              desc: "Add unlimited links to your page in seconds. Easy to create, easier to share.",
            },
            {
              icon: "🎨",
              title: "Custom Themes",
              desc: "Choose from beautiful themes or create your own. Make your page uniquely yours.",
            },
            {
              icon: "👁️",
              title: "Live Preview",
              desc: "See changes in real-time as you build. What you see is what visitors get.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="featureCard"
            >
              <div className="text-2xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        

      </div>
    </section>
  );
}
