import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
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
    <HelmetProvider>
      <Helmet>
        <title>BlackTagDevs | Technology Consulting & Product Development</title>
        <meta
          name="description"
          content="BlackTagDevs builds efficient, scalable tech solutions across software, data, AI, and design. Expert team from Amex, Microsoft, Google & NBC."
        />
        <meta
          name="keywords"
          content="technology consulting, software development, AI tools, fullstack development, product strategy, Atlanta tech, data engineering, digital transformation"
        />
        <link rel="canonical" href="https://blacktagdevs.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BlackTagDevs | Pioneering Technical Innovations"
        />
        <meta
          property="og:description"
          content="End-to-end tech solutions across software, data, AI, and design. Building efficient, scalable solutions for your business."
        />
        <meta property="og:url" content="https://blacktagdevs.com" />
        <meta
          property="og:image"
          content="https://blacktagdevs.com/og-image.png"
        />
        <meta property="og:site_name" content="BlackTagDevs" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BlackTagDevs" />
        <meta
          name="twitter:description"
          content="Pioneering Technical Innovations - End-to-end tech solutions across software, data, AI, and design."
        />
        <meta
          name="twitter:image"
          content="https://blacktagdevs.com/og-image.png"
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BlackTagDevs" />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Atlanta" />
      </Helmet>

      <StructuredData />

      <div className="min-h-screen">
        {/* Skip to main content link for accessibility - only visible on focus */}
        <a
          href="#main-content"
          className="absolute -top-full left-4 bg-white text-black px-4 py-2 rounded-md z-[60]
                     focus:top-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content">
          <Hero />
          <Services />
          <About />
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
    </HelmetProvider>
  );
}