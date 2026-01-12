import { motion } from "framer-motion";

export default function Templates() {
  return (
    <section className="py-28 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">
        Choose your style
      </h2>

      <p className="text-center text-gray-400 mb-16">
        Pick a theme that matches your personality
      </p>

      <div className="relative">
        <div className="flex gap-10 px-10 overflow-x-auto scrollbar-hide pb-10">

          {templates.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-slate-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur hover:scale-105 hover:border-white/30 transition cursor-pointer"
            >
              <img
                src={t.image}
                className="rounded-xl mb-6 w-full h-[420px] object-cover"
              />

              <h3 className="font-semibold text-xl">{t.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{t.desc}</p>

              <button className="mt-5 w-full border border-white/20 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Use this style
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

/* TEMPLATE DATA */
const templates = [
  {
    name: "Dark Glow",
    desc: "Minimal & modern creator look",
    image: "/templates/t1.png",
  },
  {
    name: "Neon Creator",
    desc: "For influencers and streamers",
    image: "/templates/t2.png",
  },
  {
    name: "Glass Profile",
    desc: "Clean professional look",
    image: "/templates/t3.png",
  },
  {
    name: "Gradient Pop",
    desc: "Colorful & bold design",
    image: "/templates/t4.png",
  },
  {
    name: "Soft Minimal",
    desc: "Perfect for portfolios",
    image: "/templates/t5.png",
  },
];
