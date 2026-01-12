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
   <section className="w-full bg-black py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
        One link for <br />
        <span className="text-gray-400">everything</span>
      </h1>

      <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
        Share all your links, social profiles, contact info and more in one powerful page.  
        The only link you’ll ever need.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <a
          href="/signup"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:scale-105 transition"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="border border-white/20 px-8 py-4 rounded-xl text-base md:text-lg hover:bg-white/5 transition"
        >
          Login
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <div className="flex justify-center mt-16 md:mt-0">
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
