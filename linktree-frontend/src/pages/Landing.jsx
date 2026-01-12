import Navbar from "../components/Navbar";
import HeroCards from "../components/HeroCards";
import HowItWorks from "../components/HowItWorks";
import Templates from "../components/Templates";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AnimatedPreview from "../components/AnimatedPreview";

export default function Landing() {
  return (
    <div className="bg-black text-white w-full">

      <Navbar />

      {/* HERO */}
      {/* HERO */}
<section className="min-h-screen flex items-center bg-black">
  <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <div>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
        One link for <br />
        <span className="text-gray-400">everything</span>
      </h1>

      <p className="mt-10 text-xl text-gray-400 max-w-xl leading-relaxed">
        Share all your links, social profiles, contact info and more in one powerful page.  
        The only link you’ll ever need.
      </p>

      <div className="mt-12 flex gap-6">
        <a
          href="/signup"
          className="bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 transition"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="border border-white/20 px-10 py-5 rounded-2xl text-lg hover:bg-white/5 transition"
        >
          Login
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <div className="flex justify-center">
      <AnimatedPreview />
    </div>

  </div>
</section>





      {/* FEATURE CARDS */}
      <HeroCards />

      {/* NEW SECTIONS */}
      <HowItWorks />
      <Templates />
      <CTA />
      <Footer />
    </div>
  );
}
