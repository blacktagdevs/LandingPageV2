import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedText } from "./ui/animated-text";
import { AmbientBackground } from "./ui/ambient-background";
import fullLogo from "../assets/FullLogo.svg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <AmbientBackground />

      {/* Content — centered single column */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Logo */}
        <div className="animate-fade-in mb-8" style={{ animationDelay: "200ms" }}>
          <img
            src={fullLogo}
            alt="BlackTagDevs — Technical Innovation Studio"
            className="mx-auto h-auto"
            style={{ filter: "invert(1) brightness(2)", maxWidth: "1000px", width: "100%" }}
          />
        </div>

        {/* Headline */}
        <AnimatedText
          text="Software. AI. Data. Designed to Scale."
          tag="h1"
          className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6"
          delay={400}
          staggerDelay={90}
        />

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up"
          style={{ color: "rgba(255, 255, 255, 0.75)", animationDelay: "900ms" }}
        >
          We build enterprise-grade products with startup speed — from
          architecture to launch, we own the full stack so you can own
          the market.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "1100ms" }}
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-background font-semibold rounded-full transition-all duration-300 text-sm"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center px-8 py-4 text-white rounded-full transition-all duration-300 text-sm"
            style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
          >
            See What We Build
          </button>
        </div>

        {/* Stats row */}
        <div
          className="inline-flex flex-wrap justify-center gap-x-12 gap-y-4 pt-8 animate-fade-in-up"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            animationDelay: "1300ms",
          }}
        >
          <div>
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>Products Shipped</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">30+</div>
            <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>Years Combined</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={scrollToServices}
          className="transition-colors"
          style={{ color: "rgba(255, 255, 255, 0.3)" }}
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
