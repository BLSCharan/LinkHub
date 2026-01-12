import { motion } from "framer-motion";

const icons = [
  "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Insta
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
  "https://cdn-icons-png.flaticon.com/512/733/733579.png", // Twitter
  "https://cdn-icons-png.flaticon.com/512/733/733553.png", // GitHub
  "https://cdn-icons-png.flaticon.com/512/174/174883.png", // YouTube
  "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // WhatsApp
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20">
        How it works
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 px-10 items-center">

        {/* LEFT STEPS */}
        <div className="space-y-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8 flex items-center gap-6"
            >
              <div className="text-3xl font-bold text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-xl">{s.title}</h3>
                <p className="text-gray-400 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ROTATING ICON ORB */}
        <div className="relative flex justify-center items-center">
          <motion.div
            className="relative w-80 h-80"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {icons.map((icon, i) => {
              const angle = (360 / icons.length) * i;
              const radius = 130;

              return (
                <img
                  key={i}
                  src={icon}
                  className="w-14 h-14 absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `
                      rotate(${angle}deg)
                      translate(${radius}px)
                      rotate(-${angle}deg)
                    `,
                  }}
                />
              );
            })}
          </motion.div>

          <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Create your account",
    desc: "Sign up and get your personal LinkHub page instantly.",
  },
  {
    title: "Add your links",
    desc: "Instagram, GitHub, YouTube, websites — all in one place.",
  },
  {
    title: "Share your profile",
    desc: "One link that opens everything about you.",
  },
];
