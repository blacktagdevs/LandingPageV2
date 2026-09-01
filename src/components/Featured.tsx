import {
  ExternalLink,
  Instagram,
  Linkedin,
  Sparkles,
  Handshake,
  Radio,
} from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";
import { AnimatedText } from "./ui/animated-text";
import rendezviewApp from "../assets/rendezview-app.webp";
import rendezviewWordmark from "../assets/rendezview-wordmark-white.svg";

// Copy lifted from the RendezView launch page so the two stay in step.
const capabilities = [
  {
    icon: Sparkles,
    title: "Instant mood matching",
    body: "Share your references. We extract the vibe and surface vendors who've built it before.",
  },
  {
    icon: Handshake,
    title: "Automated negotiation",
    body: "We negotiate fair rates automatically. No haggling, no awkward asks.",
  },
  {
    icon: Radio,
    title: "One live feed",
    body: "Sound checks. Catering arrivals. Vendor confirmations. Nothing falls through.",
  },
];

export function Featured() {
  return (
    <section id="featured" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/25">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Currently Building
            </div>
            <AnimatedText
              text="What we're working on now"
              tag="h2"
              className="text-3xl lg:text-5xl font-bold"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our own product, built in the open. Everything we learn shipping it
              goes back into the work we do for clients.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-6xl mx-auto rounded-2xl border border-border/60 bg-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center">
              {/* Real product shot. Sits on a soft glow so it doesn't float on flat black. */}
              <div className="relative flex justify-center px-8 pt-10 lg:pt-12 pb-0 lg:pb-12 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(255,255,255,0.07) 0%, transparent 70%)",
                  }}
                />
                <img
                  src={rendezviewApp}
                  alt="The RendezView app planning an event with a host"
                  loading="lazy"
                  className="relative w-[210px] sm:w-[240px] lg:w-[260px] h-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:-translate-y-1.5"
                />
              </div>

              <div className="p-8 sm:p-10 lg:py-12 lg:pr-12 lg:pl-4 flex flex-col justify-center gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* RendezView's own white wordmark, as used on their dark hero */}
                  <h3>
                    <img
                      src={rendezviewWordmark}
                      alt="RendezView"
                      className="h-7 sm:h-8 w-auto"
                    />
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    In development · Waitlist open
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-medium">
                  Your vision, fully realized. No compromise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  An AI-powered event planning marketplace connecting hosts with
                  vendors and venues. Hosts describe the event they want;
                  RendezView reads the references, matches the vendors who can
                  deliver it, and handles the back-and-forth.
                </p>

                <div className="flex flex-col gap-4 pt-5 mt-1 border-t border-border/60">
                  {capabilities.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-3.5">
                      <div className="w-8 h-8 shrink-0 rounded-lg bg-brand/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-brand" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-medium text-sm leading-tight">
                          {title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-8 sm:px-10 lg:px-12 pb-8 sm:pb-10 lg:pb-12">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-8">
                <a
                  href="https://rendezview.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-link hover:text-link/80 hover:underline"
                >
                  Visit rendezview.app
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/rendezview.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-link hover:text-link/80 hover:underline"
                >
                  <Instagram className="h-4 w-4" />
                  @rendezview.app
                </a>
                <a
                  href="https://www.linkedin.com/company/rendezview-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-link hover:text-link/80 hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
                  RendezView on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
