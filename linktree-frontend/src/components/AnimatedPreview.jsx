import { motion } from "framer-motion";

const links = [
  "GitHub",
  "LinkedIn",
  "Portfolio",
  "Resume",
  "YouTube",
  "Twitter",
];

export default function AnimatedPreview() {
  return (
    <div className="relative w-64 h-96 bg-slate-900 rounded-3xl border border-white/10 overflow-hidden p-4">

      {/* top fade */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent z-10" />
      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent z-10" />

      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        {[...links, ...links].map((link, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-xl py-3 text-center text-sm text-white"
          >
            {link}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
