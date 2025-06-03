import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="hero-layout relative z-10 flex items-center justify-center">
        {/* Hero Content */}
        <header className="flex flex-col items-center justify-center md:w-full w-screen md:px-20 px-5 text-center">
          <div className="flex flex-col items-center gap-7">
            <div className="hero-text text-center">
              <h2 className="text-4xl md:text-5xl font-bold">أحوّل الأفكار إلى مواقع حقيقية</h2>
              <h2 className="text-2xl md:text-3xl mt-4">أُصمّم وأُطوّر حلولًا برمجية تحقق نتائج ملموسة وتجارب مستخدم مميزة.</h2>
            </div>

            <h2 className="text-white-50 md:text-lg text-base relative z-10 pointer-events-none">
              مرحبًا، أنا أحمد، مطوّر واجهات ومواقع من مصر، شغوف بتحويل الرؤية إلى واقع.
            </h2>

            <Button
              text="أعمالي"
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
