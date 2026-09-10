import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Featured } from "./components/Featured";
import { Footer } from "./components/Footer";
import { StructuredData } from "./components/StructuredData";
import { LoadingScreen } from "./components/LoadingScreen";

// Lazy load below-fold sections for better performance
const Portfolio = lazy(() =>
  import("./components/Portfolio").then((m) => ({ default: m.Portfolio }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact }))
);

export default function App() {
  // Dispatch render-complete event for prerendering
  useEffect(() => {
    document.dispatchEvent(new Event("render-complete"));
  }, []);

  return (
    <>
      <StructuredData />

      <div className="min-h-screen">
        {/* Skip to main content link for accessibility - only visible on focus */}
        <a
          href="#main-content"
          className="absolute left-4 bg-white text-black px-4 py-2 rounded-md z-[60]
                     focus:top-4 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ top: '-100px' }}
          onFocus={(e) => e.currentTarget.style.top = '16px'}
          onBlur={(e) => e.currentTarget.style.top = '-100px'}
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content">
          <Hero />
          <Services />
          <About />
          <Featured />
          <Suspense
            fallback={
              <div className="h-96 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              </div>
            }
          >
            <Portfolio />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>

      <Toaster position="top-right" richColors closeButton />
    </>
  );
}